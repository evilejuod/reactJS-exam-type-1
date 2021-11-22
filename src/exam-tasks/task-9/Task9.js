import React, { Component } from 'react';
import Card from './Card';
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;

export default class Task9 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then((res) => res.json())
        .then(todoList => {
          const firstTodos = todoList.slice(0, 5);
          this.setState({ todos: firstTodos });
        });
  }

  render() {
    return (
        <div>
          <h3>Task 9</h3>
            <Container>
                {this.state.todos.map(todo => (
                    <Card key={todo.id} todo={todo} />
                ))}
            </Container>

        </div>
    );
  }
}

/* Task 9
Task 9 viduje atvaizduokite 5 būtinus atlikti darbų iš čia: https://jsonplaceholder.typicode.com/todos

Pastaba: 
- atkreipkite dėmesį, kad abu komponetai yra class tipo, 
todėl būtina naudoti "Class components State and Lifecycle";
- būtini atlikti darbai turi būti atvaizuojami vienoje eilutėje 
ir turėti šia informacija: pavadinimas, atlikta/neatlikta (yes/no)
*/
