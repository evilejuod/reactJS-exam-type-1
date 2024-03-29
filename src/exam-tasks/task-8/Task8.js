import React, {useState, createContext} from 'react';
import CompA from './CompA';
import CompB from './CompB';
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
margin-bottom: 40px;
`;

export const ContextCounter = createContext();

function Task8() {

    const [counter, setCounter] = useState(0)

    return (
        <ContextCounter.Provider value={{ counter, setCounter }}>
            <h3>Task 8</h3>
            <Main>
                <h1>{counter}</h1>
                <CompA />
                <CompB />
                <p>{counter === 100 && 'Didinti nebegalima'}</p>
            </Main>

        </ContextCounter.Provider>
    );
}

export default Task8;

/* Task 8
task-8 aplanke rasite kelis komponetus. Task8 komponente, turi būti atvaizduojami
šie kompoentai: CompA (viduje turi <h2>CompA</h2> ir CompA1 (su tekstu <h3>CompA1</h3>)) 
ir CompB (viduje turi <h2>CompB</h2>).

Task8 komponentų medis
- CompA
-- CompA1
- CompB

Task8 viduje bus sukurtas Counter state'as, kuri bus galima valdyti iš CompA1 ir CompB
State'as bus valdomas su mygtkais, kurie leis state'ą padidinti 10 taškų arba pamažinti 10.
State'ui pasiekus 100, bus draudžiama didinti state'ą ir pasirodys pranešimas "Didinti nebegalima"

Pastaba: naudokite useState, useContext (Context API).

*/
