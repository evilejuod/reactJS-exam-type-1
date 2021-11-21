import React, { useReducer } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import styled from "styled-components";
import down from './assets/thumbs-down.png'
import up from './assets/thumbs-up.png'


const Icons = styled.div`
display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
  color: #7f7f7f;
 `;

const Button = styled.button`
  height: 70px;
  width: 100px;
`;

const ACTIONS = {
  LIKE: 'like',
  DISLIKE: 'dislike',
}

const initialState = {
  likes: 12,
  dislikes: 2,
  active: null
};

const reducer = (state, action) => {
  const { likes, dislikes, active } = state;

  switch (action.type) {
    case ACTIONS.LIKE:
      return {
        ...state,
        likes: state.likes + 1,
        dislikes: active === "dislike" ? dislikes - 1 : dislikes,
        active: "like"
      };
    case ACTIONS.DISLIKE:
      return {
        ...state,
        likes: active === "like" ? likes - 1 : likes,
        active: "dislike",
        dislikes: dislikes + 1
      };
    default:
      return state;
  }
};

function Task4() {

  const [state, dispatch] = useReducer(reducer, initialState);
  const { likes, dislikes, active } = state;

  return (
    <div >
      <h3>Task 4</h3>
      <Icons >
        <Button

            onClick={() =>
                active !== "like" ? dispatch({ type: ACTIONS.LIKE }) : null
            }
        >Likes</Button>
        <p>{likes}</p>

        <Button
            onClick={() =>
                active !== "dislike" ? dispatch({ type: ACTIONS.DISLIKE }) : null
            }
        >Dislikes</Button>
        <p>{dislikes}</p>

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
