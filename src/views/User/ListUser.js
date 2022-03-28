import React, { Component } from 'react';
import axios from 'axios';
import './ListUser.scss';
import { withRouter } from 'react-router-dom';

class ListUser extends Component {

    state = {
        listUser: []
    }

    async componentDidMount () {
        // Cach 1 - promise
        // axios.get('https://reqres.in/api/users?page=2')
        // .then(res => {
        //     console.log('>>> check res ', res.data.data)
        // })

        // Cach 2 async - await
        let res = await axios.get('https://reqres.in/api/users?page=2');
        this.setState({
            listUser: res && res.data && res.data.data ? res.data.data : []
        })
    }

    handleViewDetailUser = (user) =>  {
        this.props.history.push(`/user/${user.id}`)
    }

    render() {
        let { listUser } = this.state;
        return (
            <div className="list-user-container">
                <div className="title">
                    fetch api
                </div>  
                <div className="list-user-content">
                    {listUser && listUser.length > 0 &&
                        listUser.map((item, index) => {
                            return (
                                <div className="child" key={item.id}
                                    onClick={() => this.handleViewDetailUser(item)}
                                >
                                    {index + 1} - {item.first_name} {item.last_name}
                                </div>
                            )
                        })
                    }
                </div>              
            </div>
            
        );
    }
}

export default withRouter(ListUser);