import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import styled from "styled-components";

// Page
import MainPage from "./component/page/MainPage";
import PostWritePage from "./component/page/PostWritePage";
import PostViewPage from "./component/page/PostViewPage";

const MainTitleText = styled.p`
  font-size 25px;
  font-weight: bold;
  font-align: center;
`;

function App(props) {
  return (
    <BrowserRouter>
      <MainTitleText>선진이의 미니 블로그</MainTitleText>
      <Routes>
        {/* index/ */}
        <Route index element={<MainPage />} />
        {/* /post-write */}
        <Route path="post-write" element={<PostWritePage />} />
        {/* /post/postid */}
        {/* :postId = 동적으로 변하는 파라미터를 위한 값
            실제 컴포넌트에서 useParams hook을 사용해 id로 해당값을 가져올 수 있음 */}
        <Route path="post/:postId" element={<PostViewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
