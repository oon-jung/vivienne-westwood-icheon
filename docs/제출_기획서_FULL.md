VIVIENNE WESTWOOD × 이천쌀
콜라보 브랜드 웹사이트 — 전체(Full) 버전 기획서
표준웹테크놀로지 기말 과제 제출용 / 팀: 신하현 · 김운정

────────────────────────────────────────
※ 이 문서는 피그마 텍스트로 그대로 붙여넣을 수 있도록 표 없이 플레인 텍스트로 정리했습니다.
※ 평가 안내의 "전체 Full 버전 필수 포함 내용" 순서를 그대로 따랐습니다.
────────────────────────────────────────


■ 01. 주제 및 선정 이유

주제
- "비비안 행성에 불시착한 이천 임금님표 쌀"
- 영국 명품 패션 브랜드 Vivienne Westwood × 한국 지역 특산물 이천쌀의 가상 콜라보 브랜드 사이트.

선정 이유
- 명품(글로벌·하이패션)과 지역 특산물(로컬·농산물)이라는 가장 거리가 먼 두 소재를 붙여, 콜라보의 의외성·메시지를 시각적으로 실험하고 싶었다.
- 흔한 쇼핑몰 클론이 아니라 "브랜드 세계관 + 커머스 + 지역 콘텐츠(이천)"를 한 사이트에 담아 페이지 수와 구성의 다양성을 확보하기 위함.
- 흑백 미니멀 + 레드 타탄(비비안의 시그니처) 조합으로 디자인 톤을 명확히 잡을 수 있어, 일관된 비주얼 정체성을 만들기 좋았다.


■ 02. 주제 개요

- 스토리텔링: 우주의 "비비안 행성"에서 쌀 한 톨이 지구의 이천에 불시착했다는 내러티브를 축으로, About(세계관) → Products(콜라보 상품) → Icheon(지역 콘텐츠) → Archive(브랜드 아카이브) → Stores(매장)로 이어지는 흐름.
- 성격: 서버/DB 없는 정적 멀티페이지 사이트. 로그인·위시리스트·장바구니는 브라우저(localStorage/JS)로 동작하는 "프론트 흉내"로 구현(정적 사이트의 의도된 한계).
- 디자인 컨셉: Pretendard 폰트 · 흑백 미니멀(#101010) · 레드 타탄(#c1121f) 단일 포인트.


■ 03. 대상 사용자와 제작 목적

대상 사용자
- 패션·디자인·콜라보 컬처에 관심 있는 20~30대.
- 지역 특산물의 브랜딩/리브랜딩 사례에 관심 있는 사용자.

제작 목적
- 콜라보 브랜드의 "세계관 → 상품 → 지역 → 구매"까지 하나의 경험으로 보여주는 브랜드 사이트 구현.
- Bootstrap 템플릿을 기능 부품으로만 활용하고, 디자인·구조·인터랙션은 직접 설계한 와이어프레임대로 구현하는 것을 학습 목표로 함.


■ 04. 웹사이트 레퍼런스 및 리서치 (3개 이상)

1) Vivienne Westwood 공식 사이트 (브랜드/하이패션 e-commerce)
   - 참고: 풀스크린 히어로, 절제된 흑백 타이포, 상품 그리드, 미니멀 네비게이션 톤.

2) 임금님표 이천쌀 / 이천시 지역 콘텐츠 (지역 특산물·축제·맛집 정보)
   - 참고: 이천의 실제 콘텐츠(맛집·놀거리·축제) 구성과 신뢰성 있는 정보 구조.

3) 명품 × 로컬/식품 콜라보 캠페인 페이지 (콜라보 브랜딩 레퍼런스)
   - 참고: 콜라보 배너/룩북/에디토리얼 기사형 레이아웃, 스토리텔링 방식.

4) Moderna (BootstrapMade) — 기능 템플릿 레퍼런스
   - URL: https://bootstrapmade.com/free-bootstrap-template-corporate-moderna/
   - 참고: 드롭다운, AOS, Swiper, GLightbox, 지도 iframe 등 검증된 기능 부품.


■ 05. 레퍼런스에서 반영한 요소 / 제외한 요소

