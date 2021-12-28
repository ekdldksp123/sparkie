# pick_me client
![image](https://user-images.githubusercontent.com/58977834/146023520-762d61ff-fb87-4715-8597-93f31110e05e.png)

### src > components
리액트 컴포넌트가 위치함
- components > Layout: 화면 구성 컴포넌트를 위한 디렉토리
- components > atom: 가장 작은 단위의 재사용 가능한 컴포넌트 (button, div, ...)
- components > molecules: atom 들을 모아둔, 조금 더 상위 레벨의 재사용 가능한 컴포넌트.
- components > views: 완성된 화면

### src > assets
.png, .jpg, .svg 와 같은 이미지 및 아이콘 파일이 위치

### lib
라이브러리가 위치

### types
타입스크립트 타입 참조가 위치

# Stack
---
- TypeScript
- React
- React Query
- gRPC, Protocol Buffers
- CSS-in-JS (Emotion.js)
- Git, Github Actions
- Vercel
---

### 2021. 12. 2 (목)
- 기본 프로젝트 세팅
- React Query, Emotion.js 초기 예제 세팅
- Github Actions 세팅
---

### 2021. 12. 18 (토)
- 공통으로 사용할 메뉴바 컴포넌트 src/components/molecules에 추가(MenuBar.tsx, MenuBar.css)
- App.css 수정
---

### 2021. 12. 25 (토) ~ 27 (월)
- git actions 변경된 파일 이름 인식 오류 해결해보려고 node.js.yml 에 steps 추가함.
  > 무튼 해결!


## 성준
---
### [main 화면 - 메뉴 스와이퍼 적용] 2021.12.23 (목)
- 몇 일 동안 react 실행시 에러 계속 뜨는거 해결...... npm 설치 다시 하는게 정신적으로 편한거 같음
- main 메뉴화면에 swiper 적용
- 모바일 화면에 맞도록 반응형 작업 중

## 빈채
---
### [ 커뮤니티 - 달력 ] 2021. 12. 19 (일)
- 커뮤니티 페이지에 달력 추가! 현재 반완성. 계속 작업중~
    > views/community 폴더 생성해서 작업 중(추후 필요시 다시 정리하겠음)
- Board.tsx -> Community.tsx 로 이름 변경!
- App.css 파일 수정 & MenuBar css 조금 수정
- 달력에는 styled component 적용
- 달력 기본 기능 및 UI 완성(기본..) 
- src > lib > DateUtils : 날짜 관련 자주 사용할 것 같은 모듈 빼놓음

### [ 커뮤니티 - 달력 & 게시판 ] 2021.12.21 (화)
- 달력에 클릭 이벤트 및 이동 버튼에 transition 추가
- 게시글 카드 추가 및 UI 작업 중

### [ 커뮤니티 - 게시판 ] 2021.12.25 (금)
- 하트, 댓글, 공유 버튼 및 애니메이션 추가 밑 글 제목 hover underline 효과 추가
- 댓글 컴포넌트 추가
### [ 커뮤니티 - 게시판 ] 2021.12.28 (화)
- 게시글 내용, 댓글 내용 overflow 시 커스텀 스크롤 자동 생성
- 팝업 모달 컴포넌트 추가
- 공유 기능(페이스북, 트위터, url 복사, 카카오톡) 추가 - 아직 카카오톡 공유 기능 작동 X


## 태양
---
### [지도 관련]

1. 지도 시점 이동 이벤트 감지하면 계산하여 새 마커 생성
    - 문제: 공공api의 request param이 너무 제한적.. (행정구역분류코드 앞 두 자리만 받고 있음.. ex) 11: 서울 전체)
    - 고민을 좀 더 해 보자.
2. 지도는 구 이름만 나눠서 표시하고 구마다 전기차 충전소 개수를 표시
    - 아니면 다른 지도를 가져와서 쓰다가 상세지도를 표시할 때, 카카오 맵을 써야할지도...
    - zoom level을 낮추면 되려나? 이건 지도 document를 공부해야겠음.
    - 갯수 표시는 어려울 거 같진 않은데, 상기한 api 의 제한적 문제로 인해 함수를 직접 구현해야 함.
3. 마우스가 지도 안에 들어와서 특정 지역 안에 들어오면 색깔이 바뀌게 한다
    - 카카오 지도 object의 className과 id 등이 구조적으로 정해져 있다면, custom stylesheet로 가능하긴 할 듯 하나 모르겠당
    - 고거만 되면 호버로 기냥.
    - 근데 지도가 그냥 png 파일일텐데?
4. 마커는 색깔별로 그 갯수의 크기를 표시하고, 헤드에 정확한 숫자를 표시. 핀포인트를 클릭하면 세부 지도로 이동?
    - 가능할 것 같긴 함.
5. 우선 지도는 서울만 세팅해놓고 해본다음에 추후 논의
    - 그럽시당.
---
### [큐엔에이 관련]

추후 함께 정리.
