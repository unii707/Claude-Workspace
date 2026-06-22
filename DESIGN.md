# DESIGN SYSTEM SPECIFICATION (DESIGN.md)

이 문서는 프로젝트의 시각적 정체성, UI 원칙 및 디자인 토큰을 정의합니다. 
전사 프로젝트의 UI 일관성을 유지하기 위한 디자인 가이드라인입니다.
AI 에이전트와 개발자는 새로운 컴포넌트를 생성하거나 UI를 수정할 때 반드시 이 규칙을 준수해야 합니다.

---

## 0. 전사 공통 디자인 토큰 (Design Tokens)
어떠한 프레임워크(Tailwind, CSS-in-JS, SCSS)를 쓰더라도 아래 원천 값을 기준으로 개발.

---

## 1. 디자인 철학 및 분위기 (Theme & Atmosphere)
* **핵심 키워드:** (예: 미니멀, 모던, 프로페셔널, 친근한, 신뢰)
* **시각적 밀도:** 
* **전반적인 톤앤매너:** > (예: 불필요한 장식을 배제하고, 깔끔한 그리드와 미니멀한 보더를 중심으로 신뢰감을 주면서 친근함을 줄 수 있는 IT 서비스 톤을 유지.)

---

## 2. 색상 팔레트 및 역할 (Color Palette & Roles)

### Light Mode
| 역할 (Role) | 변수명/CSS | HEX/HSL 값 | 비고 |
| :--- | :--- | :--- | :--- |
| **Primary (Brand)** | `--brand-primary` | `#0248ff` | 우리의 메인 브랜드 컬러 |
| **Background** | `--bg-main` | `#F7F9FF` | 기본 배경 |
| **Surface** | `--bg-surface` | `#FFFFFF` | 카드, 사이드바 배경 |

| **Text Primary** | `--text-main` | `#4F575E` | 기본 본문 텍스트 |
| **Text Secondary**| `--text-muted`| `#889097` | 부연 설명, 플레이스홀더 |
| **Border** | `--border-light`| `#DEE2E6` | 구분선 및 테두리 |

### Dark Mode (선택 사항)
| 역할 (Role) | 변수명/CSS | HEX/HSL 값 | 비고 |
| :--- | :--- | :--- | :--- |
| **Background** | `--bg-main` | `#1D3066` | 어두운 배경 |
| **Primary (Brand)** | `--brand-primary` | `#0248FF` | 다크모드용 메인 포인트 |

---

## 3. 타이포그래피 규칙 (Typography Rules)
* **기본 폰트 패밀리:** `Noto Sans KR`
* **계층 구조 (Hierarchy):**

| 태그/스타일 | Size | Weight | Line Height | 용도 |
| :--- | :--- | :--- | :--- | :--- |
| `h1` | `1.5625rem (25px)`| `600 (Bold)` | `1.25` | 대제목, 페이지 타이틀 |
| `h2` | `1.3125rem (21px)` | `600 (Semi)` | `1.3` | 섹션 타이틀 |
| `h3` | `1.125rem (18px)` | `600 (Semi)` | `1.3` | 섹션 서브 타이틀 |
| `body` | `1rem (16px)` | `400 (Regular)`| `1.5` | 본문 기본 텍스트 |
| `label` | `0.875rem (14px)` | `600 (Semi)`| `1.25` | 레이블 기본 텍스트 |
| `caption` | `0.8125rem (13px)`| `400 (Regular)`| `1.4` | 캡션, 힌트 메시지 |

---

## 4. 레이아웃 및 간격 시스템 (Layout & Spacing)
* **기본 그리드/간격 단위:** `8px` 배수 시스템을 사용합니다. (`rem` 단위를 권장)
    * `space-xs`: `0.25rem (4px)`
    * `space-sm`: `0.5rem (8px)`
    * `space-md`: `1rem (16px)`
    * `space-lg`: `1.5rem (24px)`
    * `space-xl`: `2rem (32px)`
* **컨테이너 최대 폭 (Max Width):** 최대 `1200px` (중앙 정렬)
* **반응형 브레이크포인트 (Responsive Breakpoints):**
    * Mobile: `< 640px`
    * Tablet: `640px ~ 1024px`
    * Desktop: `> 1024px`

