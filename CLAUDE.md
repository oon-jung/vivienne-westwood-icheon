# CLAUDE.md — 프로젝트 안내 & 유지보수 지침
### Vivienne Westwood × 이천쌀 (비비안 × 이천쌀) 콜라보 웹사이트

> 이 파일은 **매 작업 세션마다 가장 먼저 읽는 기준 문서**입니다.
> 먼저 이 문서를 읽고, 프로젝트의 목적과 현재 상태를 파악한 뒤 작업을 시작합니다.
> 이 문서에는 **(1) 기말 평가 기준에 대응하는 설명**, **(2) 코드를 어떻게 정리하고 유지보수해야 하는지의 규칙**이 함께 들어 있습니다.
> 변경이 필요하면 반드시 아래 **"유지보수 원칙"**을 지키고, 맨 끝 **"변경 이력"**에 한 줄로 기록합니다.

---

# 📌 0. 한눈에 보기

| 항목 | 내용 |
|---|---|
| 주제 | "비비안 행성에 불시착한 이천 임금님표 쌀" — 명품 브랜드 × 지역 특산물 콜라보 |
| 베이스 템플릿 | Bootstrap 5.3.3 기반 **Moderna**(BootstrapMade, 무료) |
| 디자인 컨셉 | Pretendard 폰트 · 흑백 미니멀 · 레드 타탄 포인트 |
| 메인 실행 파일 | **`index.html`** |
| 실행 방법 | 폴더에서 `python3 -m http.server 5173` → 브라우저 `http://localhost:5173/` (또는 `index.html` 더블클릭) |
| 페이지 수 | HTML 21개 |
| 원본 무수정 파일 | `assets/css/style.css`, `assets/js/main.js` |
| 우리가 만든 파일 | `assets/css/custom.css`, `assets/js/app.js` |

---

# 🅰 평가 기준 대응 문서

