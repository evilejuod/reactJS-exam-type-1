import React, { Component } from 'react';
import styled from "styled-components";

const todos = 'https://jsonplaceholder.typicode.com/todos'

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
        todos: []
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then((res) => res.json())
        .then(todoList => {
          this.setState({ todos: todoList });
        });
  }

  render() {
    return (
        <div>
          {this.state.todos.map((item) => (
              <div key={item.id}>
                <h3>{item.title}</h3>
                <h4>{item.completed}</h4>
              </div>
          ))}

        </div>
    )

  }
}
