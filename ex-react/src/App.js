import './App.css';
import PropsComp from './components/PropsComp';
import CountComp from './components/CountComp';
import CountPropsComp from './components/CountPropsComp';

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
    </div>
  );
}

export default App;
