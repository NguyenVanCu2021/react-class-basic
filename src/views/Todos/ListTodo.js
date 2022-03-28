import React, { Component } from 'react';
import './ListTodo.scss';
import AddTodo from './AddTodo';
import { toast } from 'react-toastify';

class ListTodo extends Component {

    state = {
        listTodos: [
            { id: 'todo1', title: 'Doing homework'},
            { id: 'todo2', title: 'Making video'},
            { id: 'todo3', title: 'Fixing bugs'}
        ],
        editTodo: {}
    }

    addNewTodo = (todo) =>  {
        this.setState({
            listTodos: [...this.state.listTodos, todo] 
        })

        toast.success("Wow so easy!");
    }

    handleDeleteTodo = (todo) => {
        let currentTodo = this.state.listTodos

        currentTodo = currentTodo.filter(item => item.id !== todo.id)

        this.setState({
            listTodos: currentTodo
        })

        toast.success("Delete success!");
    }

    handleEditTodo = (todo) => {
        let {editTodo, listTodos} = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;

        //save
        if (isEmptyObj === false && editTodo.id === todo.id) {

            let listTodosCoppy = [...listTodos];

            //Find index of specific object using findIndex method.    
            let objIndex = listTodosCoppy.findIndex((item => item.id === todo.id));

            //Update object's name property.
            listTodosCoppy[objIndex].title = editTodo.title;

            this.setState({
                listTodos: listTodosCoppy,
                editTodo: {}
            })

            toast.success("Update todo success!");
            
            return;
        }
        
        //true
        this.setState({
            editTodo: todo
        })
        
    }

    handleOnChangeEditTodo = (event) => {
        let editTodoCoppy = {...this.state.editTodo};
        editTodoCoppy.title = event.target.value;
        this.setState({
            editTodo: editTodoCoppy
        })
    }

    render() {
        let {listTodos, editTodo} = this.state;
        // let listTodos = this.state.listTodos;
        let isEmptyObj = Object.keys(editTodo).length === 0;

        return (
            <div className="list-todo-container">

                <AddTodo 
                    addNewTodo ={this.addNewTodo}
                />

                <div className="list-todo-content">
                    { listTodos && listTodos.length > 0 &&
                        listTodos.map((item, index) =>{
                            return (
                                <div className="todo-child" key={item.id}>
                                    {isEmptyObj === true ?
                                        <span>{index +1} - {item.title}</span>
                                    :
                                        <>
                                            {editTodo.id === item.id ?
                                                <span>
                                                    {index +1} - 
                                                    <input 
                                                        value={editTodo.title}
                                                        onChange={(e) => this.handleOnChangeEditTodo(e)}
                                                    />
                                                </span>
                                            :
                                                <span>{index +1} - {item.title}</span>
                                            }   
                                        </> 
                                    }

                                    <button 
                                        className="edit"
                                        onClick={() => this.handleEditTodo(item)}
                                    >
                                        {isEmptyObj === false && editTodo.id === item.id ?
                                            "Save"
                                        :
                                            "Edit"
                                        }
                                    </button>

                                    <button 
                                        className="delete"
                                        onClick = {() => this.handleDeleteTodo(item)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default ListTodo;