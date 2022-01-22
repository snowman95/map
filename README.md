# 프로젝트 map
[Deploy 링크](https://snowman95.github.io/map/)

## 사용 라이브러리
- [react-naver-maps](https://zeakd.github.io/react-naver-maps/#/React%20Naver%20Maps) : 네이버 API 지도 React 버전
  - 생각 이상으로 커스텀이 불가능하여 다음부터는 절대로 사용하지 않을 예정
- react-router-dom : 라우팅 구현
- [react-redux @reduxjs/toolkit](https://redux-toolkit.js.org/) : 상태관리 스토어, API 호출
- styled-components : 컴포넌트 스타일 구현
- styled-reset : 기본 적용된 css 초기화
- [react-minimal-pie-chart](https://www.npmjs.com/package/react-minimal-pie-chart) : 파이차트
- [react-toastify](https://fkhadra.github.io/react-toastify/introduction/) : 팝업 알림창
- gh-pages : 페이지 배포


## 사용 API
- 토지/건물 API
- Naver Map API
  - [Map](https://navermaps.github.io/maps.js.ncp/docs/naver.maps.Map.html#toc0__anchor)
  - [Marker](https://navermaps.github.io/maps.js.ncp/docs/naver.maps.Marker.html#Marker__anchor)
  - [Window](https://navermaps.github.io/maps.js.ncp/docs/naver.maps.InfoWindow.html#toc16__anchor)


## 라우팅
https://localhost:3000/property/:id (id는 19자)
- default id
  - 1168010600110020000
- 추가 id
  - 1168010600109960006
  - 1168010600109960015
  - 1168010600109460001


## 디렉토리 구조
```javascript
components : 컴포넌트
ㄴ Home : 홈 화면
  ㄴ Home.js
ㄴ Map : 지도
  ㄴ Marker : 지도 표시자
  ㄴ Window : 지도 알림창 (미사용)
  ㄴ hooks
  ㄴ Map.js
ㄴ Sidebar : 좌측 사이드 바
  ㄴ Search : 검색창
  ㄴ BuildName : 건물 이름, 주소
  ㄴ BuildInfo : 건물 정보
  ㄴ hooks
  ㄴ Sidebar.js
ㄴ Router.js : 라우터 테이블
ㄴ App.js

serices 
ㄴ address : 주소관련 Reducer
ㄴ space : 공간정보 API

store.js : 리덕스 스토어
hooks : 공용 커스텀 훅
images : 이미지 파일
styles : css 스타일
index.js 
```

## 흐름
Case 1.리액트 앱 실행
1. 기본 라우팅 정보에 해당하는 건물 정보 호출
2. 응답 받은 정보는 Redux Store에 저장되고 Sidebar, MapMarker 컴포넌트에 Hook으로 전달됨
3. 데이터 로딩 중에 Spinner 화면 출력
4. 데이터 로드 완료 시
  - 사이드바 정보 출력
  - 마커에 주소, 가격 출력
5. 응답 Error 발생 시 (실제로 백단에서 구현되어있지 않아서 프론트에서 처리해야함)
  - 사이드바 랜더링 제외
  - Map 화면만 출력

Case 2. URL 직접 입력
1. id 파라미터 값에 해당하는 데이터 호출
2. 이하 동문

Case 3. 검색창 검색
1. 검색창에 입력한 값을 id값으로 사용하여 데이터 호출
2. 이하 동문