---

## 5. 핵심 컴포넌트 스타일 (Component Styles)

### 버튼 (Buttons)
#### Global Rules
  ##### Disabled State Rules
  - `opacity-50`을 사용하지 말것.
  - 활성 상태 색상의 변형을 사용하지 말것.
  - `cursor-not-allowed`를 사용.
  - 사용자가 비활성 상태임을 즉시 인지할 수 있어야 함.
  ##### Shape Rules
  - 모든 버튼은 `6px` (`rounded-md`) 적용
  - border radius 값을 섞어서 사용하지 않음
  ##### States Rules
  모든 버튼은 마우스 오버(Hover) 및 클릭(Active) 시 동일한 시각적 피드백 규칙을 공유. 
  이를 위해 Tailwind의 불투명도 오버레이 계층 활용.
  * **Hover**: 밝기를 15% 감소시켜 자연스러운 Hover 효과 제공     
      (`hover:brightness-85`)
  * **Active**: 버튼을 2% 축소하여 눌림 효과 제공 
      (`bg-black/5 active:scale-[0.98]`)   
  * **Disabled**: 모든 버튼은 `disabled` 속성이 활성화되면 다음과 같은 공통 스타일로 강제 전환
    - Background: `disabled:bg-gray-100`
    - Text:`disabled:text-gray-300`
    - Border:`disabled:border-gray-200`
    - Cursor: `disabled:cursor-not-allowed`
    - 클릭 애니메이션 방지: `disabled:active:scale-100`
  ##### Mouse Cursor Rules (마우스 커서 규칙)
  사용자가 버튼의 상태를 직관적으로 인지할 수 있도록 마우스 커서 규칙 따름
  * **일반 / 호버 상태 (Default & Hover):** 버튼 위에 마우스를 올리면 반드시 **손모양 커서**가 나타나야 한다.
  * Tailwind Class: `cursor-pointer` (※ 단, `<button>` 태그는 브라우저 기본값으로 손모양이 나오지만, 일관성을 위해 명시하거나 테일윈드 초기화 세팅을 따른다.)
  * **비활성화 상태 (Disabled):** 클릭할 수 없음을 알리기 위해 **금지 모양 커서**가 나타나야 한다.
    - Tailwind Class: `disabled:cursor-not-allowed`
  ##### 아이콘과 같이 사용할 때 Rules
  - 버튼 내부에 텍스트와 아이콘을 함께 쓸 때는 아이콘과 텍스트 사이에 반드시 일정한 간격
  (`space-x-1.5` 또는 `6px`)을 부여하고 세로 정렬(`items-center`)을 맞출 것.

#### Button Sizes
* **XSmall**
  - Height: 24px (`h-6`)
  - Padding: 8px (`px-2`)
  - Font Size: 12px (`text-xs`)
* **Small**
  - Height: 32px (`h-8`)
  - Padding: 12px (`px-3`)
  - Font Size: 12px (`text-xs`)

* **Default** 
  - Height: 40px (`h-10`)
  - Padding: 16px (`px-4`)
  - Font Size: 14px (`text-sm`)

* **Large** 
  - Height: 48px (`h-12`)
  - Padding: 24px (`px-6`)
  - Font Size: 16px (`text-base`)

#### Primary Button
  ##### Default  
  - Background: Brand Primary (`bg-brand-primary`) 
  - Text: White (`text-white`)
  - Border: Brand Primary (`border-brand-primary`)
  - Font Weight: 500 (`font-medium`)

#### Secondary Button
  ##### Default
  - Background: Brand Primary 10 (`bg-brand-primary-10`)
  - Text: Brand Primary (`text-brand-primary`)
  - Border: Brand Primary (`border-brand-primary`)
  - Font Weight: 500 (`font-medium`)

  ##### Rules
  * **주의:** 테두리에 색상을 입힐 때는 두께 속성인 `border` 클래스와 반드시 함께 사용해야 합니다. (예: `border border-brand-primary`) 
  * **사용 목적:** 프라이머리 버튼을 보조하거나 대등한 여러 선택지를 제공할 때 (예: 취소, 이전, 수정, 공유하기)
  * **디자인 원칙:** 테두리가 있거나(Outlined) 연한 배경색(Filled Muted)을 사용하여 프라이머리 버튼보다 시각적 무게감을 낮춤  