반영한 요소
- 하이패션 사이트의 풀스크린 히어로 + 흑백 미니멀 타이포 + 절제된 그리드.
- 콜라보 캠페인의 에디토리얼 기사형 레이아웃(인터뷰 article.html) 및 룩북식 배너.
- 이천 지역 콘텐츠의 실제 정보(실제 식당명, 실제 축제 공식 사이트).
- 템플릿의 기능 컴포넌트(캐러셀·라이트박스·지도·스크롤 애니메이션)만 선별 사용.

제외한 요소
- 템플릿(Moderna)의 기본 색(파란 계열)·기본 폰트(Open Sans/Roboto)·기본 레이아웃 → 전부 우리 디자인으로 교체.
- 템플릿의 뉴스레터/기업소개식 섹션 → 콜라보 브랜드 성격에 맞지 않아 제거.
- 이천 콘텐츠 중 콜라보 컨셉과 약한 항목(도자기 카테고리)은 본문에서 제외.
- 과한 그림자/장식 효과 → 미니멀 톤 유지 위해 톤다운.


■ 06. 웹사이트 기능 정의 및 선정

핵심 기능(선정 이유 포함)
- 공통 헤더/푸터 자동 주입(JS): 21개 페이지의 네비·푸터를 한 곳에서 관리 → 유지보수성.
- 메가메뉴 드롭다운: About/Products/Icheon/Archive 하위 페이지 접근성.
- 현재 페이지 자동 강조(active): URL 기반으로 현재 메뉴 표시.
- 홈 Feature 4탭: 항목 클릭 시 좌측 대표 이미지·타이틀 교체(인터랙션).
- 심볼 모핑 가로 스냅 캐러셀: 휠→가로 스크롤, 중앙 슬라이드 강조.
- 이천 3페이지 화살표 순환: Food ↔ Discover ↔ Festivals 무한 순환 이동.
- 상품 탭/카드 호버/위시(하트)/구매 버튼: 커머스 기본 인터랙션.
- 장바구니 실연동: 수량·삭제·합계 실시간 반영.
- 로그인/회원가입(localStorage): 가입→계정 저장→로그인→네비 상태 전환.
- 갤러리 Swiper + GLightbox: 무한 루프 캐러셀 + 클릭 확대.
- 지도 iframe(Google Maps): Icheon(Food) 맛집 + Stores(성수점·이천본점) 위치 연동(매장별 임베드 지도 + "지도에서 보기" 링크 + 전화 tel: 링크).
- AOS + IntersectionObserver 안전망: 스크롤 등장 애니메이션(늦은 이미지 보강).


■ 07. 메뉴 구조도 / 사이트맵

Home (index.html)
About
   - Timeline (about.html)
   - Symbol (symbol.html)
