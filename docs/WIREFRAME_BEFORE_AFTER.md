# 와이어프레임 Before & After (WIREFRAME_BEFORE_AFTER)
### Vivienne Westwood × 이천쌀 — 기획 → 구현 비교

> 평가 기준 "4. 와이어프레임 Before & After 구성"용 문서입니다.
> **Before** = Figma 와이어프레임(직접 제작) / **After** = Bootstrap(Moderna) 기반 실제 구현 결과.
> 아래 표의 "변경/개선점"은 **와이어프레임 대비 실제로 무엇을 바꿨는지**를 기록한 것입니다.

---

## 작성 방법
1. 각 페이지 스크린샷을 `docs/before-after/` 폴더에 저장
   - 예) `before-after/home_before.png`(Figma 캡처), `before-after/home_after.png`(구현 캡처)
2. 표의 "After" 칸 = 구현 결과 + 와이어프레임 대비 개선점
3. 발표 시 Before/After를 나란히 두고 "왜 이렇게 바꿨는지" 설명

---

## 0. 공통 (네비 / 푸터)
- **Before**: 와이어프레임 상단 네비(로고 + Home·About·Products·Icheon·Archive·Stores + 가입/로그인 버튼), 하단 멤버 푸터 + 타탄 띠
- **After 구현점**:
  - Moderna 템플릿 `navbar`를 가져와 메뉴 라벨/링크를 우리 페이지로 교체
  - 템플릿 기본 드롭다운을 **호버 메가메뉴**로 확장 (About=Timeline·Symbol / Products=Apparels·ACC·Icheon Rice / Icheon=Food·Discover·Festivals / Archive=News·Gallery)
  - 색/폰트를 **Pretendard(로컬 OTF 9종) + 흑백·레드 타탄**으로 리스킨, `style.css` 무수정·`custom.css` 오버라이드
  - 헤더 상태 분기: 홈=투명→스크롤 시 흰 배경 / 서브페이지=흰 배경 + 하단 보더
  - 푸터: 멤버 2인(신하현·김운정) SNS + **하단 타탄 패치워크 띠**, BootstrapMade 크레딧만 유지
  - 로그인 상태에 따라 네비 우측이 **가입/로그인 ↔ 마이페이지/로그아웃**으로 전환(JS)
- 스크린샷: `before-after/common_before.png` / `common_after.png`

## 1. Home (홈)
| 항목 | Before(와이어프레임) | After(구현) |
|---|---|---|
| 히어로 | 메인 비주얼 1컷 | **사진 히어로(4K)** 유지 — 영상은 히어로가 아닌 하단으로 분리 |
| 영상 | 영상 자리 placeholder | 하단 **"The Film" 다크 영상 섹션**에 YouTube(IJ74YumH2t0) 연동(autoplay·mute·loop) |
| Feature 1~4 | 정적 번호 목록 | 번호/항목 **클릭 시 좌측 이미지·타이틀 교체**(탭 전환 JS) |
| CTA | 스토어 찾기 버튼 | Stores 페이지 연결 |
| 스크린샷 | `home_before.png` | `home_after.png` |

> 핵심 변경: 와이어프레임은 히어로에 영상을 의도했으나, **히어로=사진 / 영상=하단 독립 섹션**으로 재배치해 첫 화면 로딩·가독성을 개선.

## 2. About (어바웃)
| 항목 | Before | After |
|---|---|---|
| 인트로 | 타이틀 + 콘셉트 문구 | 콘셉트 인트로 섹션 |
| 영상 | — | 인트로 다음에 **콜라보 영상(YouTube)** 삽입 |
| 타임라인 Scene 01~10 | 스토리보드 10컷 세로 나열 | **영상 → 스토리보드 10컷** 순서, 좌우 교차 레이아웃 + AOS 스크롤 페이드인 |
| 심볼(로고 모핑) | 로고 변형 이미지 나열 | **별도 페이지 `symbol.html`로 분리** — 휠 스크롤 시 가로로 넘어가는 **모핑 스냅 캐러셀**(중앙 정지·화살표·도트) |
| 라벨 | 타임라인/심볼 | **Timeline / Symbol (영문)** |
| 스크린샷 | `about_before.png` | `about_after.png` |

