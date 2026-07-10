Vivienne Westwood × 이천쌀 — 웹사이트 제작 명세서 (PROJECT_SPEC)


이 문서는 Claude Code로 넘겨 실제 제작에 사용하는 설계 명세입니다.




★ 최우선 원칙 (반드시 먼저 읽을 것)


디자인·레이아웃·기능의 기준은 "와이어프레임(wireframes/ 폴더)"이다. 모든 화면은 와이어프레임과 본 명세서대로 새로 만든다.
Moderna 템플릿은 "디자인 원본"이 아니라 "부품 창고"다. 템플릿의 레이아웃/색/구성을 따라가지 말 것. 템플릿 모양을 리스킨하는 작업이 절대 아니다.
템플릿은 이미 검증된 기능 부품을 꺼내 쓰는 용도로만 사용한다(예: 드롭다운 동작, Swiper 캐러셀, GLightbox 라이트박스, 지도 iframe, AOS 스크롤 애니메이션). 가져온 부품도 겉모습은 우리 와이어프레임에 맞게 고쳐서 쓴다.
와이어프레임과 템플릿이 충돌하면 항상 와이어프레임이 이긴다.
Bootstrap(그리드/유틸리티)은 레이아웃 구현 수단으로 자유롭게 쓰되, 결과 화면은 와이어프레임과 동일해야 한다.



한 줄 요약: "와이어프레임을 그대로 구현하라. Bootstrap/템플릿은 기능 구현을 돕는 도구로만 활용하라."




0. 프로젝트 개요


프로젝트명: Vivienne Westwood × 이천쌀 콜라보 브랜드 사이트
디자인/기능 기준: 와이어프레임(wireframes/) + 본 명세서 ← 정답
기술 도구: Bootstrap 5.3.3 + HTML / CSS + 바닐라 JS. 참고 템플릿 Moderna (BootstrapMade) 의 벤더(AOS, Swiper, GLightbox, Isotope 등)와 일부 기능 컴포넌트를 부품으로만 활용

참고 템플릿 URL: https://bootstrapmade.com/free-bootstrap-template-corporate-moderna/
License: https://bootstrapmade.com/license/ (무료 버전 — 부품 사용 시 푸터 크레딧 유지)



타입: 정적 멀티페이지 사이트 (서버/DB 없음)
반응형: 데스크톱(1440px) 기준 디자인, Bootstrap 그리드로 모바일 대응
멤버: 신하현(Shin Hahyun), 김운정(Kim Woonjung)


상태관리(정적 한계) 방침


로그인/위시리스트/장바구니는 브라우저 메모리(JS) 안에서만 동작하는 "프론트 흉내"
동작은 세션 내 JS 변수 기준(새로고침 시 초기화 — 의도된 한계)



1. 디자인 토큰 (와이어프레임 기준 → 템플릿 리스킨 목표)

폰트


기본: Pretendard (한글 포함 전체)
템플릿 기본 폰트(Open Sans / Roboto)는 Pretendard로 교체
영문 디스플레이 일부만 보조 사용


컬러

토큰HEX용도K_BLACK_1#101010메인 텍스트/버튼/포인트화이트#FFFFFF배경Back_W_2#F4F4F4이미지 플레이스홀더/연한 배경Back_W_4#DDDDDD보더/구분선systemGrey/900#212121진한 제목systemGrey/800#424242네비 텍스트systemGrey/700#616161본문 보조systemGrey/600#757575캡션/서브


색/폰트/레이아웃은 와이어프레임을 기준으로 직접 구현한다. 템플릿 기본 디자인(파란 톤, Open Sans 등)은 따라가지 않는다.
작업 방식: 템플릿에서 부품(JS/벤더)을 가져올 때 딸려오는 style.css에 의존하지 말고, 우리 디자인은 assets/css/custom.css에 새로 작성한다. 템플릿 CSS가 우리 디자인을 침범하면 덮어쓰거나 제거한다.




2. 템플릿 "부품" 활용 계획 (디자인은 와이어프레임 기준, 기능만 차용)


아래는 기능 구현을 도울 부품만 정리한 것. 각 항목의 겉모습/레이아웃은 와이어프레임을 따른다.



2.A 템플릿에서 "기능 부품"만 가져와 활용 (모양은 와이어프레임대로 재작성)

