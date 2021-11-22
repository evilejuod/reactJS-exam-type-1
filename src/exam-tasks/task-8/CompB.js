import React, { useContext } from 'react';
import { ContextCounter } from "./Task8";
import { Btn } from './CompA1'

function CompB() {

    const { counter, setCounter } = useContext(ContextCounter);

    const onDecrement = () => {
        setCounter(counter - 10);
    }
    return (
        <div>
            <h2>CompB</h2>
            <Btn disabled={counter <= 0} onClick={onDecrement}>Mažinti</Btn>
        </div>
    );
}

export default CompB;