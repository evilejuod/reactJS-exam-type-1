import React, { useReducer} from 'react';
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
  counterValueUp: 12,
  counterValueDown: 2,
  lastVote: undefined,
};

function counterReducer (state, action){
  switch (action.type){
    case 'daugiau' :

      if(state.lastVote === 'daugiau') return state;

      return {
        ...state,
        counterValueUp: state.counterValueUp + 1,
        counterValueDown: state.lastVote === 'maziau' ? state.counterValueDown - 1 : state.counterValueDown,
        lastVote: 'daugiau'
      };
    case 'maziau' :

      if(state.lastVote === 'maziau') return state;

      return {
        ...state,
        counterValueDown: state.counterValueDown + 1,
        counterValueUp: state.lastVote === 'daugiau' ? state.counterValueUp - 1 : state.counterValueUp,
        lastVote: 'maziau'
      };
    default:
      return state;
  }

}

function Task4() {
  const [ state, dispatch ] = useReducer(counterReducer, initCounterValues)

  const handleIncrement = () => {
    dispatch({type: 'daugiau'})
  }

  const handleDecrement = () => {
    dispatch({type: 'maziau'})
  }

  return (
      <div >
        <h3>Task 4</h3>
        <Icons>

          <Icon className="fa fa-thumbs-up fa-5x"
                aria-hidden="true"
                onClick={handleIncrement}
                disabled
          />
          <h1>{state.counterValueUp}</h1>


          <Icon className="fa fa-thumbs-down fa-5x"
                aria-hidden="true"
                onClick={handleDecrement}
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