> 핵심 변경: 심볼을 타임라인 하단이 아니라 **독립 페이지**로 분리, AOS가 늦은 이미지 로드로 안 풀리는 문제를 **IntersectionObserver 안전망**으로 보강.

## 3. Products (프로덕트 / 상세페이지)
| 항목 | Before | After |
|---|---|---|
| 히어로 | 콜라보 배너(뱀+타탄+워드마크+태그라인) | **Figma 그대로 구현** — 다크 그레이니 뱀 배너 + "Vivienne Westwood × 이천쌀" 워드마크 + "어디서든 만나보세요" 태그라인 |
| 탭 | Apparels / ACC / Icheon Rice | **즉시 교체**(JS 탭) |
| 카드 | 정적 카드(72.000₩) | 호버 확대 + **하트 위시(우측 상단)** + Get now, **"어쩌구" 제거→실제 제품명**, 저화질→**고화질 교체** |
| 가격 | 전부 72.000₩ | 어패럴·ACC를 **20만~40만원대로 랜덤**(블랙 248 / 화이트 312 / 실버 276 / 골드 389), 쌀은 72.000W 유지 |
| 하단 | 기여자 + 타탄 패치워크 | 전역 푸터(멤버 2인 + 타탄 띠)로 매핑 |
| 상세 | 레퍼런스 상품 상세 | **옵션 분기(쌀=중량 4kg/10kg)** + ADD TO CART · Get now 2버튼 |
| 스크린샷 | `products_before.png` | `products_after.png` |

> 핵심 변경: 와이어프레임의 뱀 콜라보 배너를 Figma 에셋(2×)으로 충실 재현, 제품명/가격/화질을 실데이터로 교정.

## 4. Icheon (이천) — **3개 페이지로 분리**
| 항목 | Before | After |
|---|---|---|
| Food(맛집) | 6 카드 + 지도 | `icheon.html` — 식당명 정정(강민주의들밥·나랏님이천쌀밥·야반·관촌순두부·희원·호타루) + **카드 클릭→지도 갱신**, 하트 우측 배치 |
| Discover(놀거리) | 폴라로이드 콜라주(타탄) | `icheon-discover.html` — Figma(6:3192) 그대로 **폴라로이드 콜라주**, For Couples/With Friends/For Families **화살표=탭 전환** |
| Festivals(축제) | 3 띠 + 링크 | `icheon-festival.html` — 도자기/산수유/쌀문화 **공식 사이트 외부 링크** |
| 라벨 | 맛집/놀거리/축제 | **Food / Discover / Festivals (영문)** |
| 스크린샷 | `icheon_before.png` | `icheon_after.png` |

> 핵심 변경: 한 페이지였던 이천을 **Food·Discover·Festivals 단독 페이지**로 분리, 도자기 항목은 콘셉트상 삭제.

## 5. Archive (아카이브) — **News / Gallery 분리**
| 항목 | Before | After |
|---|---|---|
| News | 카드 뉴스 | `archive.html` — 카드 클릭→기사, 호버 확대 + 제목 강조 |
| 인터뷰 기사 | 긴 아티클(Figma 28:1717) | **인터뷰 섹션 삭제**, "비비안이 바라본 이천쌀" 카드 → `article.html`로 연결. 기존 납작 이미지 1장을 **실제 HTML 에디토리얼**(헤드라인 → 사진 → 본문 → 인용구 → 사진 → 본문 → 사진 → 기여자)로 재구현(텍스트 선택·반응형) |
| Gallery | 캐러셀 | `archive-gallery.html` — **Swiper + GLightbox + 무한 루프**, 화살표 전용 |
| 라벨 | 뉴스/갤러리/인터뷰 | **News / Gallery (영문)**, 인터뷰 제거 |
| 스크린샷 | `archive_before.png` | `archive_after.png` |

> 핵심 변경: 아티클을 flat 이미지 → **선택 가능한 HTML 기사**로 격상(Figma 28:1717 텍스트·사진 추출).

