import styled from "styled-components"

export const Option = ({ option }) => {
  return(
    <Container>
      {option.text}
    </Container>
  )
}

const Container = styled.div`
box-sizing: border-box;
width: 1180px;
height: 80px;
background: #E4F9F3;
border-radius: 15px;
display: flex;
justify-content: flex-start;
align-items: center;
padding-left: 45px;
font-size: 19px;
font-weight: 400;
`