import React, {Component} from 'react';
import './App.css'
import TodoApp from "./todo-app/todoApp";

class App extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1 className="heading">Todo List with React</h1>
                </header>

                <TodoApp/>
            </div>
        )
    }
}
export default App;