Products
   - Apparels (products.html#apparels)
   - ACC (products.html#acc)
   - Icheon Rice (products.html#rice)
   - 상품 상세 (product-detail.html)
Icheon
   - Food (icheon.html)
   - Discover (icheon-discover.html)
   - Festivals (icheon-festival.html)
Archive
   - News (archive.html)
   - Gallery (archive-gallery.html)
   - Article 인터뷰 기사 (article.html)
Stores (stores.html)
계정/커머스
   - 로그인 (login.html) / 회원가입 (signup.html) / 마이페이지 (mypage.html)
   - 장바구니 (cart.html) → 주문서 (checkout.html) → 주문완료 (order-complete.html)
   - 배송확인 (shipping.html) / 환불 (refund.html)
기타
   - 멤버 소개 (members.html)


■ 08. 사용한 Bootstrap 템플릿 및 선택 이유

템플릿: Moderna (BootstrapMade, Bootstrap 5.3.3 기반, 무료 라이선스)

선택 이유
- 캐러셀·라이트박스·드롭다운·지도 iframe·AOS·Swiper·GLightbox 등 필요한 기능 부품이 이미 검증된 상태로 들어 있어 기능 구현 시간을 단축.
- Bootstrap 반응형 그리드가 탄탄해 다양한 페이지 레이아웃을 빠르게 구성.
- 구조가 단순해 우리 디자인(흑백·타탄)으로 리스킨하기 쉬움.
- 전략: "기능은 템플릿에서, 디자인·구조·UI는 우리 와이어프레임 기준으로."


■ 09. 템플릿 원본 구조와 수정한 부분

핵심 원칙: 원본을 고치지 않고 "오버라이드 레이어"로만 작업.

- CSS: 원본 assets/css/style.css 는 한 줄도 수정하지 않음. 대신 뒤에 로드되는 custom.css 를 새로 만들어 색·폰트·간격을 덮어씀.
- JS: 원본 assets/js/main.js 무수정. app.js 를 따로 만들어 공통 헤더·푸터 주입(injectLayout)과 우리 인터랙션을 추가. 각 HTML은 헤더/푸터를 빈 컨테이너(<header id="header"></header> / <footer id="footer"></footer>)로 두고 app.js가 동일 마크업을 채워 21페이지 중복을 제거.
- 메인 컬러: 파란 계열(#1e4356/#68A4C4) → 흑백 미니멀(#101010) + 레드 타탄(#c1121f).
- 폰트: Open Sans/Roboto(CDN) → Pretendard 로컬 OTF 9종(@font-face)로 전면 교체, CDN 제거.
- 헤더: 단색 고정 → 홈=투명→스크롤 시 흰 배경 / 서브=흰 배경+보더 로 상태 분기.
- 푸터: 뉴스레터+4열 링크 → 멤버 2인 SNS + 하단 타탄 띠 (BootstrapMade 크레딧만 유지).
- 컴포넌트: 드롭다운/AOS/Swiper/GLightbox/지도/back-to-top → 기능은 재사용, 메뉴·색·동작만 교체.


■ 10. 와이어프레임 Before & After (단계별 진행)

진행 과정
1) 기획(Plan): 콜라보 컨셉 확정 → 명세서(PROJECT_SPEC) 작성.
2) 와이어프레임(Before): Figma로 Home·About·Products·Icheon·Archive·Stores 직접 디자인.
3) 구현(After): Moderna 부품 + Bootstrap 그리드로 와이어프레임대로 구현.
4) 수정·보완 단계(실제 개선 내역):
   - 히어로 영상 → 사진 히어로 + 하단 독립 영상 섹션으로 분리(첫 화면 로딩·가독성).
   - About 심볼(로고 모핑) → 별도 페이지 symbol.html 로 분리.
   - Icheon → Food/Discover/Festivals 3페이지로 분리(제목 화살표로 무한 순환).
   - Archive → News/Gallery 분리, 인터뷰는 기사형 HTML(article.html)로 격상.
   - Products → 콜라보 배너·실제 제품명·고화질 이미지·가격 현실화·카드 일관화.
   - 상품 상세 → 쌀은 Size 대신 중량(4kg/10kg) 옵션으로 분기.

페이지별 Before→After 핵심
- Home: 히어로(사진 유지)+하단 The Film 영상 섹션 / Feature 4탭 이미지 교체.
- About: 인트로→영상→스토리보드 10컷 타임라인(좌우 교차+페이드인) / 심볼 독립 페이지.
- Products: 뱀 콜라보 배너 재현 / 탭 즉시 교체 / 카드 호버+하트+Get now / 실데이터 교정.
- Icheon: 3페이지 분리, 맛집 카드→지도 갱신, 놀거리 폴라로이드 콜라주, 축제 외부 공식 링크.
- Archive: 뉴스 카드→기사, 인터뷰를 flat 이미지→선택 가능한 HTML 에디토리얼로 재구현, 갤러리 무한 루프.
- Stores: 매장 2곳(성수점·이천본점)을 사진 + 주소·운영시간·전화번호로 안내, 매장별 Google Maps 임베드 지도 + "지도에서 보기" 링크 + 전화 tel: 링크.


■ 11. 1차 발표 이후 변경 및 보완 내용

- 공통 헤더/푸터를 각 HTML 반복 작성 → app.js 주입 구조로 통일(중복 제거, 유지보수 단순화).
- 푸터 브랜드 로고를 워드마크 → 오브+워드마크 풀 로고로 교정(피그마 푸터 와이어프레임 일치).
- 어패럴 카드의 박힌 텍스트(이미지에 글자 박힘) 크롭 제거, 제품 폰트 크기 축소.
- 인터뷰(article) 하단 기여자 블록 삭제(공통 푸터와 중복 제거).
- 전역 box-shadow 톤다운(그림자 과함 완화).
- 폰트를 로컬 Pretendard로 통일(디스플레이 세리프 포함), 네비 라벨 영어화.
- 전역 상대경로 점검(폴더째 이동해도 깨지지 않도록).


