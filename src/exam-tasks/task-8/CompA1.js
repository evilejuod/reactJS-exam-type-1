import React, { useContext } from 'react';
import { contextCounter } from "./Task8";
import styled from "styled-components";

const Button = styled.button`
  width: 250px;
  height: 35px;
  border-radius: 3px;
  border: 1px solid grey;
  margin: 0 5px;
  :hover {
    background-color: whitesmoke;
    border: 2px solid #2d2d2d;
  }
`;

function CompA1() {
    const { counter, setCounter } = useContext(contextCounter);

    const onIncrement = () => {
        setCounter(counter + 10);
    }
    const onDecrement = () => {
        setCounter(counter - 10);
    }

  return (
    <div>
        <h3>CompA1</h3>

        <Button disabled={counter >= 100} onClick={onIncrement}>Increase</Button>
        <Button disabled={counter <= 0} onClick={onDecrement}>Decrease</Button>

    </div>
  );
}

export default CompA1;
