import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './Nav.scss';

class Nav extends Component {
    render() {
        return (
            <nav className="topnav">
                <NavLink to="/" activeClassName="active" exact={true} >Home</NavLink>
                <NavLink to="/todo" activeClassName="active" >Todos</NavLink>
                <NavLink to="/about" activeClassName="active" >About</NavLink>
                <NavLink to="/user" activeClassName="active" >Users</NavLink>
            </nav>
        );
    }
}

export default Nav;