## 6. Stores (스토어)
| 항목 | Before | After |
|---|---|---|
| 매장 2곳 | 정보 + 사진(WF-22) | 성수(사진 2)·이천(사진 3) **Google Maps iframe 연동**, 사진 클릭→지도, tel 링크, 호버 확대 |
| 스크린샷 | `stores_before.png` | `stores_after.png` |

> 핵심 변경: 잘못 들어갔던 매장 사진을 WF-22 기준으로 교정(성수 2·이천 3).

## 7. 신규 디자인 페이지 (와이어프레임 없음)
> Before가 없으므로 "기획 의도 → 구현 결과"로 비교
- **로그인 / 회원가입** — localStorage 기반 프론트 흉내(가입→계정 생성→자동 로그인→네비 전환), 흑백 미니멀 폼
- **마이페이지** — 위시 / 장바구니 / 주문내역 탭
- **구매 플로우** — 장바구니(수량·삭제·합계 실시간) → 주문서 → 주문완료 + 배송확인 / 환불
- **멤버 소개** — 템플릿 team 카드 응용
- 스크린샷: `login_after.png`, `mypage_after.png`, `checkout_after.png`, `members_after.png`

---

## 부록 — Before/After 캡처 체크리스트
- [ ] common (네비/푸터)  - [ ] home  - [ ] about  - [ ] symbol
- [ ] products  - [ ] product-detail  - [ ] icheon(food/discover/festival)
- [ ] archive(news/gallery)  - [ ] article  - [ ] stores
- [ ] login/signup  - [ ] mypage  - [ ] cart/checkout/order-complete

---

## 8. AI 활용 내역 요약

> 아래 내용은 기말고사 제출용으로, **AI가 한 부분 / 내가 직접 한 부분 / 최종 판단한 부분**을 한 문서에 함께 기록한 정리본이다.

### 8-1. AI를 사용한 부분
- 인터뷰 내용을 정리해 **PROJECT_SPEC.md** 형태로 문서화하는 작업
- 와이어프레임과 레퍼런스를 바탕으로 페이지별 **HTML/CSS/JS 골격 코드**를 만드는 작업
- Figma 링크와 노드를 기준으로 **페이지 레이아웃과 에셋 연결**을 구현하는 작업
- Bootstrap 템플릿의 구조를 분석하고, 어디를 부품으로 쓰고 어디를 새로 만들어야 하는지 정리하는 작업
- 브라우저 스크린샷과 렌더 확인을 통해 **반응형/배치 검증**을 보조하는 작업
- 제출용 문장 초안, 발표용 설명 초안, Before/After 비교 문장 정리

### 8-2. 내가 직접 수정한 부분
- 프로젝트 주제와 전체 콘셉트
- 와이어프레임 전체 구성
- 메뉴 구조와 페이지 분리 방식
- 어떤 페이지를 어떤 역할로 사용할지에 대한 기능 결정
- 제품, Icheon, Archive, Stores 페이지의 실제 콘텐츠 배치와 화면 순서
- 텍스트 표현, 링크 연결, 이미지 교체, 섹션 삭제/추가 같은 세부 수정
- 모바일에서 잘리는 탭, 화살표 위치, 카드 정렬 같은 화면 교정

### 8-3. 최종적으로 내가 판단하고 결정한 부분
- 히어로 영상과 하단 영상 섹션의 분리 여부
- About의 심볼 페이지를 별도로 뺄지 여부
- Icheon을 Food / Discover / Festivals로 분리할지 여부
- 제품 상세에서 쌀 옵션을 중량 단위로 보여줄지 여부
- Archive에서 인터뷰를 기사형 HTML로 따로 둘지 여부
- 어떤 레퍼런스 요소를 반영하고 어떤 요소를 제외할지 여부
- AI가 만든 결과물 중 어떤 부분을 유지하고 어떤 부분을 다시 수정할지 여부

### 8-4. 제출용 한 줄 정리
- AI는 기획 정리, 초안 코드 생성, 자료 정리, 렌더 검증을 보조했고,
- 본인은 주제 선정, 화면 구성, 기능 결정, 레이아웃 수정, 최종 판단을 직접 수행했다.
- 따라서 최종 결과물은 AI 결과를 그대로 제출한 것이 아니라, **본인이 검토·수정·확정한 구현물**이다.
