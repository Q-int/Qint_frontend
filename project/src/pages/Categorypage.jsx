import { Category } from "../components/Category"
import styled from "styled-components"
import { Header } from "../components/Header"
import { useState } from "react"
import { Startbtn } from "../components/Startbtn"
import { useNavigate } from "react-router-dom"
import { categoryPost } from "../apis/categoryPost"

export const Categorypage = () => {

  const [categoryArray, setCategoryArray] = useState([]);

  const navigate = useNavigate();

  const startHandle = async () => {
    const Questions = await categoryPost(categoryArray);
    navigate('/question', {state: {Questions: Questions}});
    localStorage.setItem("next", false);
  }

  const toggleCategory = (category) => {
    if (categoryArray.includes(category)) {
      setCategoryArray((arr)=>arr.filter(x => (x !== category)));
      console.log(categoryArray);
    } else {
      setCategoryArray((arr)=>[...arr, category]);
      console.log(categoryArray);
    }
  }

  return(
    <>
      <Header/>
    <Container>
      <Categories>
        <Category src={"/images/backend.svg"} alt={"백엔드이미지"} title={"backend"} text={"백엔드에 대해 알아보세요"} onSelect={toggleCategory} category={"BACKEND"}/>
        <Category src={"/images/react_image 13.svg"} alt={"프론트엔드이미지"} title={"frontend"} text={"프론트엔드에 대해 알아보세요"} onSelect={toggleCategory} category={"FRONTEND"}/>
        <Category src={"/images/flutter.svg"} alt={"플러터이미지"} title={"flutter"} text={"플러터에 대해 알아보세요"} onSelect={toggleCategory} category={"IOS"}/>
        <Category src={"/images/swift.svg"} alt={"스위프트이미지"} title={"swift"} text={"ios에 대해 알아보세요"} onSelect={toggleCategory} category={"FLUTTER"}/>
      </Categories>
      <Box>
        {categoryArray.length > 0 ? <Startbtn clicked={startHandle} categoryArray={categoryArray}/> : <Plstext>카테고리를 한 개 이상 선택해주세요!</Plstext>}
      </Box>
    </Container>
    </>
  )
}

const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 8.9vh);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #F4F4F4;
`

const Categories = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 2.6vw;
  height: 56vh;
`

const Plstext = styled.p`
  font-size: 3vh;
  font-weight: 500;
  letter-spacing: -0.32%;
  color: #50555C;
  margin: 10vh 0;
`

const Box = styled.div`
  display: flex;
  width: 100vw;
  height: calc(100vh - 8.9vh - 56vh);
  box-sizing: border-box;
  justify-content: center;
`