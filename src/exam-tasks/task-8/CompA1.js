import React, { useContext } from 'react';
import { ContextCounter } from "./Task8";
import styled from "styled-components";

export const Btn = styled.button`
  width: 150px;
  height: 30px;
  background-color: rgba(183, 183, 183, 0.48);
  border: none;
  border-radius: 3px;
  font-weight: 700;
`;

function CompA1() {
    const { counter, setCounter } = useContext(ContextCounter);

    const onIncrement = () => {
        setCounter(counter + 10);
    }

    return (
        <div>
            <h3>CompA1</h3>
            <Btn disabled={counter >= 100} onClick={onIncrement}>Didinti</Btn>

        </div>
    );
}

export default CompA1;