■ 12. 최종 구현 페이지 목록 (HTML 21개)

홈: index.html (메인 실행 파일 — 히어로·인트로·영상·Feature 4탭·CTA)
About: about.html (인트로→영상→스토리보드 타임라인 10컷)
About: symbol.html (로고 모핑 가로 스냅 캐러셀)
Products: products.html (콜라보 배너 + Apparels/ACC/Rice 탭 + 카드)
Products: product-detail.html (상품 상세 — 옵션·장바구니)
Icheon: icheon.html (Food 맛집 — 카드→지도)
Icheon: icheon-discover.html (Discover 놀거리 — 폴라로이드 콜라주)
Icheon: icheon-festival.html (Festivals 축제 — 외부 공식 링크)
Archive: archive.html (News 카드 뉴스)
Archive: archive-gallery.html (Gallery — Swiper + GLightbox)
Archive: article.html (인터뷰 기사)
Stores: stores.html (매장 2곳 + Google 지도 임베드 + 전화 tel 링크)
계정: login.html / signup.html / mypage.html
커머스: cart.html / checkout.html / order-complete.html / shipping.html / refund.html
기타: members.html (멤버 소개)


■ 13. 최종 구현 디자인 화면 & 실행 방법

스크린샷
- 메인 페이지 캡처: docs/before-after/home_after.png

실행 방법
1) 압축 해제 후 폴더로 이동.
2) 터미널에서: python3 -m http.server 5173
3) 브라우저에서: http://localhost:5173/  (메인 = index.html)
- 서버 없이 index.html 더블클릭으로도 대부분 동작(전부 상대경로).

경로 규칙
- 모든 이미지/CSS/JS/폰트는 상대경로(assets/..., font/...) → 폴더째 옮겨도 깨지지 않음.


■ 14. 본인이 직접 수정·구현한 부분 (코드로 증명되는 직접 기여)

※ 아래는 "AI 초안을 그대로 둔 것"이 아니라, 실제 결과물·코드에 남아 있는 본인 판단·교정의 증거이며 발표에서 직접 설명 가능한 항목이다.

기획·구조 결정 (본인)
- 콜라보 컨셉/내러티브 기획("비비안 행성에 불시착한 이천쌀").
- 사이트 구조·페이지 분리 결정: Icheon 3분할, Archive News/Gallery 분리, Symbol 독립 페이지.
- 페이지별 인터랙션 선택: Feature 탭, 화살표 페이지 순환, 쌀 중량 옵션, 호버 오버레이 등.

실데이터 교정 (코드에 그대로 반영됨)
- 이천 실제 식당명 6곳을 직접 조사·반영: 강민주의들밥 · 나랏님이천쌀밥 · 야반 · 관촌순두부 · 희원 · 호타루.
  (제너릭 더미명이 아니라 실제 상호 → 사람이 직접 리서치해 넣은 부분)
- 이천 3대 축제 공식 사이트 직접 연동:
  icheondoja.kr (도자기) · 2104sansooyou.com (산수유) · ricefestival.or.kr (쌀문화).
- 상품 가격 현실화: 어패럴/ACC를 248,000 / 312,000 / 276,000 / 389,000 처럼 실제 가격대로 직접 책정(초기 일괄 72,000 더미값에서 교정), 쌀은 72,000원대 유지.
- 푸터 멤버 SNS를 실제 본인 계정으로 입력: 신하현 @ha_yeah_thats_my_name + LinkedIn, 김운정 @oonjvng + Notion.
  (개인 실계정 → 본인이 직접 넣은 정보임이 명확)

세부 디테일 교정 (렌더를 직접 보고 발견·지시)
- 쌀 상품 카드에 잘못 들어간 목걸이 이미지 교정.
- 어패럴 카드 이미지에 박힌 글자(텍스트 겹침) 제거 — "이미지에 글자가 박혀 있던 케이스"를 직접 식별.
- 인터뷰 기여자 정보가 푸터와 중복된 것을 발견해 제거.
- 타임라인 이미지가 늦게 로드돼 AOS reveal이 안 풀리는 문제를 IntersectionObserver 안전망으로 보강.
- 인스타 줄바꿈/노션 아이콘 등 SNS 표기 교정.

