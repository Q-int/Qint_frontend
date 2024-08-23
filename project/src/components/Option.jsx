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
width: 77vw;
height: 10.6vh;
background: #E4F9F3;
border-radius: 1vw;
display: flex;
justify-content: flex-start;
align-items: center;
padding-left: 2.9vw;
font-size: 2.7vh;
font-weight: 400;
`