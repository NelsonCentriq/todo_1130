import React, {Component} from 'react';

export class ToDoRow extends Component {

    //  Feature 3 & 4


    //  Feature 10
    //  Delete Todo Item
    deleteToDo = (todoID) => {
        const url = "http://localhost:49303/api/todos/DeleteTodo?todoID=" + todoID;
        fetch(url, {method: 'DELETE'})
            .then(response => response.json())
            .then((data) => {
                console.log(JSON.stringify({data}));
            })
            .catch(console.log);
            window.location.reload(true);
    }

    render = () =>
        <tr>
            <td>
                {this.props.item.action}
            </td>
            <td>
                <input 
                    type="checkbox"
                    checked={this.props.item.done}
                    onChange={() => this.props.callback(this.props.item)}
                />
            </td>
            <td>
                <button
                    className="btn btn-primary mt-1"
                    onClick={() => this.deleteToDo(this.props.item.todoID)}
                >
                   DELETE
                </button>
            </td>
        </tr>
}