#### Button Composition Rules
- Every button must have:
  - One Variant (Primary, Secondary)
  - One Size (Small, Default, Large)
  - One State (Default, Hover, Active, Disabled)

* **Examples:**
- Primary + Small + Default
- Primary + Large + Disabled
- Secondary + Default + Hover

### 카드 및 컨테이너 (Cards)
* **스타일:** 배경 `--bg-surface`, 테두리 `1px solid --border-light`
* **그림자 (Shadow):** 매우 절제된 그림자 사용 (`box-shadow: 0 1px 3px rgba(0,0,0,0.05)`)

### 입력창 (Inputs)
기본적인 텍스트 입력창(`input[type="text"]`, `textarea`)의 스타일과 상태별 인터랙션을 정의.

* **기본 구조:** 
  * 높이: `h-10 (40px)` 또는 `py-2 px-3`
  * 테두리 및 둥글기: `border (1px solid --border-light)`, `rounded-md (6px)`
  * 배경 및 텍스트: 배경색 `--bg-surface`, 본문색 `--text-main`, 플레이스홀더 `--text-muted`
* **상태별 인터랙션 (States):**
  * `Hover`: 테두리 색상을 `--text-muted` 레벨로 살짝 톤다운하여 반응 유도.
  * `Focus`: 테두리를 브랜드 메인 컬러(`--brand-main`)로 변경하고, 은은한 아웃라인 링 효과 적용 (`focus:ring-2 focus:ring-brand-main/20 outline-none`).
  * `Disabled`: 배경색 `--bg-surface`, 투명도 `60%`, 선택 및 입력 불가 (`cursor: not-allowed`).
  * `Error (검증 실패)`: 테두리 및 에러 메시지 텍스트 컬러를 경고색으로 변경 (`border-red-500`, `text-red-500`).

### 드롭다운 및 셀렉트 (Dropdowns & Selects)
선택 박스(`select`)와 커스텀 드롭다운 메뉴의 스타일 정의

* **드롭다운 트리거 버튼 (Trigger):**
  * 기본 Input과 동일한 높이(`40px`), 테두리, 둥글기 규칙을 공유하여 폼 안에서 시각적 높이를 통일
  * 우측 끝에 드롭다운 상태를 나타내는 하향 화살표 아이콘(chevron-down)을 필수로 배치. (`w-4 h-4`, 컬러는 `--text-muted`)
* **메뉴 리스트 팝업 (Menu/Overlay List):**
  * 레이어 위치: 트리거 바로 아래 배치하며, 컨텐츠를 가리지 않도록 충분한 z-index 부여 (`z-50`).
  * 배경 및 테두리: 배경색 `--bg-surface`, 그림자 효과 필수 적용 (`shadow-lg`).
  * 최대 높이: 아이템이 많을 경우 `max-h-60 (240px)`으로 제한하고 스크롤 속성 부여 (`overflow-y-auto`).
* **드롭다운 아이템 (Items):**
  * 크기 및 간격: `py-2 px-3`, 텍스트는 `caption (14px)` 크기 적용.
  * `Hover/Focus 상태`: 마우스를 올리거나 키보드로 이동 시 아이템 배경색을 `--bg-main`로 변경하여 강조.
  * `Selected 상태`: 선택된 아이템은 글자 굵기를 `font-semibold`로 변경하고 우측에 체크 아이콘(check)을 표시하여 시각적 피드백 제공.

### AI를 위한 Tailwind 구현 힌트 (Input & Dropdown)
* **Standard Input:** `w-full h-10 px-3 py-2 bg-white border border-gray-200 rounded-md text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 disabled:bg-gray-50 disabled:text-gray-400`
* **Dropdown Menu Panel:** `absolute mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg z-50 max-h-60 overflow-y-auto py-1`
* **Dropdown Item:** `w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none`

### 상태 및 피드백 시스템 (Status Themes)
시스템의 상태를 나타내는 4대 핵심 컬러와 사용처 정의

