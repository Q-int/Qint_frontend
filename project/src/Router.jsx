import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./pages/Mainpage";
// import { Categorypage } from "./pages/Categorypage";
import { Mypage } from "./pages/MyPage";
import { SignUpPage } from "./pages/SignUpPage";
import { LoginPage } from "./pages/LoginPage";

export const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/mypage" element={<Mypage />}></Route>
          {/* <Route path="/category" element={<Categorypage />}></Route> */}
          <Route path="/SignUp" element={<SignUpPage />}></Route>
          <Route path="/Login" element={<LoginPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
