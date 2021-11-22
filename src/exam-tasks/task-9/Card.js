import React, { Component } from 'react';
import styled from "styled-components";

const Text = styled.li`
  font-style: italic ;
  text-align: left;
  
`;
const CardCont = styled.ul`
  width: 525px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
`;

export default class Card extends Component {
    render() {
        const { title, completed } = this.props.todo;
        console.log(this.props.todo)
        return (
            <CardCont>
                 <Text>{title} {completed ? "(atlikta)" : "(neatlikta)"}</Text>
            </CardCont>
        )
    }
}