| 상태 (Status) | 대표 컬러 (Tailwind) | 사용 예시 |
| :--- | :--- | :--- |
| **Success (성공)** | `text-green-600`, `bg-green-50` | 저장 완료 토스트, 활성화 배지 |
| **Info (정보)** | `text-blue-600`, `bg-blue-50` | 알림 내역, 단순 안내 가이드 박스 |
| **Warning (경고)** | `text-amber-600`, `bg-amber-50`| 탈퇴 경고 모달, 한도 초과 안내 |
| **Error (위험/실패)**| `text-red-600`, `bg-red-50` | 로그인 실패 메시지, 삭제 버튼 호버 |

---

## 6. 아이콘 및 이미지 규칙 (Icons & Imagery)
* **기본 아이콘 라이브러리:** `Lucide React`만 사용. (임의의 SVG 직접 삽입 금지)
* **아이콘 크기 규칙 (Icon Sizes):**
  * `Inline / Button 내부:` `w-4 h-4 (16px)`
  * `Sidebar / Navigation:` `w-5 h-5 (20px)`
  * `Empty State / Large Notification:` `w-8 h-8 (32px) ~ w-12 h-12 (48px)`
* **스타일:** 아이콘의 선 두께는 기본값(`stroke-width: 2`)을 유지하며, 색상은 주변 텍스트 컬러(`--text-muted` 등)와 항상 동기화되도록 `currentColor`를 활용.

---

## 7. 데이터 테이블 (Data Table)
대량의 정형 데이터를 체계적으로 그리드 형태에 맞춰 시각화하고 관리하기 위해 사용

### 기본 레이아웃 및 테두리 (Layout & Borders)
* **전체 컨테이너:** 데이터 유실을 막기 위해 가로 스크롤(`overflow-x-auto`)을 보장하며, 둥근 모서리(`rounded-lg`)와 은은한 테두리(`border border-gray-200`)로 감싼다.
* **테이블 스타일:** 행(Row) 간의 구분을 명확히 하기 위해 모든 행 하단에 `border-b border-gray-100`을 적용한다.

### 헤더 영역 (Table Header - `<thead>`)
데이터의 속성을 명시하는 구역으로, 본문보다 어둡고 견고한 느낌을 주어 시각적 위계를 확보한다.
* **배경색:** `bg-gray-50/75` (은은한 회색조 배경)
* **글자색 및 스타일:** `text-gray-600 font-semibold text-xs tracking-wider uppercase`
* **패딩:** `px-6 py-3`

### 본문 영역 (Table Body - `<tbody>`)
실제 데이터가 나열되는 구역으로, 높은 가독성과 행 간의 구분을 최우선으로 한다.
* **글자색 및 스타일:** `text-gray-700 text-sm font-normal`
* **패딩:** `px-6 py-4`
* **정렬 기본값:** * 일반 텍스트/이름: 좌측 정렬 (`text-left`)
  * 숫자/금액/날짜: 우측 정렬 (`text-right`)
  * 상태/태그/아이콘: 중앙 정렬 (`text-center`)

### 마우스 호버 및 상태 규칙 (Row States)
* **일반 상태 (Default):** 깨끗한 흰색 배경 (`bg-white`)
* **호버 상태 (Hover):** 마우스를 올린 행은 사용자 시선이 어긋나지 않도록 강조 배경색을 켠다.
  * Tailwind Class: `hover:bg-gray-50/50 transition-colors`
* **스트라이프 상태 (Zebra - 선택 사항):** 데이터가 너무 많아 가독성이 떨어질 경우 짝수 행에 연한 배경을 번갈아 적용한다.
  * Tailwind Class: `even:bg-gray-50/30`