유지보수 설계 원칙 (본인 지시 → 코드 구조로 증명)
- "원본 style.css/main.js 무수정 + custom.css/app.js 오버라이드" 규칙을 정해 실제로 지킴.
- 디자인 토큰(:root 변수)로 색·폰트를 변수화 → 한 곳 수정으로 전체 반영.
- 공통 헤더/푸터를 app.js의 HEADER_HTML/FOOTER_HTML로 단일화(21페이지 동일 구조).


■ 15. AI 도구 사용 내역 + 본인 판단·수정 부분

AI 도구 사용 여부
- 사용함. 대화형 AI(기획 정리·문서화·코드 골격 생성 보조), 이미지 생성/편집 AI(콜라보 비주얼·로고 모핑 보조), Figma 연동(디자인→코드 변환 보조).

AI를 사용한 부분
- 기획 인터뷰 내용을 명세서(PROJECT_SPEC) 형태로 문서화.
- 페이지별 HTML/CSS/JS 골격 코드 초안 생성.
- Figma 노드/링크 기준 레이아웃·에셋 연결 구현 보조.
- 와이어프레임 PNG에서 이미지 추출, 헤드리스 브라우저 렌더 검증 보조.
- 제출/발표용 문장 초안 정리.

본인이 직접 수정한 부분
- 주제·콘셉트·내러티브, 와이어프레임 전체 디자인(Figma).
- 메뉴 구조·페이지 분리 방식, 페이지별 역할·인터랙션 결정.
- 실데이터 교정(제품명·가격·식당명·축제 링크·멤버 SNS).
- 텍스트·링크·이미지 교체, 섹션 삭제/추가, 모바일 정렬·화살표 위치 등 화면 교정.

최종적으로 본인이 판단·결정한 부분
- 히어로 영상/하단 영상 섹션 분리 여부, 심볼 독립 페이지 여부.
- Icheon 3분할 여부, 상품 상세의 쌀 중량 옵션 여부, 인터뷰 기사형 분리 여부.
- 레퍼런스 중 반영/제외 요소 결정.
- AI 결과물 중 무엇을 채택·수정·폐기할지 전부 본인이 결정.
- 결론: 최종 결과물은 AI 산출물을 그대로 제출한 것이 아니라, 본인이 검토·수정·확정한 구현물.


■ 16. 발표 예상 질문 & 답변 (5분 발표 대비, 직접 설명용)

Q. 템플릿을 그대로 쓴 것 아닌가요?
A. 아니요. 원본 style.css/main.js는 한 줄도 안 고쳤고, custom.css/app.js로만 덮었습니다. 템플릿은 색·레이아웃이 아니라 캐러셀·라이트박스·지도 같은 "기능 부품"만 가져왔습니다.

Q. 이 데이터는 직접 넣은 건가요?
A. 네. 이천 식당 6곳은 실제 상호이고, 축제 3개는 실제 공식 사이트로 연결했습니다. 가격도 더미 72,000원 일괄에서 제품별로 현실화했고, 푸터 SNS는 저희 실제 계정입니다.

Q. AI로 만든 건데 본인이 한 건 뭔가요?
A. 컨셉·구조·인터랙션 결정과 실데이터 교정, 그리고 렌더를 직접 보며 잡은 버그 교정(쌀에 목걸이 이미지, 어패럴 글자 겹침, 타임라인 이미지 미노출 등)이 제 작업입니다. AI는 초안과 반복작업을 보조했습니다.

Q. 정적 사이트인데 로그인·장바구니는 어떻게 동작하나요?
A. localStorage에 계정/상태를 저장하는 "프론트 흉내"입니다. 가입하면 계정이 저장되고, 로그인하면 상단 네비가 마이페이지/로그아웃으로 바뀝니다. 새로고침 시 초기화되는 건 정적 사이트의 의도된 한계입니다.


■ 17. 코드 구현 방식 상세 설명 (직접 작성·이해·설명 가능 영역)

※ 아래는 실제 코드(app.js / custom.css / 각 HTML)의 구현 방식을 "어떤 문법으로, 왜 이렇게 짰는지"로 정리한 것이다.
※ 발표에서 "이 기능 어떻게 구현했나요?" 질문에 그대로 답할 수 있도록 작성했다. 전부 우리가 구조를 정하고 다듬은 구현물이다.

