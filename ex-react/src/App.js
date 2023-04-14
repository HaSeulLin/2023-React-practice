import './App.css';
import PropsComp from './components/PropsComp';
import CountComp from './components/CountComp';
import CountPropsComp from './components/CountPropsComp';
import LoginComp from './components/LoginComp';
import LoginComp2 from './components/LoginComp2';
import MemoComp from './components/MemoComp';

function App() {
  return (
    <div className="App">
      {/** props을 사용하는 클래스 컴포넌트 */}
      <PropsComp color="blue">
        props값을 받아와서 글자색을 변경
      </PropsComp>

      {/** state을 사용하는 클래스 컴포넌트
       * 버튼을 클릭할 때마다 10씩 증가하는 컴포넌트
       */}
      <CountComp />
      
      {/** porps, state을 사용하는 클래스 컴포넌트
       * props의 num값을 가져와서 버튼을 클릭할 때마다 num 증가
      */}
      <CountPropsComp num={25} />

      {/** LoginComp 작성 후
       * state : name, login : false
       * <input>에서 name 받아오기
       * <button>에서 login true 만들기
       * <h1> name 출력 > login 값이 true일때 화면에 보임
       */}
      <LoginComp />
      <LoginComp2 />

      {/** 기록장 작성
       * memoList : [
       *      {id:1, memo:"기록", time:new Date()},
       *      {id:2, memo:"연습", time:new Date()}
       *   ]
       * state를 이용하여, memoList의 내용을 map으로
       * li태그에 출력하세요
       * input 태그로 입력, button 클릭 추가, li 클릭 삭제
       */}
      <MemoComp />
    </div>
  );
}

export default App;
