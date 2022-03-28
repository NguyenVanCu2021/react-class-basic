import React, { Component } from 'react';
import { withRouter  } from "react-router-dom";
import Color from '../HOC/Color';
import logo from '../../assets/images/broken-frosted-glass-realistic-icon.webp';
import { connect } from 'react-redux';

class Home extends Component {

    componentDidMount() {
        // setTimeout(() =>{
        //     this.props.history.push('/todo')
        // }, 3000);
    }

    handleDeleteUser = (user) => {
        console.log('>>> check user delete', user);
        this.props.deleteUserRedux(user);
    }

    handleCreateUser = () => {
        this.props.addUserRedux()
    }

    render() {
        console.log(this.props)
        let listUsers = this.props.dataRudux;
        return (
            <>
                <div>
                    Hello world form homework &amp; hoi dan IT
                </div>
                <div>
                    <img src={logo} style={{ width: '200px', height: '200px', marginTop: '20px' }} />
                </div>
                <div>
                    { listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1} - {item.name} 
                                    &nbsp;<span onClick={() => this.handleDeleteUser(item)}>x</span>
                                </div>
                            )
                        })
                    }
                    <button onClick={() => this.handleCreateUser()}>Add New</button>
                </div>
            </>
        );
    }
}

// giup react vs redux bat tay voi nhau (chi trong component Home nay thoi)
const mapStateToProps = (state) => {
    return { dataRudux: state.users }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete}),
        addUserRedux: () => dispatch({ type: 'CREATE_USER'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));