import './App.css';
import MyComponent from './components/MyComponent';
// 동일한 파일에서 두 개 이상 내보냈을 때,
// 그 각각의 값을 각각 가져와야 쓸 수 있다
import PracticeCom from './components/PracticeCom';
import { LoginText } from './components/PracticeCom';
import { TextComp } from './components/PracticeCom';
import OtherComp from './components/OtherComp';
import StateComp from './components/StateComp'
import EventComp from './components/EventComp';

import RefDomEvent from './components/RefDomEvent';
import MapComp from './components/MapComp';

import LifeCycle from './components/LifeCycle';

import ArrowComponent from './components/ArrowComponent';
import ArrowTest from './components/ArrowTest';
import ArrowState from './components/ArrowState';

import Arrowtest2 from './practice/Arrowtest2';
import Arrowstate2 from './practice/Arrowstate2'
import ReactPractice from './practice/ReactPractice'

import EffectHook from './components/EffectHook';
import EffectHook2 from './components/EffectHook2';

/* 리엑트에서 오류가 뜨는 이유
    1. 존재하지 않는 컴포넌트 출력
      >> 컴포넌트를 만든 이후에 이름은 바꾸지 말 것 (헷갈림)
    2. {}를 닫지 않았을 경우
      >> 오류 코드 보면서 각 line에 있는 코드들을 주석/삭제 처리하면서 확인
*/


function App() {
  return (
    <div className="App">
      <h1>리액트 프로젝트를 수정해서 사용합니다</h1>
      <MyComponent />
      {/* 만든 컴포넌트에 속성=값을 통해 값을 props 전달 */}
      <PracticeCom login={true} name="홍길동" />
      {/* 만든 컴포넌트 사이에 글자를 적어서 전달 */}
      {/* props의 children으로 전달 */}
      {/* props값을 전달하지 않으면 undefined 
          undefined는 false와 같음 */}
      <PracticeCom>내용 전달</PracticeCom>

      {/* 새로운 TextComp 만들어서 children에 들어간 값을
       *  h1 태그에 넣어서 출력하세요
          name값을 받아와서 p태그에 name님을 출력하세요
       */}
      <TextComp name="홍길동">반갑습니다</TextComp>
      <TextComp name="성춘향">환영합니다</TextComp>

      <OtherComp name={1233}/>

      {/* State를 가진 컴포넌트 */}
      {/* State를 가진 컴포넌트는 다시 사용해도 별개의 값으로 들어간다 */}
      {/* 두 <StateComp />가 독립적인 값 가짐. 값 공유X */}
      <StateComp />
      <StateComp />

      {/** 0331 이벤트 */}
      <EventComp />

      {/** 0403 이벤트 */}
      <RefDomEvent />

      {/** 컴포넌트의 반복 */}
      <MapComp />

      {/** 라이프 사이클 */}
      <LifeCycle />

      {/** 함수형 컴포넌트 */}
      <ArrowComponent text="문자열을 전달" />
      <ArrowComponent>children으로 전달</ArrowComponent>

      {/** 함수형 컴포넌트 실습
       * 아래 컴포넌트를 함수형으로 만들고 출력하기
       * name ="green" : h3 태그 출력
       * check={true} : check 값이 true 일 때 name 출력
       * children="환영합니다" : p 태그로 출력
       */}
      <ArrowTest name="green" check={true}>환영합니다</ArrowTest>

      {/** 함수형 컴포넌트의 state 사용 */}
      <ArrowState></ArrowState>

      {/** 화살표함수arrow형 복습 */}
      <Arrowtest2 name="green" check={true}>환영</Arrowtest2>
      <Arrowstate2></Arrowstate2>
      <ReactPractice num={20}></ReactPractice>

      {/** 함수형 컴포넌트의 effect Hook */}
      <EffectHook />
      {/** 함수형 컴포넌트의 useEffect 응용 */}
      <EffectHook2 />
    </div>
  );
}

// import를 이용하여 다른 파일에서 값을 가져올때
// export를 이용해서 내보내는 값
export default App;