## 1. 사용한 Bootstrap 템플릿 및 선택 이유
- **템플릿: Moderna** (https://bootstrapmade.com/ , Bootstrap 5.3.3 기반, 무료 라이선스)
- **선택 이유**
  - 캐러셀·라이트박스·드롭다운·지도(iframe)·AOS·Swiper·GLightbox 등 **필요한 컴포넌트가 이미 들어 있어** 기능 구현 시간을 줄일 수 있었음
  - 반응형 그리드(Bootstrap)가 탄탄해 다양한 페이지 레이아웃을 빠르게 잡을 수 있었음
  - 구조가 단순해 **우리 디자인(흑백·타탄)으로 리스킨하기 쉬웠음**
- 즉, **"기능은 템플릿에서, 디자인·UI는 우리 와이어프레임 기준"** 으로 가져가는 전략.

## 2. 템플릿 원본 구조와 수정한 부분
**핵심 원칙: 원본을 고치지 않고, 뒤에 덧씌우는 "오버라이드 레이어"로만 작업.**

| 구분 | 원본(템플릿) | 우리가 한 것 |
|---|---|---|
| CSS | `assets/css/style.css` **(한 줄도 수정 안 함)** | `assets/css/custom.css`를 새로 만들어 **뒤에서 색·폰트·간격을 덮어씀** |
| JS | `assets/js/main.js` **(무수정)** | `assets/js/app.js`를 새로 만들어 **우리 인터랙션만 추가** |
| 메인 컬러 | 파란 계열(#1e4356 / #68A4C4) | **흑·백 미니멀(#101010)** + **레드 타탄** 포인트 |
| 폰트 | Open Sans / Roboto (CDN) | **Pretendard** 로컬 폰트(`font/` OTF 9종, `@font-face`) 전면 교체, CDN 제거 |
| 헤더 | 단색 고정 헤더 | 홈=투명→스크롤 시 흰 배경 / 서브=흰 배경+보더 로 상태 분기 |
| 푸터 | 뉴스레터+4열 링크 | 멤버 2인(신하현·김운정) SNS + **하단 타탄 띠** 로 개조 |
| 컴포넌트 | navbar dropdown / AOS / Swiper / GLightbox / Map iframe / back-to-top | **기능은 그대로 재사용**, 메뉴·색·동작만 우리 것으로 교체 |

> 더 자세한 비교표는 `docs/AI_USAGE_LOG.md`의 "4.5 Bootstrap 템플릿을 어떻게 고쳤나" 참고.

## 3. 와이어프레임 Before & After (단계별 진행 과정)
1. **기획(Plan)**: 콜라보 컨셉 확정 → `docs/PROJECT_SPEC.md`로 명세화
2. **와이어프레임(Before)**: Figma로 홈·About·Products·Icheon·Archive·Stores 직접 디자인
3. **구현(After)**: Moderna 템플릿을 리스킨해 페이지별 구현
4. **수정·보완 단계** (실제로 거친 개선들):
   - 히어로 영상 → **사진 히어로 + 하단 독립 영상 섹션**으로 분리
   - About 심볼(로고 모핑) → **별도 페이지 `symbol.html`** 로 분리
   - Icheon → **Food / Discover / Festivals 3개 페이지**로 분리(제목 화살표로 무한 순환)
   - Archive → **News / Gallery 분리**, 인터뷰는 기사형 HTML(`article.html`)로 격상
   - Products → 히어로 배너·실제 제품명·고화질 이미지·가격 현실화·카드 일관화
   - 상품 상세 → **쌀=중량(4kg/10kg) 옵션** 분기
- 페이지별 Before/After 표와 "핵심 변경"은 **`docs/WIREFRAME_BEFORE_AFTER.md`** 에 정리.

## 4. 최종 구현 페이지 목록 (HTML 21개)
| 분류 | 파일 | 설명 |
|---|---|---|
| 홈 | `index.html` | **메인 실행 파일.** 히어로·인트로·영상·Feature 4탭·CTA |
| About | `about.html` | 인트로 → 영상 → 스토리보드 타임라인(10컷) |
| About | `symbol.html` | 로고 모핑 가로 스냅 캐러셀 |
| Products | `products.html` | 콜라보 배너 + Apparels/ACC/Rice 탭 + 카드 |
| Products | `product-detail.html` | 상품 상세(옵션·장바구니) |
| Icheon | `icheon.html` | Food(맛집) — 카드→지도 |
| Icheon | `icheon-discover.html` | Discover(놀거리) — 폴라로이드 콜라주 |
| Icheon | `icheon-festival.html` | Festivals(축제) — 외부 공식 링크 |
| Archive | `archive.html` | News(카드 뉴스) |
| Archive | `archive-gallery.html` | Gallery(Swiper+GLightbox) |
| Archive | `article.html` | 인터뷰 기사("비비안이 바라본 이천") |
| Stores | `stores.html` | 매장 2곳 + Google 지도 |
| 계정 | `login.html` `signup.html` `mypage.html` | 로그인·가입·마이페이지 |
| 커머스 | `cart.html` `checkout.html` `order-complete.html` `shipping.html` `refund.html` | 장바구니~주문완료·배송·환불 |
| 기타 | `members.html` | 멤버 소개 |

## 5. 메인 페이지 스크린샷 & 실행 방법
- **스크린샷**: `docs/before-after/home_after.png` (메인페이지 전체 캡처)
- **실행 방법**
  1. 압축 해제 후 폴더로 이동
  2. 터미널에서 `python3 -m http.server 5173`
  3. 브라우저에서 `http://localhost:5173/` 접속 (메인 = `index.html`)
  - 서버 없이 `index.html`을 직접 열어도 대부분 동작(상대경로 사용)
- **경로 규칙**: 모든 이미지/CSS/JS는 **상대경로**(`assets/...`, `font/...`)라 폴더째 옮겨도 깨지지 않음.

## 6. 본인이 직접 수정·구현한 부분
- 콜라보 **컨셉·내러티브 기획**, **와이어프레임 전체 디자인**(Figma)
- **사이트 구조/페이지 분리** 결정(Icheon 3분할, Archive 분리, Symbol 독립 등)
- 페이지별 **인터랙션 선택**(Feature 탭, 호버 오버레이, 화살표 페이지 순환, 쌀 중량 옵션 등)
- 실데이터 교정: **제품명·가격·식당명·매장 사진·이미지 화질**
- 디테일 지적·교정: 쌀에 목걸이 이미지, 어패럴 글씨 겹침, 인터뷰 기여자 중복, 폰트 크기, 정렬 등
> 상세 항목은 `docs/AI_USAGE_LOG.md` 3·4절, `docs/WIREFRAME_BEFORE_AFTER.md` 8절 참고.

## 7. AI 도구 사용 내역 + 본인 판단·수정 부분
- **AI 사용 여부**: 사용함(대화형 AI로 코드 골격 생성·Figma 에셋 연결·렌더 검증 보조).
- **AI가 한 것**: HTML/CSS/JS 골격, Figma 노드→코드 변환, 이미지 추출/크롭, 헤드리스 브라우저 검증, 문서 초안.
- **본인이 한 것**: 주제·기획·와이어프레임·구조·인터랙션 결정, 실데이터 교정, 결과 검토 후 재수정 지시.
- **최종 판단**: AI 결과 중 무엇을 채택/수정/폐기할지 **전부 본인이 결정** → 결과물은 *본인이 검토·확정한 구현물*.
> 전체 정리는 `docs/AI_USAGE_LOG.md`.

---

# 🅱 코드 구조 & 유지보수 원칙 (앞으로 코드 고칠 때 반드시 준수)

## B-1. 폴더 구조
```
WEB_Final/
├─ index.html … (HTML 21개, 각 페이지)
├─ assets/
│  ├─ css/ style.css(원본·무수정)  custom.css(우리 오버라이드)
│  ├─ js/  main.js(원본·무수정)    app.js(우리 인터랙션)
│  ├─ img/ home/ products/ icheon/ archive/ stores/ about/ brand/ …
│  └─ vendor/ (bootstrap, aos, swiper, glightbox, boxicons …)
├─ font/ Pretendard-*.otf (9종)
├─ docs/ PROJECT_SPEC.md · WIREFRAME_BEFORE_AFTER.md · AI_USAGE_LOG.md · before-after/
└─ CLAUDE.md (이 파일)
```

## B-2. 절대 규칙 (깨지 않기)
1. **`assets/css/style.css` 와 `assets/js/main.js` 는 절대 수정하지 않는다.** (템플릿 원본 보존)
   - 디자인을 바꾸려면 → `custom.css`에 규칙을 **추가**해서 덮어쓴다.
   - 동작을 바꾸려면 → `app.js`에 함수를 **추가**한다.
2. **공통 요소(헤더 네비·푸터·디자인 토큰)** 는 `custom.css`가 단일 출처. 모든 페이지가 같은 헤더/푸터 HTML을 쓴다 → **한 페이지만 다르게 보이면 그 페이지의 인라인 `<style>` 오버라이드가 원인.** (예전에 products 푸터가 달라 보였던 것이 이 케이스)
3. **페이지 전용 스타일은 그 HTML의 `<head> 안 인라인 `<style>`** 에 둔다(자기완결형). 다른 페이지에 영향 주지 않도록.
4. **이미지는 항상 상대경로**(`assets/...`). 경로 오류는 구현 완성도 감점 요인.
5. 코드를 고치면 **이 파일 맨 끝 "변경 이력"에 한 줄** 남긴다.

## B-3. 디자인 토큰 (색·폰트는 변수로)
`custom.css` `:root`에 정의된 변수만 사용한다(직접 색상값 남발 금지).
- 검정 `--k-black:#101010` · 흰 `--white:#fff` · 회색 `--back-w2/w4`, `--grey-900~600`
- 타탄 레드 `--c-red:#c1121f`
- 폰트 `--font-base`, `--font-display` = `"Pretendard"`

## B-4. 자주 쓰는 JS 모듈 (`app.js`)
| 함수 | 역할 |
|---|---|
| `initFeatureTabs` | 홈 Feature 4탭: 우측 항목 클릭 → 좌측 이미지/제목/링크 교체 |
| `initSymbolRail` | 심볼 페이지 휠→가로 스크롤 캐러셀 |
| `initTabs` | `data-tab-root/target/panel` 기반 공통 탭 전환 |
| `initAosReveal` | AOS가 늦은 이미지로 안 풀릴 때 IntersectionObserver 안전망 |
| `getUsers/setAuth/updateAuthNav/wireAuthForms` | localStorage 로그인 흉내 + 네비 상태 전환 |

## B-4-2. JS 작성 스타일
- 새로 쓰는 JS는 **`const` 먼저, 꼭 필요할 때만 `let`, `var` 금지**.
- 함수는 한 가지 일만 하게 나눈다. 길어지면 `render / bind / handle` 식으로 분리한다.
- 조건문은 중첩보다 **early return** 으로 평평하게 쓴다.
- 변수명은 역할이 보이게 짓고, 임시 이름(`tmp`, `data1`)은 쓰지 않는다.
- 코드만 봐도 아는 내용은 주석으로 반복하지 않고, 구간 설명만 짧게 남긴다.

## B-5. 코드 수정 절차 (왜→어떻게→검증→기록)
1. **왜**: 무엇이 문제인지 한 문장으로 적는다. (예: "어패럴 카드에 글자가 겹친다")
2. **원인 찾기**: HTML 마크업인지 / `custom.css`인지 / 페이지 인라인 `<style>`인지 / **이미지에 글자가 박혀있는지** 구분한다. (어패럴 겹침은 이미지에 텍스트가 박혀 있던 케이스였다)
3. **어떻게**: 원본(style.css/main.js)은 두고, custom.css·app.js·해당 HTML만 고친다. 색/폰트는 토큰 사용.
4. **검증**: 로컬 서버로 띄워 화면 확인. 헤드리스 점검 시 **창 너비 1440 이상**(`--headless=new --window-size=1460,2400`)으로 봐야 데스크톱 레이아웃이 정상으로 보인다(좁으면 컬럼이 세로로 쌓여 잘못 보임). 이미지 교체 후엔 **브라우저 캐시** 때문에 안 바뀐 듯 보일 수 있으니 새로고침/시크릿으로 확인.
5. **기록**: 아래 "변경 이력"에 `날짜 | 무엇을 | 왜` 한 줄 추가.

## B-6. 유지보수를 위해 정리해 둔 것(중복·이름 정리)
- 모든 페이지의 **헤더/푸터 HTML을 동일 구조**로 통일(메가메뉴 드롭다운 포함).
- 제품 카드 클래스 통일: `.pv-card`(이미지+`.pv-card__label`+`.pv-card__wish`+`.pv-card__body`(가격+`.pv-card__buy`)). **모든 카드가 같은 구조 = 같은 모양**.
- 이천 3페이지의 제목 화살표는 모두 `ic-hero-nav__btn` 클래스를 공유, 동작만 "페이지 순환"으로 통일.
- 기여자(신하현·김운정) 정보는 **공통 푸터 한 곳**에만 둔다(기사 페이지에 중복으로 또 넣지 않는다 — 과거 중복 제거함).

---

# 🗒 변경 이력 (최신이 위 / 한 줄씩)
- 2026-06-17 | 오브 진주 목걸이 가격을 products.html 기준으로 통일 | 상세 276,000W / 골드 389,000W, 장바구니·주문서·마이페이지 합계 동기화
- 2026-06-17 | symbol 캐러셀 휠을 "한 번=한 슬라이드" 스마트 스냅으로 변경 + app.js `initSymbolRail`이 옛 `.symbol-slide` 없으면 종료(인라인 스크립트와 wheel 이중 바인딩 제거), 레일 앞뒤 스페이서(`::before/::after` 27%/모바일 11%)로 1번 슬라이드 중앙 정렬 복구(snap proximity), app.js 캐시버스터 v2→v3 | 휠이 두 배로 튀고 1번 이미지가 안 보이던 문제 교정
- 2026-06-17 | 축제 페이지 상단 여백 축소 | 헤더는 그대로 두고 첫 섹션만 위로 당겨 글로벌 네비게이션이 늘어난 듯 보이는 문제 보정
- 2026-06-17 | stores.html 매장 2곳에 Google Maps 임베드 지도(`.st-store__map` iframe, icheon Food와 동일 패턴) + 주소 "지도에서 보기" 링크 + 전화 `tel:` 링크 추가, 제출_기획서_FULL.md 지도/Stores 항목도 현 코드에 맞게 갱신 | 문서의 "Stores 지도·tel" 서술을 실제 구현으로 일치
- 2026-06-17 | 푸터 최하단 타탄 이미지를 `down.jpeg`로 교체 | 동일 위치 유지 + 새 이미지 반영
- 2026-06-17 | 푸터 최하단 타탄 띠를 다시 복구 | Figma 36:4896 확인 결과 체크무늬 띠 포함이 맞음
- 2026-06-17 | 푸터 맨 아래 타탄 띠 이미지를 삭제 | Designed by BootstrapMade 아래 잘린 이미지 제거
- 2026-06-17 | 푸터 링크드인·노션 줄의 잘린 아이콘 이미지를 제거하고 텍스트 링크만 남김 | 하단 이미지 잘림 문제 해소
- 2026-06-17 | 푸터를 피그마 6:8040(tag)/6:8038(Info) 그대로 재현 — 풀 로고 `assets/img/brand/logo-full.png`(오브+Vivienne Westwood+이천쌀, 첨부 이미지) 신규 추가, 멤버행=아이콘 좌측 고정+핸들/URL 가운데(`assets/img/icons/{instagram,linkedin,notion}.svg`), LinkedIn·Notion은 전체 URL 표기, 3행 동일 높이+이름/첫행 아래만 구분선 | logo-color.png는 오브만이라 풀 로고로 교체, 링크 텍스트·아이콘 와이어프레임대로 (※Notion href는 디자인의 `notion.comp` 오타를 `notion.com`으로 교정)
- 2026-06-17 | `assets/js/app.js`를 const/let 기반으로 재정리하고 함수 분리·조기 반환으로 단순화 | 새 코드 작성 지침 반영
- 2026-06-17 | CLAUDE.md 도입 문구를 더 명확하게 재작성 | 읽는 순서·파악 항목·기록 규칙을 한눈에 보이게 정리
- 2026-06-17 | 푸터 브랜드 로고를 워드마크(`wordmark.svg`)→풀 로고(오브+워드마크 `logo-color.png`)로 교체 — `app.js` FOOTER_HTML + 각 HTML 정적 푸터 + custom.css `.brand-logo`(132/108px) | 신하현·김운정 옆 로고가 오브 없이 나오던 것 피그마(6:8038) 푸터 와이어프레임대로 교정
- 2026-06-17 | 공통 헤더/푸터를 `app.js` 주입 구조로 통일하고 각 HTML은 최소 껍데기만 남김 | 중복 제거·유지보수 단순화
- 2026-06-17 | 상단바·푸터 로고를 워드마크 SVG(`assets/img/brand/logo.svg`, currentColor)로 교체 — 홈 투명헤더는 `filter:invert(1)`로 흰색 | 브랜드 로고 일관화
- 2026-06-17 | 전역 box-shadow 톤다운(블러·투명도 약 절반) — custom.css 3곳 + about/symbol/members/article/gallery/discover | 그림자 과함 완화
- 2026-06-17 | CLAUDE.md(본 문서)·쉬운 설명서 신규 작성, 유지보수 원칙 정리 | 평가 기준 대응 + 향후 유지보수 기준 마련
- 2026-06-17 | 어패럴 블랙 카드 이미지의 박힌 글자(어쩌구/72.000₩/Get now) 크롭 제거, 제품 폰트 축소(라벨16·가격18·탭19) | 글자 겹침·과대 폰트 교정
- 2026-06-17 | 인터뷰(article) 하단 기여자/노란 로고 블록 삭제, NEWS 돌아가기 버튼만 솔리드로 | 신하현·김운정 중복 제거(푸터와 겹침)
- 2026-06-17 | stores 히어로 "매장 찾기" 글자색 흰색 | 배경 위 가독성
- 2026-06-17 | products 푸터 전용 오버라이드 제거 → 공통 푸터로 통일 | 다른 페이지와 동일하게
- 2026-06-17 | 홈 Feature 섹션 Figma(6:3067) 재현(콜라주+리스트+호버 보러가기), 정렬/여백 정리 | 이미지·칸 위치 불일치 교정
- 2026-06-17 | 이천 3페이지 제목 화살표 = Food↔Discover↔Festivals 무한 순환 | 페이지 간 이동 UX
