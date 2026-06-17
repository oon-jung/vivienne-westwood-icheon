/* ==========================================================================
   app.js — Vivienne Westwood × 이천쌀
   우리 사이트 커스텀 인터랙션 / 상태관리.
   (템플릿 main.js 는 그대로 두고, 추가 동작만 여기서 구현)
   ========================================================================== */
(function () {
  "use strict";

  /* ----------------------------------------------------------------------
   * Home — Feature 탭 전환
   * 우측 리스트 항목 클릭 → 좌측 스테이지(번호·타이틀·서브·바로가기) 교체
   * -------------------------------------------------------------------- */
  function initFeatureTabs() {
    var list = document.querySelector(".feature-list");
    var stage = document.querySelector(".feature-stage");
    if (!list || !stage) return;

    var stageNo = stage.querySelector(".feature-stage__no");
    var stageEyebrow = stage.querySelector(".eyebrow");
    var stageTitle = stage.querySelector(".feature-stage__title");
    var stageGo = stage.querySelector("[data-feature-go]");
    var stageImg = stage.querySelector("[data-feature-img]");
    var items = list.querySelectorAll(".feature-list__item");

    function activate(item) {
      items.forEach(function (el) { el.classList.remove("is-active"); });
      item.classList.add("is-active");

      if (stageNo) stageNo.textContent = item.dataset.no || "";
      if (stageEyebrow) stageEyebrow.textContent = item.dataset.eyebrow || "";
      if (stageTitle) stageTitle.textContent = item.dataset.title || "";
      if (stageGo && item.dataset.go) stageGo.setAttribute("href", item.dataset.go);
      if (stageImg && item.dataset.img) {
        stageImg.setAttribute("src", item.dataset.img);
        stageImg.setAttribute("alt", item.dataset.title || "");
      }

      // 부드러운 페이드 리프레시
      stage.classList.remove("is-swap");
      void stage.offsetWidth; // reflow
      stage.classList.add("is-swap");
    }

    items.forEach(function (item) {
      item.addEventListener("click", function () { activate(item); });
      item.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); activate(item); }
      });
      item.setAttribute("tabindex", "0");
    });
  }

  /* ----------------------------------------------------------------------
   * About — Symbol 가로 스크롤 스냅 캐러셀
   * 세로 휠 → 가로 스크롤 변환(레일 위에서만) + 중앙 슬라이드 강조
   * -------------------------------------------------------------------- */
  function initSymbolRail() {
    var rail = document.querySelector("[data-symbol-rail]");
    if (!rail) return;
    var slides = Array.prototype.slice.call(rail.querySelectorAll(".symbol-slide"));

    // 세로 휠을 가로 스크롤로 (레일에 마우스가 있을 때만, 끝에서는 페이지 스크롤 허용)
    rail.addEventListener("wheel", function (e) {
      var dy = e.deltaY;
      if (Math.abs(dy) < Math.abs(e.deltaX)) return; // 이미 가로 입력이면 통과
      var atStart = rail.scrollLeft <= 0;
      var atEnd = rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 1;
      if ((dy < 0 && atStart) || (dy > 0 && atEnd)) return; // 끝이면 페이지 스크롤
      e.preventDefault();
      rail.scrollLeft += dy;
    }, { passive: false });

    // 중앙에 가장 가까운 슬라이드 강조
    function markCenter() {
      var mid = rail.scrollLeft + rail.clientWidth / 2;
      var best = null, bestDist = Infinity;
      slides.forEach(function (s) {
        var c = s.offsetLeft + s.offsetWidth / 2;
        var d = Math.abs(c - mid);
        if (d < bestDist) { bestDist = d; best = s; }
      });
      slides.forEach(function (s) { s.classList.toggle("is-center", s === best); });
    }
    rail.addEventListener("scroll", function () { window.requestAnimationFrame(markCenter); });
    markCenter();
  }

  function initTabs() {
    document.querySelectorAll("[data-tab-root]").forEach(function (root) {
      var buttons = root.querySelectorAll("[data-tab-target]");
      var panels = root.querySelectorAll("[data-tab-panel]");
      buttons.forEach(function (button) {
        button.addEventListener("click", function () {
          var target = button.dataset.tabTarget;
          buttons.forEach(function (b) { b.classList.toggle("is-active", b === button); });
          panels.forEach(function (panel) {
            panel.classList.toggle("is-active", panel.dataset.tabPanel === target);
          });
        });
      });
    });
  }

  function initArchiveFilters() {
    var root = document.querySelector("[data-archive-filter]");
    if (!root) return;
    var buttons = root.querySelectorAll("[data-filter]");
    var cards = document.querySelectorAll("[data-archive-card]");
    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        var filter = button.dataset.filter;
        buttons.forEach(function (b) { b.classList.toggle("is-active", b === button); });
        cards.forEach(function (card) {
          card.hidden = filter !== "all" && card.dataset.archiveCard !== filter;
        });
      });
    });
  }

  /* ----------------------------------------------------------------------
   * AOS 안전망 — 이미지/iframe 늦은 로드로 AOS 위치 계산이 어긋나도
   * data-aos 요소를 뷰포트 진입 시 확실히 노출(opacity:0 → 1).
   * AOS가 정상 동작해도 aos-animate 중복 추가는 무해(idempotent).
   * -------------------------------------------------------------------- */
  function initAosReveal() {
    var els = document.querySelectorAll("[data-aos]");
    if (!els.length) return;
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (e) { e.classList.add("aos-animate"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("aos-animate");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.05, rootMargin: "0px 0px -8% 0px" });
    els.forEach(function (e) { io.observe(e); });
  }

  /* ----------------------------------------------------------------------
   * 계정/로그인 — 프론트 흉내 (localStorage). 새로고침해도 유지.
   * -------------------------------------------------------------------- */
  function getUsers() { try { return JSON.parse(localStorage.getItem("vwUsers") || "[]"); } catch (e) { return []; } }
  function setUsers(u) { localStorage.setItem("vwUsers", JSON.stringify(u)); }
  function getAuth() { try { return JSON.parse(localStorage.getItem("vwAuth") || "null"); } catch (e) { return null; } }
  function setAuth(a) { if (a) localStorage.setItem("vwAuth", JSON.stringify(a)); else localStorage.removeItem("vwAuth"); }

  // 로그인 상태에 따라 네비 우측(가입하기/로그인 ↔ 마이페이지/로그아웃) 전환
  function updateAuthNav() {
    var auth = getAuth();
    document.querySelectorAll(".nav-auth").forEach(function (box) {
      var signup = box.querySelector(".btn-signup");
      var login = box.querySelector(".btn-login");
      if (!signup || !login) return;
      if (auth) {
        signup.textContent = "마이페이지"; signup.setAttribute("href", "mypage.html");
        login.textContent = "로그아웃"; login.setAttribute("href", "#"); login.dataset.logout = "1";
      } else {
        signup.textContent = "가입하기"; signup.setAttribute("href", "signup.html");
        login.textContent = "로그인"; login.setAttribute("href", "login.html"); delete login.dataset.logout;
      }
    });
    document.querySelectorAll("[data-logout]").forEach(function (b) {
      b.addEventListener("click", function (e) { e.preventDefault(); setAuth(null); location.href = "index.html"; });
    });
  }

  // 가입/로그인 폼 처리 (.auth-box — #name 유무로 가입/로그인 구분)
  function wireAuthForms() {
    var box = document.querySelector(".auth-box");
    if (!box) return;
    var btn = box.querySelector("button");
    if (!btn) return;
    var nameI = box.querySelector("#name");
    var emailI = box.querySelector("#email");
    var pwI = box.querySelector("#password");
    btn.addEventListener("click", function () {
      var email = (emailI && emailI.value || "").trim();
      var pw = (pwI && pwI.value || "").trim();
      if (nameI) { // 가입
        var name = (nameI.value || "").trim();
        if (!name || !email || !pw) { alert("모든 항목을 입력해주세요."); return; }
        var users = getUsers();
        if (users.some(function (u) { return u.email === email; })) { alert("이미 가입된 이메일입니다. 로그인해주세요."); location.href = "login.html"; return; }
        users.push({ name: name, email: email, pw: pw }); setUsers(users);
        setAuth({ name: name, email: email });
        alert("가입이 완료되었습니다. 환영합니다, " + name + "님!");
        location.href = "mypage.html";
      } else { // 로그인
        if (!email || !pw) { alert("이메일과 비밀번호를 입력해주세요."); return; }
        var u = getUsers().find(function (u) { return u.email === email && u.pw === pw; });
        if (!u) { alert("이메일 또는 비밀번호가 올바르지 않습니다. 가입을 먼저 진행해주세요."); return; }
        setAuth({ name: u.name, email: u.email });
        location.href = "mypage.html";
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initFeatureTabs();
    initSymbolRail();
    initTabs();
    initArchiveFilters();
    initAosReveal();
    updateAuthNav();
    wireAuthForms();
  });
})();
