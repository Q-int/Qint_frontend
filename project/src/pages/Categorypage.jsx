import { Category } from "../components/Category"
import styled from "styled-components"
import { Header } from "../components/Header"
import { useState } from "react"

export const Categorypage = () => {

  const [isSelected, setIsSelected] = useState(false);

  return(
    <>
      <Header/>
    <Container>
      <Categories>
        <Category src={"/images/backend.svg"} alt={"백엔드이미지"} title={"backend"} text={"백엔드에 대해 알아보세요"} />
        <Category src={"/images/frontend.svg"} alt={"프론트엔드이미지"} title={"frontend"} text={"프론트엔드에 대해 알아보세요"} />
        <Category src={"/images/flutter.svg"} alt={"플러터이미지"} title={"flutter"} text={"플러터에 대해 알아보세요"} />
        <Category src={"/images/swift.svg"} alt={"스위프트이미지"} title={"swift"} text={"ios에 대해 알아보세요"} />
      </Categories>
      <Plstext>카테고리를 한 개 이상 선택해주세요!</Plstext>
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
  justify-content: center;
  flex-direction: column;
  gap: 7vh;
  background-color: #F4F4F4;
`

const Categories = styled.div`
  display: flex;
  gap: 2.6vw;
  
`

const Plstext = styled.p`
  font-size: 3vh;
  font-weight: 500;
  letter-spacing: -0.32%;
  color: #50555C;
  margin: 0;
`