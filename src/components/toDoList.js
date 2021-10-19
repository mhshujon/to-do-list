import React, { Component } from "react";

class ToDoList extends Component {
    state = {
        todos : [ 'R&D - React', 'Coding Practice', 'Office Works' ],
        ids : [ 'rd', 'cp', 'ow' ]
    };
    style = {
        listStyleType: 'none',
        fontWeight: 'bold',
        fontSize: '30px'
    }
    render() {
        return (
            <React.Fragment>
                <h1>To Do List</h1>
                <ul style={this.style}>
                    <li>
                        <input type="checkbox"/>
                        <span className="m-3">{this.state.todos[0]}</span>
                    </li>
                    <li>
                        <input type="checkbox"/>
                        <span className="m-3">{this.state.todos[1]}</span>
                    </li>
                    <li>
                        <input type="checkbox"/>
                        <span className="m-3">{this.state.todos[2]}</span>
                    </li>
                </ul>
            </React.Fragment>
        );
    }
}

export default ToDoList;