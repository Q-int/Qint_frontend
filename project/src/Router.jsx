import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Main } from "./pages/Mainpage"
import { Mypage } from "./pages/MyPage"
import { Categorypage } from "./pages/Categorypage"

export const Router =() => {

  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/mypage" element={<Mypage/>}></Route>
          <Route path="/category" element={<Categorypage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}