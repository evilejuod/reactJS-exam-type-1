import React, {useEffect, useReducer} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import styled from "styled-components";


const Icons = styled.div`
display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
  color: #7f7f7f;
 `;
const Icon =styled.i`
  margin-right: 40px;
  margin-left: 40px;
  color: #7f7f7f;
`;

const initCounterValues = {
  counterValueUp: 0 ,
  counterValueDown: 0
};

function counterReducer (state, action){
  console.log('counterReducer fired action is: ', action)

  switch (action.type){
    case 'daugiau' :
      return {
        ...state,
        counterValueUp: state.counterValueUp + 1 };
    case 'maziau' :
      if(state.counterValue <= 0) return state
      return {
        ...state,
        counterValueDown: state.counterValueDown - 1 };
    default:
      console.log('type not found')
      return state;
  }

}

function Task4() {

const [ state, dispatch ] = useReducer(counterReducer, initCounterValues)



  const handleIncrement = () => {
    dispatch({type: 'daugiau'})
  }
  const handleDecrement = () => {
    if(state.counterValue <= 0 ) return;
    // setCounterValue(counterValue - 1)
    dispatch({type: 'maziau'})

  }

  // useEffect(() => {

  // }, [])

  return (
    <div >
      <h3>Task 4</h3>
        <Icons>

          <Icon className="fa fa-thumbs-up fa-5x"
                aria-hidden="true"
                onClick={handleIncrement}
                // disabled={state.counterValueUp > 1}
          />
          <h1>{state.counterValueUp}</h1>


          <Icon className="fa fa-thumbs-down fa-5x"
                aria-hidden="true"
                onClick={handleDecrement}
                // disabled={state.counterValueDown === 0 }

          />
          <h1>{state.counterValueDown}</h1>
        </Icons>
    </div>
  );
}

export default Task4;

/* Task 4
Atkurkite šį komponentą: https://prnt.sc/1296zmk

Pastabos, leidžiama balsuoti, tik vieną kartą. 
Paspaudus ant vieno mygtuko, antrą kartą paspausti ant jo 
negalima, tačiau leidžiama pakeisti nuomonę ir paspausti 
ant kito. Tokiu atveju nuo prieš tai paspausto balsas "nuimamas"
ir perduodamas kitam.

Pastaba: būtina panaudoti useReducer
*/
