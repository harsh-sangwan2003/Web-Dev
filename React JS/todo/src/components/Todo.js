import React, { Component } from 'react'

export class Todo extends Component {

    constructor() {

        super();

        //state will have the data
        this.state = {

            tasks: [{ task: "Get milk", id: 1 }, { task: "Attend a meeting", id: 2 }],
            currTask: "",
        }

    }

    handleChange = (e) => {

        console.log(e.target.value);

        this.setState({

            currTask: e.target.value
        })

    }

    handleAddTask = () => {

        //Different address is formed so it makes the performance faster
        this.setState({

            tasks: [...this.state.tasks, { task: this.state.currTask, id: this.state.tasks.length + 1 }],
            currTask: ""
        })
    }

    handleDelete = (id) => {

        let newArr = this.state.tasks.filter(taskObj => taskObj.id != id);

        this.setState({

            tasks: [...newArr]
        })
    }

    render() {
        return (
            <div>

                <input type="text" value={this.state.currTask} onChange={this.handleChange} />

                <button onClick={this.handleAddTask}>Add Task</button>

                <ul>

                    {this.state.tasks.map((taskObj) => (

                        <li>
                            <p>{taskObj.task}</p>
                            <button onClick={() => this.handleDelete(taskObj.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Todo