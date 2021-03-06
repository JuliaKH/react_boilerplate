import React, {Component} from 'react';

const List = props => (
    <ul className="todo-list" >
        {
            props.items.map((item, index) => <li key={index}>{item}</li>)
        }
    </ul>
);

export default List;
