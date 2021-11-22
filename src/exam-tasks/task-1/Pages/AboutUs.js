import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Main = styled.main`
display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 110px;
`;

const Button = styled.button`
  font-size: 15px;
  background-color: #051e28;
  color: whitesmoke;
  border: none;
  height: 35px;
  width: 100px;
  :hover{
    background-color: #1DA1F2;
  }
`;

function AboutUs(){
    const history = useHistory();

    const goBack = () => {
        history.goBack()
    }

    return(
        <Main>
            <h1>About Us</h1>
            <Button type="button" onClick={goBack}>Grįžti atgal</Button>
        </Main>
    )
}

export default AboutUs;