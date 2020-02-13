import React from 'react';
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
import "./components/TodoComponents/Todo.css";

const Todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super();
    this.state = {
      Todos
    };
  }  

  addTodo = (e, todo) => {
    e.preventDefault();

    const newTodo= {
      task: todo,
      id: Date.now(),
      completed: false
    };

    this.setState({
      Todos: [...this.state.Todos, newTodo]
    });
  };

  toggleTodo= todoId => {
    console.log(todoId);

    this.setState({
      Todos: this.state.Todos.map(todo => {
        //console.log(todo);
        if(todoId === todo.id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }

        return todo;
      })
    })
  }

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      Todos: this.state.Todos.filter(todo => !todo.completed)
    });
  };
  
  
  render() {
    console.log("rendering...");
    return (
      <div className="App">
        <div className="header">
        <h2>Todo List</h2>
        <TodoForm addTodo={this.addTodo} />
      </div>
      <TodoList 
          Todos={this.state.Todos}
          toggleTodo={this.toggleTodo}
          clearCompleted={this.clearCompleted}
      />
      </div>
    );
  }
}

export default App;