[17-1] 전체 아키텍처 — 정적 사이트 + 오버라이드 레이어
- 구성: 순수 HTML/CSS/바닐라 JS. 프레임워크 없이 Bootstrap 그리드 + 자체 JS로 동작.
- 파일 분리 원칙: 템플릿 원본(style.css, main.js)은 건드리지 않고, 우리 코드(custom.css, app.js)를 뒤에 로드해 덮어쓰는 구조.
  → CSS는 "나중에 로드된 규칙이 이긴다"는 우선순위를 이용해 오버라이드.
- 각 HTML은 <header id="header"></header> / <footer id="footer"></footer> 빈 껍데기 + 본문(main)만 두고, 헤더·푸터는 JS가 채운다.

[17-2] 공통 헤더/푸터 주입 — injectLayout()
- 방식: HEADER_HTML, FOOTER_HTML 을 템플릿 리터럴(백틱) 문자열로 한 번 정의 → document.getElementById("header").innerHTML 에 삽입.
- 중복 방지: header.dataset.layoutInjected 플래그를 세워 두 번 주입되지 않게 함.
- 왜 이렇게: 21개 페이지마다 같은 네비/푸터를 복붙하면 한 곳만 고쳐도 21번 수정해야 함. JS로 한 번에 주입하면 app.js 한 파일만 고치면 전 페이지가 동시에 바뀐다.
- 핵심 문법: 템플릿 리터럴, getElementById, element.innerHTML, dataset.

[17-3] 현재 페이지 메뉴 자동 강조 — getPageKey() + updateNavigationState()
- 현재 파일명 추출: location.pathname.split("/").pop() 로 마지막 경로를 가져오고 .replace(/\.html$/,"") 로 확장자를 떼어 pageKey 를 만든다(예: about.html → "about").
- 매핑 객체 사용: PAGE_MAIN_LINKS, PAGE_SUB_LINKS 라는 객체에 "페이지키 → 강조할 메뉴 선택자"를 정의해 두고, 해당 링크에 classList.add("active") 를 건다.
- 홈만 투명 헤더: header.classList.toggle("header-transparent", pageKey === "index") 로 홈일 때만 투명 헤더 상태.
- 왜 이렇게: if문을 길게 쓰지 않고 "객체 매핑 테이블"로 처리해 페이지가 늘어도 객체에 한 줄만 추가하면 된다.
- 핵심 문법: location.pathname, split/pop/replace, 객체 매핑, classList.toggle/add/remove, querySelector.

[17-4] 홈 Feature 4탭(이미지 교체) — initFeatureTabs()
- 데이터 보관: 각 리스트 항목(.feature-list__item)의 data-no / data-eyebrow / data-title / data-go / data-img 속성에 표시할 값을 심어 둔다.
- 클릭 시 교체: 항목을 누르면 activateFeature()가 dataset 값을 읽어 좌측 무대(stage)의 textContent, setAttribute("src"/"href") 를 바꾼다.
- 접근성: click 뿐 아니라 keydown(Enter/Space)에도 반응하고 tabindex="0" 을 줘 키보드로도 조작 가능.
- 전환 애니메이션 트릭: stageFeatureSwap()에서 클래스를 remove → void offsetWidth(강제 리플로우) → add 순으로 처리해 CSS 트랜지션을 매번 다시 재생시킨다.
- 핵심 문법: dataset, addEventListener("click"/"keydown"), textContent, setAttribute, 강제 reflow.

[17-5] 심볼 가로 스냅 캐러셀 — initSymbolRail()
- 세로 휠 → 가로 스크롤 변환: wheel 이벤트에서 event.deltaY 를 symbolRail.scrollLeft 에 더해 가로로 넘긴다.
- 경계 양보: 레일이 맨 처음/맨 끝일 때는 return 해서 페이지 세로 스크롤을 막지 않는다(자연스러운 UX).
- 중앙 슬라이드 강조: markCenterSlide()가 각 슬라이드 중심과 화면 중심의 거리를 계산해 가장 가까운 슬라이드에 is-center 클래스를 붙인다.
- 성능: scroll 이벤트는 requestAnimationFrame 으로 감싸 과도한 호출을 줄인다.
- 핵심 문법: wheel/scroll 이벤트, scrollLeft, offsetLeft/offsetWidth, requestAnimationFrame, classList.toggle.