### 고급 기능 및 예외 처리 규칙 (Advanced & Edge Cases)
실제 대시보드 환경에서 발생하는 레이아웃 깨짐 현상을 방지하고, 사용자 편의성을 높이기 위해 아래 4가지 예외 처리 규칙을 엄격히 준수한다.
  #### ① 고정 헤더 (Sticky Header) 지정
  대량의 데이터로 인해 세로 스크롤이 발생하더라도 열 속성을 인지할 수 있도록 헤더를 고정한다.
  * **컨테이너 세로 제한:** 테이블 컨테이너에 세로 최대 높이(`max-h-[500px]` 등)와 세로 스크롤(`overflow-y-auto`)이 잡혀있을 때 적용한다.
  * **헤더 고정 클래스:** `<thead>` 또는 헤더 셀(`<th>`)에 `sticky top-0 z-10 bg-gray-50/75`를 적용하여 스크롤 시 본문 데이터 위로 헤더가 고정되도록 한다.

  #### ② 데이터 없음 (Empty State) 대응
  필터 검색 결과가 없거나 데이터가 비어있을 때 깨진 화면 대신 명확한 안내 구역을 제공한다.
  * **구현 방식:** `<tbody>` 내부에서 전체 열 개수만큼 `colspan`을 지정한 단일 행(`<tr>`)을 생성한다.
  * **비주얼 명세:** 중앙 정렬(`text-center py-12`) 처리를 하고, 은은한 그레이톤의 일관성 있는 SVG 아이콘 플레이스홀더와 안내 문구(`text-gray-400 text-sm`)를 배치한다.

  #### ③ 너비(Width) 배분 원칙
  특정 열의 텍스트가 비정상적으로 길어져 테이블 전체 레이아웃이 무너지는 현상을 제어한다.
  * **최소/최대 너비 제한:** 컬럼 특성에 맞춰 고정 너비(`w-40`, `w-24` 등) 또는 최소 너비(`min-w-[120px]`)를 명시한다.
  * **말줄임표(Ellipsis) 처리:** 주소, 이메일, 제목 등 텍스트가 길어질 수 있는 열에는 `truncate max-w-xs` 등을 지정하여 말줄임표를 적용하고, 필요 시 마우스 호버 브라우저 툴팁(`title` 속성)을 제공한다.

  #### ④ 정렬 가능한 헤더 (Sortable Header)
  데이터 정렬(오름차순/내림차순) 기능이 포함된 열 헤더는 클릭 가능한 영역임을 시각적으로 나타낸다.
  * **상태 피드백:** 해당 헤더 셀(`<th>`)에 마우스 포인터 손모양(`cursor-pointer`)과 은은한 호버 배경색(`hover:bg-gray-100/70 transition-colors`)을 부여한다.
  * **정렬 아이콘:** 헤더 텍스트 우측에 현재 정렬 상태(정렬 안 됨 / 상향 화살표 / 하향 화살표)를 나타내는 미니 아이콘을 통합 배치한다.

---

## 8. 안티 패턴 (Anti-Patterns / 하지 말아야 할 것)
* **절대 금지:** 임의의 인라인 스타일(Inline Style) 하드코딩 금지. 반드시 지정된 테마 변수나 Tailwind 클래스를 활용할 것.HEX 코드 인라인 사용 금지 (bg-[#3B82F6]와 같은 임의 지정 방식 지양)
* **색상 남용:** 한 화면에 프라이머리 컬러 외의 원색(Red, Yellow 등)을 경고/성공 목적 외에 남용하지 말 것.
* **둥글기 혼용:** 버튼은 `6px`인데 카드는 `20px`인 방식으로 곡률 값을 무분별하게 혼용하지 말 것.
* **Layout 주의점:** Avoid edge-to-edge content
* **Grid Rules:** Prefer 12-column responsive grid. Use consistent gaps
* **명칭 사용:** 테일윈드의 기본 bg-blue-500 대신 반드시 회사 전용 명칭인 bg-brand-primary를 사용할 것.
### 버튼 사용 시 절대 금지 규칙 (Anti-Patterns)
* **프라이머리 독점의 법칙:** 한 화면(한 뷰포트) 안에 프라이머리 버튼이 2개 이상 동시에 인접해 존재해서는 안 됨. 반드시 하나는 세컨더리나 고스트로 대체하여 시각적 위계 나누기.
* **위험한 행동의 컬러 제한:** '회원 탈퇴', '데이터 영구 삭제' 등 유저에게 위험한 파괴적 행동(Destructive Action)을 하는 버튼은 프라이머리 컬러 대신 `bg-red-600` (Error Color)을 메인으로 사용.

