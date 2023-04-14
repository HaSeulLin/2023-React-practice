import "./App.css";
// 라우터를 가져오기 위해 router-dom에서 컴포넌트 가져옴
import { Routes, Route } from "react-router-dom";

// 각각의 페이지(하나의 주소에 보일 컴포넌트)
import Home from "./page/Home";
import About from "./page/About";
import Story from "./page/Story";
import Story2 from "./page/Story2";
import Error from "./page/Error";
import Story2List from "./page/Story2List";

//
import Articles from "./page/Articles";
import Article from "./page/Article";
import HeaderLink from "./components/HeaderLink";
import Layout from "./page/Layout";
import NavigatePage from "./page/NavigatePage";
import NaviStatePage from "./page/NaviStatePage";

function App() {
  return (
    // Routes를 이용하여 컴포넌트와 주소를 연결하는 Route를 정리
    // div 안에 Routes를 넣어서 사용해도 상관없다
    <div>
      {/** Routes 안에 들어가지 않는 컴포넌트를 사용해서 화면에 계속 띄워둘 수 있다 */}
      {/*<HeaderLink />*/}

      <Routes>
        <Route path="/" element={<Layout />}>
        {/**app.js 안에서 Route 이용해서 주소와 컴포넌트 연결
         * path : 주소 >> '/'는 첫 화면에 보이는 주소
         * element : 컴포넌트 >> { <Home/> }를 통해서 전달
         * Home 주소창에 /about 추가하면 About 페이지로 이동
         */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/** <Story /> 컴포넌트를 만들어서, '/story' 주소로 연결
         * 확인은 주소창에 http://localhost:3000/story 로 확인
         */}
        {/** URL 파라미터를 이용한 값 전달
         * path의 주소에 값이 들어갈 공간에 이름 작성
         * 값은 브라우저 주소창에 입력했을 때 값이 들어감
         */}
        <Route path="/story/:value" element={<Story />} />
        {/** <Story />를 복사하여 <Story2 />로 수정하여 사용
         * URL 파라미터 이름을 name으로 작성
         * URL 파라미터로 전달할 값을 green으로 작성
         * useParams 이용해서 화면에 출력 >> 주소창에 /stort2/green
         */}

        {/** page 폴더에 Story2List.jsx를 만들고
         * fruit 배열을 들고 와서 Link 작성
         * Link를 클릭했을 때 Story2가 보일 수 있게 작성하세요
         */}
        <Route path="/story2" element={<Story2List />}>
          <Route path="/story2/:name/" element={<Story2 />} />
        </Route>

        {/** 관련된 페이지는 주소로 분류해서 사용 가능 */}
        <Route path="/articles" element={<Articles />}>
          {/** 중첩 라우터 */}
          <Route path="/articles/:id/" element={<Article />} />
        </Route>

        {/** navigate를 이용한 값 전달
         * NavigatePage.jsx > 버튼 클릭 시, 이동하면서
         * NaviStatePage.jsx > 전달받은 값 출력
         */}
        <Route path="/navigate" element={<NavigatePage />}></Route>
        <Route path="/navigate/state" element={<NaviStatePage />}/>

        {/** path에 *을 넣으면 지정된 주소 외에는 전부
         * element로 연결된 컴포넌트가 출력된다.
         * 위의 작성한 주소와 헷갈리지 않도록 아래 쪽에 두는 편
         */}
        <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
