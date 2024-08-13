import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./pages/Mainpage";
import { Categorypage } from "./pages/Categorypage";
import { Mypage } from "./pages/MyPage";
import { Questionpage } from "./pages/Questionpage";
import { SignUpPage } from "./pages/SignUpPage";
import { LoginPage } from "./pages/LoginPage";
import { Explainpage } from "./pages/Explainpage";

export const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/mypage" element={<Mypage />}></Route>
          <Route path="/category" element={<Categorypage />}></Route>
          <Route path="/SignUp" element={<SignUpPage />}></Route>
          <Route path="/question" element={<Questionpage />}></Route>
          <Route path="/Login" element={<LoginPage />}></Route>
          <Route path="/explain" element={<Explainpage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
