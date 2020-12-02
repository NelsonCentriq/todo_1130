import React, {Component} from 'react';

export class ToDoBanner extends Component {

    //  Features 1 & 2
    render = () =>
        <h4>
            {this.props.todoOwner}'s ToDo List (
                {this.props.todoList.filter(xyz => !xyz.done).length} items still not done.
            )
        </h4>
}