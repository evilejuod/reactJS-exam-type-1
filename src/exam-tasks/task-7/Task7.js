import React, { useRef } from 'react';
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 200px;
`;
const BtnLight = styled.button`
  width: 250px;
  height: 35px;
  border: 1px solid #000000;
  border-radius: 3px;
  color: #000000;
  font-weight: 600;
  background-color: #f1f1f1;
  margin: 30px 5px;
`;
const BtnDark = styled.button`
  width: 250px;
  height: 35px;
  border: 1px solid #f1f1f1;
  border-radius: 3px;
  background-color: #000000;
  color: #f1f1f1;
  font-weight: 600;
  margin: 30px 5px;
`;
const BtnCont = styled.div`
  display: flex;
  flex-direction: row;
`;

function Task7() {

    const container = useRef(0);

    const onLightThemeBtn = () => {
        container.current.style.backgroundColor = "#f1f1f1"
        container.current.style.color = "#000000"
    };

    const onDarkThemeBtn = () => {
        container.current.style.backgroundColor = "#000000"
        container.current.style.color = "#f1f1f1"
    };

  return (
    <div ref={container} >
      <h3 >Task 7</h3>
        <Main >
            <h1 >Lorem Ipsum is simply dummy text</h1>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries. Lorem Ipsum is simply
                dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type
                specimen book.
            </p>
            <BtnCont>
                <BtnLight onClick={onLightThemeBtn}>Light theme</BtnLight>
                <BtnDark onClick={onDarkThemeBtn}>Dark theme</BtnDark>
            </BtnCont>

        </Main>

    </div>
  );
}

export default Task7;

/* Task 7
Task 7 komponento viduje sukurkite h1 ir p žymas su tekstu ir du mygtukus.

Vienas mygtukas vadinsis "Light theme", kurį paspaudus Task7 komponento fonas
taps šios spalvos #f1f1f1, o tekstas #0000.
Kitas mygtukas vadinsis "Dark theme", kurį paspaudus Task7 komponento fonas
taps šios spalvos #000000, o tekstas #f1f1f1.

Pastabos:
- mygtukai turi būti atvaizduojami komponento viduje, jiems atskirų komponentų
kurti nereikia;
- panaudokite useRef.
*/
