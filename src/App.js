import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import logo from './logo.svg';
import './css/App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/header';
import About from './components/pages/about';
//import {v4 as uuid} from "uuid";
import axios from 'axios';

class App extends Component {

  state = {
    todos: [
      // {
      //   id: uuid(),
      //   title: "Peng React",
      //   completed: false
      // },
      // {
      //   id: uuid(),
      //   title: "Peng vue",
      //   completed: true
      // },
      // {
      //   id: uuid(),
      //   title: "Peng jquery",
      //   completed: true
      // },
      // {
      //   id: uuid(),
      //   title: "Peng ci",
      //   completed: true
      // },
      // {
      //   id: uuid(),
      //   title: "Peng Node js",
      //   completed: true
      // }
    ]
  }

  componentDidMount()
  {
    axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=10`)
      .then(res => this.setState({ todos: res.data }))
      .catch(error => console.log(error));
  }

  //Mark complete
  markComplete = (id) => {
    this.setState(
      {todos: this.state.todos.map(todo => {
        if(todo.id === id)
        {
          todo.completed = !todo.completed //false
        }
        return todo;
      })}
    )
  }

  addTodo = (title) => {
    axios.post(`https://jsonplaceholder.typicode.com/todos`,{
      title,
      completed: false
    })
    .then(res => this.setState({ todos:  [res.data, ...this.state.todos] }))
    .catch(error => console.log(error));
  }

  deleteTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({ todos:  [...this.state.todos.filter(todo => todo.id !== id)] }))
    .catch(error => console.log(error));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <Route
            exact
            path="/"
            render={props => (
              <React.Fragment>
                <div className="container">
                  <AddTodo addTodo={this.addTodo}/>
                  <Todos
                    markComplete={this.markComplete}
                    deleteTodo={this.deleteTodo}
                    todos={this.state.todos}
                  />
                </div>
              </React.Fragment>
            )}
          />
          <Route path="/about" component={About}></Route>
        </div>
      </Router>
    )
  }
}

export default App;