Moderna 자산활용처수정 내용navbar + .dropdown / deep dropdown전역 네비 + About/Products/Icheon/Archive 드롭다운메뉴명/링크/앵커를 우리 구조로 교체portfolio + Isotope 필터Products 탭, Archive NEWS 필터필터 라벨을 Apparels/ACC/Rice 등으로 교체portfolio-details Swiper 슬라이더Archive GALLERY 캐러셀좌우 화살표 전용, 자동재생 off, 무한 루프GLightboxGALLERY 라이트박스갤러리 이미지 클릭 확대team.html member 카드 + social멤버소개 페이지2인(신하현·김운정), SNS를 인스타/링크드인/노션으로contact.html Google Map iframeStores 지도 연동성수점·이천본점 좌표로 교체back-to-top 버튼상품 상세 TOP 버튼 등그대로AOS 스크롤 애니메이션About 스토리보드 페이드인 등data-aos="fade-up" 활용footer (newsletter/links/social)전역 푸터멤버 SNS·타탄 띠 구조로 개조

2.B 템플릿에 없어서 직접 구현 (← 직접 개발 포인트)


히어로 배경 자동재생 영상(<video muted loop playsinline poster>) — 템플릿은 정적 히어로라 신규 구현
About 로고 모핑 스크롤 스냅 캐러셀 — Swiper로 불가, 커스텀 JS(스크롤 진행도 → 단계별 transform, 중앙 스냅/정지 리듬)
위시리스트/장바구니/주문 상태관리 — 템플릿에 커머스 없음 → JS로 직접
상품 상세 옵션 분기(어패럴·ACC=Color/Size, 쌀=중량 4kg/10kg) + ADD TO CART/Get now 2버튼
로그인/회원가입 프론트 흉내 상태 전환(네비 로그인↔로그아웃)
전체 디자인(Pretendard + 흑백·타탄)은 와이어프레임 기준으로 직접 구현 (템플릿 디자인 미사용)



3. 전역 공통 컴포넌트

