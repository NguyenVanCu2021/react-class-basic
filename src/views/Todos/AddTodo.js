import React, { Component } from 'react';
import { toast } from 'react-toastify';

class AddTodo extends Component {

    state = {
        title: ''
    }

    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleAddTodo = (event) =>{
        event.preventDefault()

        if(!this.state.title) {
            toast.error('Missing Title')
            return;
        }

        let todo = {
            id: Math.floor(Math.random() *1001),
            title: this.state.title
        }

        this.props.addNewTodo(todo)

        this.setState({
            title: ''
        })
    }

    render() {
        let {title} = this.state;
        return (
            <div className="add-todo"> 
                <input 
                    type="text"
                    value={title}
                    onChange={(event) => this.handleOnChangeTitle(event)}
                />
                <button 
                    type="submit" 
                    className="add"
                    onClick={(event) => this.handleAddTodo(event)}
                >
                        Add
                </button>
            </div>
        );
    }
}

export default AddTodo;