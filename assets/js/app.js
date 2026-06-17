/* ==========================================================================
   app.js — Vivienne Westwood × 이천쌀
   우리 사이트 커스텀 인터랙션 / 상태관리.
   (템플릿 main.js 는 그대로 두고, 추가 동작만 여기서 구현)
   ========================================================================== */
(function () {
  "use strict";

  var HEADER_HTML = [
    '<div class="container d-flex justify-content-between align-items-center">',
    '  <div class="logo">',
    '    <a href="index.html" class="brand">',
    '      <img src="assets/img/brand/logo.svg" alt="Vivienne Westwood × 이천쌀" class="brand-logo">',
    '    </a>',
    '  </div>',
    '  <nav id="navbar" class="navbar">',
    '    <ul>',
    '      <li class="nav-home"><a href="index.html">Home</a></li>',
    '      <li class="dropdown nav-about"><a href="about.html"><span>About</span> <i class="bi bi-chevron-down"></i></a>',
    '        <ul><li><a href="about.html#timeline">Timeline</a></li><li><a href="symbol.html">Symbol</a></li></ul></li>',
    '      <li class="dropdown nav-products"><a href="products.html"><span>Products</span> <i class="bi bi-chevron-down"></i></a>',
    '        <ul><li><a href="products.html#apparels">Apparels</a></li><li><a href="products.html#acc">ACC</a></li><li><a href="products.html#rice">Icheon Rice</a></li></ul></li>',
    '      <li class="dropdown nav-icheon"><a href="icheon.html"><span>Icheon</span> <i class="bi bi-chevron-down"></i></a>',
    '        <ul><li><a href="icheon.html">Food</a></li><li><a href="icheon-discover.html">Discover</a></li><li><a href="icheon-festival.html">Festivals</a></li></ul></li>',
    '      <li class="dropdown nav-archive"><a href="archive.html"><span>Archive</span> <i class="bi bi-chevron-down"></i></a>',
    '        <ul><li><a href="archive.html">News</a></li><li><a href="archive-gallery.html">Gallery</a></li></ul></li>',
    '      <li class="nav-stores"><a href="stores.html">Stores</a></li>',
    '      <li class="nav-auth"><a class="btn-signup" href="signup.html">가입하기</a><a class="btn-login" href="login.html">로그인</a></li>',
    '    </ul>',
    '    <i class="bi bi-list mobile-nav-toggle"></i>',
    '  </nav>',
    '</div>'
  ].join("\n");

  var FOOTER_HTML = [
    '<div class="footer-top">',
    '  <div class="container">',
    '    <div class="row gy-4">',
    '      <div class="col-lg-5 footer-brand">',
    '        <a href="index.html" class="brand">',
    '          <img src="assets/img/brand/logo-color.png" alt="Vivienne Westwood × 이천쌀" class="brand-logo">',
    '        </a>',
    '      </div>',
    '      <div class="col-lg-3 col-md-6 footer-member">',
    '        <h4>신하현 <small>Shin Hahyun</small></h4>',
    '        <p class="role">Design · Front-end</p>',
    '        <ul>',
    '          <li><a href="https://instagram.com/ha_yeah_thats_my_name" target="_blank" rel="noopener"><i class="bx bxl-instagram"></i> @ha_yeah_thats_my_name</a></li>',
    '          <li><a href="https://www.linkedin.com/in/hahyun-shin-77b9712a8" target="_blank" rel="noopener"><i class="bx bxl-linkedin"></i> LinkedIn</a></li>',
    '        </ul>',
    '      </div>',
    '      <div class="col-lg-3 col-md-6 footer-member">',
    '        <h4>김운정 <small>Kim Woonjung</small></h4>',
    '        <p class="role">Design · Front-end</p>',
    '        <ul>',
    '          <li><a href="https://instagram.com/woonjvng" target="_blank" rel="noopener"><i class="bx bxl-instagram"></i> @woonjvng</a></li>',
    '          <li><a href="#" target="_blank" rel="noopener"><i class="bi bi-journal-text"></i> Notion</a></li>',
    '        </ul>',
    '      </div>',
    '    </div>',
    '  </div>',
    '</div>',
    '<div class="footer-legal">',
    '  <div class="container">',
    '    <div class="copyright">&copy; <span>Vivienne Westwood × 이천쌀</span>. All Rights Reserved.</div>',
    '    <div class="credits">Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a></div>',
    '  </div>',
    '</div>',
    '<div class="footer-tartan" aria-hidden="true"><img src="assets/img/home/footer-tartan.png" alt=""></div>'
  ].join("\n");

  function getPageKey() {
    var file = (location.pathname.split("/").pop() || "index.html").replace(/\.html$/, "");
    return file || "index";
  }

  function setNavActive(pageKey) {
    var header = document.getElementById("header");
    if (!header) return;

    header.classList.toggle("header-transparent", pageKey === "index" || pageKey === "");

    var nav = header.querySelector("#navbar");
    if (!nav) return;

    nav.querySelectorAll("a").forEach(function (link) { link.classList.remove("active"); });

    var map = {
      "index": ".nav-home > a",
      "about": ".nav-about > a",
      "symbol": ".nav-about > a",
      "products": ".nav-products > a",
      "product-detail": ".nav-products > a",
      "icheon": ".nav-icheon > a",
      "icheon-discover": ".nav-icheon > a",
      "icheon-festival": ".nav-icheon > a",
      "archive": ".nav-archive > a",
      "archive-gallery": ".nav-archive > a",
      "article": ".nav-archive > a",
      "stores": ".nav-stores > a"
    };
    var selector = map[pageKey];
    if (selector) {
      var active = nav.querySelector(selector);
      if (active) active.classList.add("active");
    }

    var subMap = {
      "symbol": 'a[href="symbol.html"]',
      "products": 'a[href="products.html"]',
      "product-detail": 'a[href="products.html"]',
      "icheon": 'a[href="icheon.html"]',
      "icheon-discover": 'a[href="icheon-discover.html"]',
      "icheon-festival": 'a[href="icheon-festival.html"]',
      "archive": 'a[href="archive.html"]',
      "archive-gallery": 'a[href="archive-gallery.html"]',
      "article": 'a[href="archive.html"]'
    };
    var sub = subMap[pageKey];
    if (sub) {
      var subLink = nav.querySelector(sub);
      if (subLink) subLink.classList.add("active");
    }
  }

  function renderLayout() {
    var pageKey = getPageKey();
    var header = document.getElementById("header");
    var footer = document.getElementById("footer");

    if (header && !header.dataset.layoutInjected) {
      header.innerHTML = HEADER_HTML;
      header.dataset.layoutInjected = "1";
    }
    if (footer && !footer.dataset.layoutInjected) {
      footer.innerHTML = FOOTER_HTML;
      footer.dataset.layoutInjected = "1";
    }

    setNavActive(pageKey);
  }

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
    var pageKey = getPageKey();
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

      signup.classList.toggle("active", !auth && pageKey === "signup");
      login.classList.toggle("active", !auth && pageKey === "login");
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
    renderLayout();
    initFeatureTabs();
    initSymbolRail();
    initTabs();
    initArchiveFilters();
    initAosReveal();
    updateAuthNav();
    wireAuthForms();
  });
})();
