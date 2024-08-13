import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Main } from "./pages/Mainpage"
import { Categorypage } from "./pages/Categorypage"
import { Mypage } from "./pages/MyPage"
import { Questionpage } from "./pages/Questionpage"

export const Router =() => {

  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/mypage" element={<Mypage/>}></Route>
          <Route path="/category" element={<Categorypage/>}></Route>
          <Route path="/question" element={<Questionpage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}