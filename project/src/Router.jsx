import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./pages/Mainpage";
import { Categorypage } from "./pages/Categorypage";
import { Mypage } from "./pages/MyPage";
import { Questionpage } from "./pages/Questionpage";
import { SignUpPage } from "./pages/SignUpPage";
import { LoginPage } from "./pages/LoginPage";
import { Explainpage } from "./pages/Explainpage";
import { WrongsQuestionPage } from "./pages/WrongsQuestionPage";
import { ScoreCheckPage } from "./pages/ScoreCheckPage";
import { DescriptionPage } from "./pages/DescriptionPage";

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
          <Route path="/explain" element={<Explainpage />}></Route>
          <Route path="/wrongs" element={<WrongsQuestionPage />}></Route>
          <Route path="/scorecheck" element={<ScoreCheckPage />} />
          <Route path="/description" element={<DescriptionPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
