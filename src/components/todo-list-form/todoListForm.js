import React, { Component } from 'react';
import List from '../todo-list/todoList';

class TodoListForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            items: []
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange (event) {
        this.setState({ term: event.target.value })
    };

    onSubmit (event) {
        event.preventDefault();
        this.setState({
            term: '',
            items: [...this.state.items, this.state.term]
        });
    };

    render() {
        return (
            <div>
                <List items={this.state.items} />
                <form className="App" onSubmit={this.onSubmit}>
                    <input value={this.state.term} onChange={this.onChange} />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}
export default TodoListForm;