3.1 네비게이션 (#header .navbar)


좌측 로고 "Vivienne Westwood × 이천쌀" → 클릭 시 홈
메뉴: Home / About / Products / Icheon / Archive / Stores
우측: 가입하기(→ 회원가입) / 로그인(→ 로그인). 로그인 시 로그아웃·마이페이지로 전환
호버 시 드롭다운(메가메뉴) — 템플릿 .dropdown 활용, 클릭 시 해당 페이지 섹션으로 스크롤 점프

About → 타임라인 / 심볼
Products → Apparels / ACC / Icheon Rice
Icheon → 맛집 / 놀거리 / 축제
Archive → 뉴스 / 인터뷰 / 갤러리





3.2 푸터 (#footer)


로고 + 멤버 2인 SNS:

신하현 — IG @ha_yeah_thats_my_name, LinkedIn linkedin.com/in/hahyun-shin-77b9712a8
김운정 — IG @oonjvng, Notion(복사 링크)



하단 타탄 패턴 띠
BootstrapMade 크레딧 유지(무료 라이선스 조건)



4. 페이지별 상세 (인터뷰 확정 사항)

4.1 Home (index.html)


히어로: 자동재생 배경 영상(muted·loop·playsinline·poster). assets/video/hero.mp4(+webm, 1080p 대체본). 4K 실파일 추후 투입, 교체 가능 구조
카피: "비비안 행성에 불시착한 / 이천 임금님표 쌀"
히어로 버튼: 콜라보 확인하기→About / 제품 보러가기→Products
Feature 1~4: 번호 클릭 → 좌측 이미지 교체(탭 전환). ① 비비안, 이천에서 놀고오다 ② 비비안이 바라본 이천 ③ 콜라보 로고 아카이브 ④ 빛나는 쌀알, 감각적인 콜라보
CTA: "…한국에서 만나보세요" + 스토어 찾기→Stores


4.2 About (about.html) — #timeline, #symbol


히어로: "비비안 행성에 불시착한 이천 임금님표 쌀" + 단일 일러스트
타임라인(Scene 001~007): 스크롤 페이드인(AOS)
심볼(로고 모핑): 스크롤 스냅 캐러셀(우→좌, 중앙 "딱" 정지 → 더 스크롤 시 다음 로고 "딱"). 커스텀 JS. 이미지 assets/about/symbol/


4.3 Products (products.html) + 상세(product-detail.html)


히어로: 타탄 배경 + 콜라보 로고
탭(Apparels/ACC/Icheon Rice): 즉시 교체(Isotope 필터 응용 또는 단순 show/hide)
카드: 클릭→상세 / 하트→위시리스트 / Get now→구매 / 호버 시 이미지 확대
상세: LONGBILL CAP 레이아웃 차용. 좌 이미지 / 우 정보. 옵션 분기(어패럴·ACC=Color·Size·수량, 쌀=중량 4kg/10kg·수량). ADD TO CART + Get now 2버튼. 위시리스트 아이콘·TOP 버튼


4.4 Icheon (icheon.html) — #food, #discover, #festival


맛집(6 카드): 카드 클릭 → 하단 지도 갱신(Google/Naver). 예약하기→외부 / 지도에서 보기→지도
놀거리(DISCOVER): 탭(Couples/Friends/Families) 즉시 교체, 좌우 화살표=탭 전환, 사진 핀 호버 시 정보 카드 강조
축제(FESTIVALS): CHECK OUT THE LINK 외부 링크

이천도자기축제 → https://www.ceramic.or.kr/
이천백사 산수유꽃축제 → https://www.2104sansooyoo.com/
이천쌀문화축제 → http://www.ricefestival.or.kr/





4.5 Archive (archive.html) — #news, #interview, #gallery


NEWS(8 카드, 고정/교체가능): 클릭→기사 상세, 호버→이미지 확대+어두워지며 제목 강조
인터뷰 기사 상세(article.html): 긴 아티클, 좌상단 ☰→NEWS로 이동, 현재 1편
GALLERY: Swiper, 좌우 화살표만, 이미지 클릭→GLightbox 라이트박스, 무한 루프


4.6 Stores (stores.html)


매장 2(성수점·이천본점): 주소(국/영)·운영시간·전화(더미 tel:)·사진 2장
주소 지도 연동(contact.html의 map iframe 응용), 사진 클릭→지도, 사진 호버→이미지 확대



5. 별도 디자인 페이지 (와이어프레임 없음 — 흑백 미니멀 신규)


로그인/회원가입: UI + 프론트 흉내(세션 내 로그인 상태). 가입 항목 이메일·비밀번호·이름
마이페이지: 위시리스트/장바구니/히스토리 탭 한 페이지. 위시·장바구니 실제 동작
구매 플로우: 장바구니→주문서→주문완료 + 배송확인/환불요청
멤버소개: team.html 카드 응용, 사진·이름·역할·소개글·SNS(IG/LinkedIn/Notion)



6. 폴더 구조 (Moderna 구조 유지 + 확장)

/
├─ index.html  about.html  products.html  product-detail.html
├─ icheon.html  archive.html  article.html  stores.html
├─ login.html  signup.html  mypage.html
├─ cart.html  checkout.html  order-complete.html
├─ shipping.html  refund.html  members.html
└─ assets/
    ├─ css/ custom.css(우리 디자인 — 와이어프레임 기준 직접 작성이 메인) + 템플릿 벤더 css는 부품에 필요한 것만
    ├─ js/ main.js(템플릿) + app.js(우리 상태관리/커스텀 인터랙션)
    ├─ vendor/ (aos, swiper, glightbox, isotope, bootstrap 등 — 템플릿 동봉)
    └─ img/ video/ about/symbol/ products/ icheon/ archive/ stores/ members/ patterns/


7. 인터랙션 체크리스트


 네비 드롭다운(Moderna .dropdown) + 섹션 스크롤 점프 / 로고→홈
 홈 히어로 자동재생 배경 영상(신규) / Feature 1~4 이미지 교체
 About 스토리보드 AOS 페이드인 / 심볼 스크롤 스냅 캐러셀(커스텀)
 Products 탭 즉시교체 / 카드 호버 확대 / 하트 찜 / Get now→구매 / 상세 옵션분기·2버튼
 Icheon 맛집→지도갱신 / Discover 탭·화살표 / 핀 호버 / 축제 외부링크
 Archive 뉴스→기사 / 호버효과 / GALLERY Swiper+GLightbox+무한루프 / ☰→NEWS
 Stores 지도연동 / 사진→지도 / tel / 호버 확대
 로그인/회원가입 프론트 흉내 / 마이페이지 탭 / 구매 플로우 / 멤버소개


8. 미정/추후 투입 에셋


히어로 4K 영상(+1080p, poster), About 심볼 모핑 이미지, 각 페이지 실사진/제품컷
맛집 예약 외부 URL, 실제 매장 전화번호