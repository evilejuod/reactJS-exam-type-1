import React, { useContext } from 'react';
import { contextCounter } from "./Task8";

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

        <button disabled={counter >= 100} onClick={onIncrement}>Increase</button>
        <button disabled={counter <= 0} onClick={onDecrement}>Decrease</button>

    </div>
  );
}

export default CompA1;
