import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Div = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
`;
const Title = styled.h1`
font-size: 30px;
`;
const Button = styled.button`
  font-size: 15px;
  background-color: #051e28;
  color: whitesmoke;
  border: none;
  height: 35px;
  width: 100px;
  :hover{
    background-color: #00ac96;
  }
`;

function Contacts(){
    const history = useHistory();

    const goBack = () => {
        history.goBack()
    }

    return(
        <Div>
            <Title>Contacts</Title>
            <Button type="button" onClick={goBack}>Grįžti atgal</Button>
        </Div>
    )
}

export default Contacts;