[17-6] 공통 탭 전환 — initTabs()
- 선언적 방식: HTML에 data-tab-root(영역) / data-tab-target(버튼) / data-tab-panel(패널) 속성만 달면 JS가 자동으로 연결.
- 동작: 버튼 클릭 시 target 이름과 일치하는 패널에만 is-active 를 준다.
- 왜 이렇게: 페이지마다 따로 탭 스크립트를 짜지 않고, 속성만 붙이면 어디서나 재사용되는 범용 탭으로 만들었다.

[17-7] 스크롤 등장 애니메이션 안전망 — initAosReveal()
- 문제: 큰 이미지가 늦게 로드되면 템플릿의 AOS가 등장 애니메이션을 안 풀어주는 경우가 있었다.
- 해결: IntersectionObserver 로 요소가 화면에 들어오면 aos-animate 클래스를 직접 붙이는 안전망을 추가. 브라우저가 미지원이면 전부 바로 보이게 처리.
- 옵션: threshold 0.05, rootMargin "0px 0px -8% 0px" 로 살짝 늦게 자연스럽게 등장.
- 핵심 문법: IntersectionObserver, isIntersecting, classList.add, unobserve.

[17-8] 로그인/회원가입 — localStorage 프론트 흉내
- 저장소: getUsers/setUsers 는 가입자 목록을 "vwUsers" 키에, getAuth/setAuth 는 현재 로그인 사용자를 "vwAuth" 키에 JSON으로 저장(JSON.stringify/parse). 깨진 값 대비 try/catch.
- 가입(handleSignup): 빈 값 검증 → 이메일 중복 검증(some) → users 배열에 push → 자동 로그인(setAuth) → mypage 이동.
- 로그인(handleLogin): 저장된 사용자 중 이메일+비번이 일치하는지 find 로 확인.
- 네비 상태 전환(updateAuthNav): 로그인 상태면 "가입하기/로그인" 을 "마이페이지/로그아웃" 으로 바꾸고, 로그아웃 클릭 시 setAuth(null) 후 홈으로 이동.
- 한계: 새로고침이 아니라 브라우저를 바꾸거나 저장소를 지우면 초기화 — 서버 없는 정적 사이트의 의도된 한계.
- 핵심 문법: localStorage.getItem/setItem/removeItem, JSON.parse/stringify, Array.some/find/push, location.href.

[17-9] CSS 구현 전략 — 토큰 + 오버라이드 + 자기완결 인라인
- 디자인 토큰: custom.css :root 에 색·폰트를 변수로 선언(--k-black:#101010, --c-red:#c1121f, --font-base:"Pretendard" 등) → 한 곳만 바꾸면 전체 반영.
- 폰트 교체: @font-face 로 font/ 폴더의 Pretendard OTF 9종을 로컬 등록, CDN 제거(오프라인에서도 동일).
- 헤더 상태 분기: .header-transparent 클래스 유무로 홈(투명)과 서브(흰 배경) 스타일을 분기.
- 페이지 전용 스타일: 특정 페이지에서만 쓰는 스타일은 그 HTML <head> 안 인라인 <style> 에 두어 다른 페이지에 영향이 없게 한다(자기완결형).
- 반응형: Bootstrap 그리드(row / col-lg-* 등)로 데스크톱(1440px) 기준 디자인을 모바일까지 대응.

[17-10] 한 줄 요약 (발표용)
- "HTML로 구조, CSS(토큰+오버라이드)로 디자인, 바닐라 JS로 인터랙션을 구현했고, 공통 요소는 JS 주입으로 한 곳에서 관리해 21페이지를 일관되게 유지했습니다."


────────────────────────────────────────
[제출 파일 체크리스트]
- 프로젝트명_발표용버전.ppt / .pdf
- 프로젝트명_전체Full버전.ppt / .pdf  (← 본 문서 내용 기반)
- 프로젝트명_전체소스코드.zip  (index.html 메인, 상대경로 점검 완료)
- zip 파일명 예: 비비안x이천쌀_신하현_김운정.zip
────────────────────────────────────────
