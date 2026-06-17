/* ==========================================================================
   app.js — Vivienne Westwood × 이천쌀
   공통 레이아웃 주입 + 페이지별 인터랙션
   ========================================================================== */
(function () {
  "use strict";

  const HEADER_HTML = `
    <div class="container d-flex justify-content-between align-items-center">
      <div class="logo">
        <a href="index.html" class="brand">
          <img src="assets/img/brand/logo.svg" alt="Vivienne Westwood × 이천쌀" class="brand-logo">
        </a>
      </div>
      <nav id="navbar" class="navbar">
        <ul>
          <li class="nav-home"><a href="index.html">Home</a></li>
          <li class="dropdown nav-about"><a href="about.html"><span>About</span> <i class="bi bi-chevron-down"></i></a>
            <ul><li><a href="about.html#timeline">Timeline</a></li><li><a href="symbol.html">Symbol</a></li></ul>
          </li>
          <li class="dropdown nav-products"><a href="products.html"><span>Products</span> <i class="bi bi-chevron-down"></i></a>
            <ul><li><a href="products.html#apparels">Apparels</a></li><li><a href="products.html#acc">ACC</a></li><li><a href="products.html#rice">Icheon Rice</a></li></ul>
          </li>
          <li class="dropdown nav-icheon"><a href="icheon.html"><span>Icheon</span> <i class="bi bi-chevron-down"></i></a>
            <ul><li><a href="icheon.html">Food</a></li><li><a href="icheon-discover.html">Discover</a></li><li><a href="icheon-festival.html">Festivals</a></li></ul>
          </li>
          <li class="dropdown nav-archive"><a href="archive.html"><span>Archive</span> <i class="bi bi-chevron-down"></i></a>
            <ul><li><a href="archive.html">News</a></li><li><a href="archive-gallery.html">Gallery</a></li></ul>
          </li>
          <li class="nav-stores"><a href="stores.html">Stores</a></li>
          <li class="nav-auth">
            <a class="btn-signup" href="signup.html">가입하기</a>
            <a class="btn-login" href="login.html">로그인</a>
          </li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
    </div>
  `;

  const FOOTER_HTML = `
    <div class="footer-top">
      <div class="container">
        <div class="row gy-4">
          <div class="col-lg-4 footer-brand">
            <a href="index.html" class="brand">
              <img src="assets/img/brand/logo-color.png" alt="Vivienne Westwood × 이천쌀" class="brand-logo">
            </a>
          </div>
          <div class="col-lg-4 footer-member">
            <h4>신하현 <small>Shin Hahyun</small></h4>
            <ul>
              <li><img class="sns-ic sns-ic--ig" src="assets/img/icons/instagram.svg" alt="Instagram"><a href="https://instagram.com/ha_yeah_thats_my_name" target="_blank" rel="noopener">@ha_yeah_thats_my_name</a></li>
              <li><img class="sns-ic" src="assets/img/icons/linkedin.svg" alt="LinkedIn"><a href="https://www.linkedin.com/in/hahyun-shin-77b9712a8" target="_blank" rel="noopener">www.linkedin.com/in/hahyun-shin-77b9712a8</a></li>
            </ul>
          </div>
          <div class="col-lg-4 footer-member">
            <h4>김운정 <small>Kim Woonjung</small></h4>
            <ul>
              <li><img class="sns-ic sns-ic--ig" src="assets/img/icons/instagram.svg" alt="Instagram"><a href="https://instagram.com/woonjvng" target="_blank" rel="noopener">@woonjvng</a></li>
              <li><img class="sns-ic" src="assets/img/icons/notion.svg" alt="Notion"><a href="https://app.notion.com/014c604dc2e3835da694818cc00304d7?source=copy_link" target="_blank" rel="noopener">https://app.notion.com/014c604dc2e3835da694818cc00304d7?source=copy_link</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-legal">
      <div class="container">
        <div class="copyright">&copy; <span>Vivienne Westwood × 이천쌀</span>. All Rights Reserved.</div>
        <div class="credits">Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a></div>
      </div>
    </div>
    <div class="footer-tartan" aria-hidden="true"><img src="assets/img/home/footer-tartan.png" alt=""></div>
  `;

  const PAGE_MAIN_LINKS = {
    index: ".nav-home > a",
    about: ".nav-about > a",
    symbol: ".nav-about > a",
    products: ".nav-products > a",
    "product-detail": ".nav-products > a",
    icheon: ".nav-icheon > a",
    "icheon-discover": ".nav-icheon > a",
    "icheon-festival": ".nav-icheon > a",
    archive: ".nav-archive > a",
    "archive-gallery": ".nav-archive > a",
    article: ".nav-archive > a",
    stores: ".nav-stores > a"
  };

  const PAGE_SUB_LINKS = {
    symbol: 'a[href="symbol.html"]',
    products: 'a[href="products.html"]',
    "product-detail": 'a[href="products.html"]',
    icheon: 'a[href="icheon.html"]',
    "icheon-discover": 'a[href="icheon-discover.html"]',
    "icheon-festival": 'a[href="icheon-festival.html"]',
    archive: 'a[href="archive.html"]',
    "archive-gallery": 'a[href="archive-gallery.html"]',
    article: 'a[href="archive.html"]'
  };

  const USERS_STORAGE_KEY = "vwUsers";
  const AUTH_STORAGE_KEY = "vwAuth";

  function getPageKey() {
    const fileName = (location.pathname.split("/").pop() || "index.html").replace(/\.html$/, "");
    return fileName || "index";
  }

  function injectLayout() {
    const pageKey = getPageKey();
    const header = document.getElementById("header");
    const footer = document.getElementById("footer");

    if (header && !header.dataset.layoutInjected) {
      header.innerHTML = HEADER_HTML;
      header.dataset.layoutInjected = "1";
    }

    if (footer && !footer.dataset.layoutInjected) {
      footer.innerHTML = FOOTER_HTML;
      footer.dataset.layoutInjected = "1";
    }

    updateNavigationState(pageKey);
  }

  function updateNavigationState(pageKey) {
    const header = document.getElementById("header");
    if (!header) return;

    header.classList.toggle("header-transparent", pageKey === "index");

    const navbar = header.querySelector("#navbar");
    if (!navbar) return;

    navbar.querySelectorAll("a.active").forEach((link) => link.classList.remove("active"));

    const mainLink = PAGE_MAIN_LINKS[pageKey];
    if (mainLink) {
      const activeLink = navbar.querySelector(mainLink);
      if (activeLink) activeLink.classList.add("active");
    }

    const subLink = PAGE_SUB_LINKS[pageKey];
    if (!subLink) return;

    const activeSubLink = navbar.querySelector(subLink);
    if (activeSubLink) activeSubLink.classList.add("active");
  }

  function initFeatureTabs() {
    const featureList = document.querySelector(".feature-list");
    const featureStage = document.querySelector(".feature-stage");
    if (!featureList || !featureStage) return;

    const stageNo = featureStage.querySelector(".feature-stage__no");
    const stageEyebrow = featureStage.querySelector(".eyebrow");
    const stageTitle = featureStage.querySelector(".feature-stage__title");
    const stageLink = featureStage.querySelector("[data-feature-go]");
    const stageImage = featureStage.querySelector("[data-feature-img]");
    const featureItems = featureList.querySelectorAll(".feature-list__item");

    function activateFeature(item) {
      featureItems.forEach((featureItem) => featureItem.classList.remove("is-active"));
      item.classList.add("is-active");

      if (stageNo) stageNo.textContent = item.dataset.no || "";
      if (stageEyebrow) stageEyebrow.textContent = item.dataset.eyebrow || "";
      if (stageTitle) stageTitle.textContent = item.dataset.title || "";
      if (stageLink && item.dataset.go) stageLink.setAttribute("href", item.dataset.go);

      if (stageImage && item.dataset.img) {
        stageImage.setAttribute("src", item.dataset.img);
        stageImage.setAttribute("alt", item.dataset.title || "");
      }

      stageFeatureSwap(featureStage);
    }

    featureItems.forEach((item) => {
      item.addEventListener("click", () => activateFeature(item));
      item.addEventListener("keydown", (event) => {
        if (event.key !== "Enter" && event.key !== " ") return;
        event.preventDefault();
        activateFeature(item);
      });
      item.setAttribute("tabindex", "0");
    });
  }

  function stageFeatureSwap(featureStage) {
    featureStage.classList.remove("is-swap");
    void featureStage.offsetWidth;
    featureStage.classList.add("is-swap");
  }

  function initSymbolRail() {
    const symbolRail = document.querySelector("[data-symbol-rail]");
    if (!symbolRail) return;

    const slides = Array.from(symbolRail.querySelectorAll(".symbol-slide"));

    symbolRail.addEventListener(
      "wheel",
      (event) => {
        if (Math.abs(event.deltaY) < Math.abs(event.deltaX)) return;

        const isAtStart = symbolRail.scrollLeft <= 0;
        const isAtEnd = symbolRail.scrollLeft + symbolRail.clientWidth >= symbolRail.scrollWidth - 1;
        if ((event.deltaY < 0 && isAtStart) || (event.deltaY > 0 && isAtEnd)) return;

        event.preventDefault();
        symbolRail.scrollLeft += event.deltaY;
      },
      { passive: false }
    );

    function markCenterSlide() {
      const middlePoint = symbolRail.scrollLeft + symbolRail.clientWidth / 2;
      let closestSlide = null;
      let closestDistance = Infinity;

      slides.forEach((slide) => {
        const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
        const distance = Math.abs(slideCenter - middlePoint);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestSlide = slide;
        }
      });

      slides.forEach((slide) => slide.classList.toggle("is-center", slide === closestSlide));
    }

    symbolRail.addEventListener("scroll", () => window.requestAnimationFrame(markCenterSlide));
    markCenterSlide();
  }

  function initTabs() {
    document.querySelectorAll("[data-tab-root]").forEach((tabRoot) => {
      const tabButtons = tabRoot.querySelectorAll("[data-tab-target]");
      const tabPanels = tabRoot.querySelectorAll("[data-tab-panel]");

      tabButtons.forEach((tabButton) => {
        tabButton.addEventListener("click", () => {
          const targetName = tabButton.dataset.tabTarget;

          tabButtons.forEach((button) => button.classList.toggle("is-active", button === tabButton));
          tabPanels.forEach((panel) => {
            panel.classList.toggle("is-active", panel.dataset.tabPanel === targetName);
          });
        });
      });
    });
  }

  function initArchiveFilters() {
    const filterRoot = document.querySelector("[data-archive-filter]");
    if (!filterRoot) return;

    const filterButtons = filterRoot.querySelectorAll("[data-filter]");
    const archiveCards = document.querySelectorAll("[data-archive-card]");

    filterButtons.forEach((filterButton) => {
      filterButton.addEventListener("click", () => {
        const filterName = filterButton.dataset.filter;

        filterButtons.forEach((button) => button.classList.toggle("is-active", button === filterButton));
        archiveCards.forEach((card) => {
          card.hidden = filterName !== "all" && card.dataset.archiveCard !== filterName;
        });
      });
    });
  }

  function initAosReveal() {
    const aosItems = document.querySelectorAll("[data-aos]");
    if (!aosItems.length) return;

    if (!("IntersectionObserver" in window)) {
      aosItems.forEach((item) => item.classList.add("aos-animate"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("aos-animate");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -8% 0px" }
    );

    aosItems.forEach((item) => observer.observe(item));
  }

  function getUsers() {
    try {
      return JSON.parse(localStorage.getItem(USERS_STORAGE_KEY) || "[]");
    } catch (error) {
      return [];
    }
  }

  function setUsers(users) {
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
  }

  function getAuth() {
    try {
      return JSON.parse(localStorage.getItem(AUTH_STORAGE_KEY) || "null");
    } catch (error) {
      return null;
    }
  }

  function setAuth(authUser) {
    if (authUser) {
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(authUser));
      return;
    }

    localStorage.removeItem(AUTH_STORAGE_KEY);
  }

  function updateAuthNav() {
    const pageKey = getPageKey();
    const authUser = getAuth();

    document.querySelectorAll(".nav-auth").forEach((authBox) => {
      const signupLink = authBox.querySelector(".btn-signup");
      const loginLink = authBox.querySelector(".btn-login");
      if (!signupLink || !loginLink) return;

      if (authUser) {
        signupLink.textContent = "마이페이지";
        signupLink.setAttribute("href", "mypage.html");
        loginLink.textContent = "로그아웃";
        loginLink.setAttribute("href", "#");
        loginLink.dataset.logout = "1";
      } else {
        signupLink.textContent = "가입하기";
        signupLink.setAttribute("href", "signup.html");
        loginLink.textContent = "로그인";
        loginLink.setAttribute("href", "login.html");
        delete loginLink.dataset.logout;
      }

      signupLink.classList.toggle("active", !authUser && pageKey === "signup");
      loginLink.classList.toggle("active", !authUser && pageKey === "login");
    });

    document.querySelectorAll("[data-logout]").forEach((logoutButton) => {
      logoutButton.addEventListener("click", (event) => {
        event.preventDefault();
        setAuth(null);
        location.href = "index.html";
      });
    });
  }

  function wireAuthForms() {
    const authBox = document.querySelector(".auth-box");
    if (!authBox) return;

    const submitButton = authBox.querySelector("button");
    if (!submitButton) return;

    const nameInput = authBox.querySelector("#name");
    const emailInput = authBox.querySelector("#email");
    const passwordInput = authBox.querySelector("#password");

    submitButton.addEventListener("click", () => {
      const email = (emailInput && emailInput.value || "").trim();
      const password = (passwordInput && passwordInput.value || "").trim();

      if (nameInput) {
        handleSignup(nameInput, email, password);
        return;
      }

      handleLogin(email, password);
    });
  }

  function handleSignup(nameInput, email, password) {
    const name = (nameInput.value || "").trim();
    if (!name || !email || !password) {
      alert("모든 항목을 입력해주세요.");
      return;
    }

    const users = getUsers();
    if (users.some((user) => user.email === email)) {
      alert("이미 가입된 이메일입니다. 로그인해주세요.");
      location.href = "login.html";
      return;
    }

    users.push({ name, email, pw: password });
    setUsers(users);
    setAuth({ name, email });
    alert(`가입이 완료되었습니다. 환영합니다, ${name}님!`);
    location.href = "mypage.html";
  }

  function handleLogin(email, password) {
    if (!email || !password) {
      alert("이메일과 비밀번호를 입력해주세요.");
      return;
    }

    const user = getUsers().find((savedUser) => savedUser.email === email && savedUser.pw === password);
    if (!user) {
      alert("이메일 또는 비밀번호가 올바르지 않습니다. 가입을 먼저 진행해주세요.");
      return;
    }

    setAuth({ name: user.name, email: user.email });
    location.href = "mypage.html";
  }

  document.addEventListener("DOMContentLoaded", () => {
    injectLayout();
    initFeatureTabs();
    initSymbolRail();
    initTabs();
    initArchiveFilters();
    initAosReveal();
    updateAuthNav();
    wireAuthForms();
  });
})();
