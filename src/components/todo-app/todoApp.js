import React, {Component} from 'react';
import './todoApp.css'
import List from '../todo-list/todoList';
import TodoListForm from "../todo-list-form/todoListForm";

class TodoApp extends Component {

    render() {
        return (
            <div className="todo-app">
                <h1>TODO LIST</h1>
                <TodoListForm/>
            </div>
        );
    }
}

export default TodoApp;
