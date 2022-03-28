import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class DetailUser extends Component {

    state = {
        user: {}
    }

    async componentDidMount () {
        if(this.props.match && this.props.match.params) {
            let id = this.props.match.params.id
            let res = await axios.get(`https://reqres.in/api/users/${id}`)
            this.setState({
                user: res && res.data && res.data.data ? res.data.data : {}
            })
            
        }
    }

    handleBackBtn = () => {
        this.props.history.push('/user')
    }

    render() {
        let { user } = this.state
        let isEmptyObj = Object.keys(user).length === 0;
        // console.log(this.props)

        return (
            <>
                {isEmptyObj === false &&
                    <>
                        <div>
                            User's name: {user.first_name} - {user.last_name}
                        </div>
                        <div>
                            User's email: {user.email}
                        </div>
                        <div>
                            <img src={user.avatar}/>
                        </div>
                        <div>
                            <button type="button" onClick={() => this.handleBackBtn()}>Back</button>
                        </div>
                    </>
                }
            </>
        );
    }
}

export default withRouter(DetailUser);