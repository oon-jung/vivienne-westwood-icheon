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
              <img src="assets/img/brand/logo-full.png" alt="Vivienne Westwood × 이천쌀" class="brand-logo">
            </a>
          </div>
          <div class="col-lg-4 footer-member">
            <h4>신하현 <small>Shin Hahyun</small></h4>
            <ul>
              <li><img class="sns-ic sns-ic--ig" src="assets/img/icons/instagram.svg" alt="Instagram"><a href="https://instagram.com/ha_yeah_thats_my_name" target="_blank" rel="noopener">@ha_yeah_thats_my_name</a></li>
              <li><img class="sns-ic sns-ic--li" src="assets/img/icons/linkedin.svg" alt="LinkedIn"><a href="https://www.linkedin.com/in/hahyun-shin-77b9712a8" target="_blank" rel="noopener">www.linkedin.com/in/hahyun-shin-77b9712a8</a></li>
            </ul>
          </div>
          <div class="col-lg-4 footer-member">
            <h4>김운정 <small>Kim Woonjung</small></h4>
            <ul>
              <li><img class="sns-ic sns-ic--ig" src="assets/img/icons/instagram.svg" alt="Instagram"><a href="https://instagram.com/woonjvng" target="_blank" rel="noopener">@woonjvng</a></li>
              <li><img class="sns-ic sns-ic--no" src="assets/img/icons/notion.svg" alt="Notion"><a href="https://app.notion.com/014c604dc2e3835da694818cc00304d7?source=copy_link" target="_blank" rel="noopener">https://app.notion.com/014c604dc2e3835da694818cc00304d7?source=copy_link</a></li>
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
    <div class="footer-tartan" aria-hidden="true"><img src="down.jpeg" alt=""></div>
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
  const CART_STORAGE_KEY = "vwCart";
  const WISH_STORAGE_KEY = "vwWish";
  const ORDERS_STORAGE_KEY = "vwOrders";

  /* --------------------------------------------------------------------
     커머스 데모 카탈로그 — 상품 이름·가격·이미지의 단일 출처.
     products / product-detail / cart / checkout / mypage 가 전부 이걸 참조한다.
     -------------------------------------------------------------------- */
  const PRODUCTS = {
    "apparel-black": {
      name: "블랙 오브 크롭 탑",
      cat: "Apparels",
      tab: "apparels",
      desc: "비비안의 오브 그래픽을 가슴에 얹은 시그니처 블랙 크롭 탑. 타탄 라벨 디테일로 콜라보의 무드를 담았습니다.",
      optionLabel: "Size",
      options: [
        { val: "S", price: 248000, img: "assets/img/products/apparel-black.png" },
        { val: "M", price: 248000, img: "assets/img/products/apparel-black.png" },
        { val: "L", price: 248000, img: "assets/img/products/apparel-black.png" }
      ]
    },
    "apparel-white": {
      name: "화이트 오브 크롭 탑",
      cat: "Apparels",
      tab: "apparels",
      desc: "쌀알의 흰빛을 담아낸 화이트 크롭 탑. 오브 자수와 미니멀한 절개 라인으로 마감했습니다.",
      optionLabel: "Size",
      options: [
        { val: "S", price: 312000, img: "assets/img/products/apparel-white.png" },
        { val: "M", price: 312000, img: "assets/img/products/apparel-white.png" },
        { val: "L", price: 312000, img: "assets/img/products/apparel-white.png" }
      ]
    },
    necklace: {
      name: "오브 진주 목걸이",
      cat: "Accessories",
      tab: "acc",
      desc: "진주처럼 빛나는 쌀알을 비비안의 오브에 담아낸 콜라보 목걸이. 토성의 고리와 왕관 모티프가 어우러진 시그니처 피스입니다.",
      optionLabel: "Color",
      options: [
        { val: "실버", price: 276000, img: "assets/img/products/acc-1.jpg", hex: "#d9d9d9" },
        { val: "골드", price: 389000, img: "assets/img/products/acc-2.jpg", hex: "#c9a227" }
      ],
      sizeLabel: "Size",
      sizes: ["40cm", "45cm", "50cm"]
    },
    rice: {
      name: "이천 임금님표 쌀",
      cat: "Icheon Rice",
      tab: "rice",
      desc: "비비안 행성에 불시착한 임금님표 이천쌀. 왕실 진상미의 찰기와 은은한 단맛을 콜라보 패키지에 담았습니다.",
      optionLabel: "중량",
      options: [
        { val: "4kg", price: 24000, img: "assets/img/products/rice-4kg.png" },
        { val: "10kg", price: 55000, img: "assets/img/products/rice-10kg.png" }
      ]
    }
  };

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

  /* --------------------------------------------------------------------
     모바일 네비 — main.js(원본)는 스크립트 로드 시점에 .mobile-nav-toggle을 찾는데
     헤더는 DOMContentLoaded에서 주입되므로 리스너가 안 붙는다.
     → document 위임 방식으로 토글/드롭다운을 여기서 처리한다. (main.js 무수정)
     -------------------------------------------------------------------- */
  function initMobileNav() {
    document.addEventListener("click", (event) => {
      const navbar = document.getElementById("navbar");
      if (!navbar) return;

      const toggle = event.target.closest(".mobile-nav-toggle");
      if (toggle) {
        navbar.classList.toggle("navbar-mobile");
        toggle.classList.toggle("bi-list");
        toggle.classList.toggle("bi-x");
        // 헤더의 backdrop-filter(스크롤 시 블러)가 fixed 오버레이의 기준을 헤더로 바꿔
        // 메뉴가 헤더 높이에 갇히는 문제 → 열림 동안 nav-open으로 블러를 끈다(custom.css)
        // body에도 토글: back-to-top(z-index 99999) 숨김 등 헤더 밖 요소 제어용
        const isOpen = navbar.classList.contains("navbar-mobile");
        const header = document.getElementById("header");
        if (header) header.classList.toggle("nav-open", isOpen);
        document.body.classList.toggle("nav-open", isOpen);
        return;
      }

      if (!navbar.classList.contains("navbar-mobile")) return;

      // 모바일 오버레이에서 드롭다운 부모(About 등) 탭 → 이동 대신 하위 메뉴 펼침
      const dropdownLink = event.target.closest(".navbar .dropdown > a");
      if (dropdownLink && dropdownLink.nextElementSibling) {
        event.preventDefault();
        dropdownLink.nextElementSibling.classList.toggle("dropdown-active");
      }
    });
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
    // symbol.html은 자체 인라인 스크립트(.sy-slide)가 휠/중앙강조를 전담한다.
    // 여기서 또 wheel 리스너를 붙이면 scrollLeft가 두 번 더해져 휠이 두 배로 튄다 → 슬라이드 없으면 즉시 종료.
    if (slides.length === 0) return;

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

  /* --------------------------------------------------------------------
     커머스 저장소 — localStorage 기반 장바구니(vwCart)·위시(vwWish)·주문(vwOrders)
     -------------------------------------------------------------------- */
  function readStorage(storageKey, fallback) {
    try {
      const parsed = JSON.parse(localStorage.getItem(storageKey));
      return parsed === null || parsed === undefined ? fallback : parsed;
    } catch (error) {
      return fallback;
    }
  }

  function getCart() {
    return readStorage(CART_STORAGE_KEY, []);
  }

  function setCart(lines) {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(lines));
  }

  function getWish() {
    return readStorage(WISH_STORAGE_KEY, []);
  }

  function setWish(items) {
    localStorage.setItem(WISH_STORAGE_KEY, JSON.stringify(items));
  }

  function getOrders() {
    return readStorage(ORDERS_STORAGE_KEY, []);
  }

  function addOrder(order) {
    const orders = getOrders();
    orders.push(order);
    localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders));
  }

  function findOption(productId, optionValue) {
    const product = PRODUCTS[productId];
    if (!product) return null;
    return product.options.find((option) => option.val === optionValue) || product.options[0];
  }

  // 장바구니 라인({id, opt, size, qty})에 카탈로그의 이름·가격·이미지를 붙여 반환
  function resolveCartLine(line) {
    const product = PRODUCTS[line.id];
    const option = findOption(line.id, line.opt);
    if (!product || !option) return null;

    const optionText = [product.optionLabel + " " + option.val, line.size ? "Size " + line.size : ""]
      .filter(Boolean)
      .join(" / ");
    return { id: line.id, opt: option.val, size: line.size || null, qty: line.qty, name: product.name, price: option.price, img: option.img, optionText };
  }

  function addToCart(productId, optionValue, sizeValue, quantity) {
    const option = findOption(productId, optionValue);
    if (!option) return;

    const cart = getCart();
    const size = sizeValue || null;
    const existing = cart.find((line) => line.id === productId && line.opt === option.val && (line.size || null) === size);
    if (existing) existing.qty += quantity;
    else cart.push({ id: productId, opt: option.val, size, qty: quantity });
    setCart(cart);
  }

  function isWished(productId, optionValue) {
    const option = findOption(productId, optionValue);
    if (!option) return false;
    return getWish().some((item) => item.id === productId && item.opt === option.val);
  }

  function toggleWish(productId, optionValue) {
    const option = findOption(productId, optionValue);
    if (!option) return false;

    const wish = getWish();
    const index = wish.findIndex((item) => item.id === productId && item.opt === option.val);
    if (index >= 0) wish.splice(index, 1);
    else wish.push({ id: productId, opt: option.val });
    setWish(wish);
    return index < 0;
  }

  function formatWon(value) {
    return value.toLocaleString("ko-KR") + " W";
  }

  // 페이지 인라인 스크립트에서 쓰는 커머스 공용 API
  window.VW = {
    PRODUCTS,
    formatWon,
    getAuth,
    findOption,
    getCart,
    setCart,
    addToCart,
    resolveCartLine,
    getWish,
    toggleWish,
    isWished,
    getOrders,
    addOrder
  };

  document.addEventListener("DOMContentLoaded", () => {
    injectLayout();
    initMobileNav();
    initFeatureTabs();
    initSymbolRail();
    initTabs();
    initArchiveFilters();
    initAosReveal();
    updateAuthNav();
    wireAuthForms();
  });
})();
