import React, { Component } from 'react'
import { Link } from 'gatsby'
import logo from '../../images/logo.png'
import {FaCartArrowDown} from 'react-icons/fa'

export default class Navbar extends Component {

    state = {
        navState : false,
        navClass : "collapse navbar-collapse",
        menus : [{
            id: 1,
            text: "Home",
            url : "/"
        },{
            id: 2,
            text: "About",
            url : "/about"
        },{
            id: 3,
            text: "Service",
            url : "/service"
        },{
            id: 4,
            text: "Contact",
            url : "/contact"
        }]
    }

    myToggle = () => {
        this.state.navState ? this.setState({
            navState : false,
            navClass : "collapse navbar-collapse"
        }) : this.setState({
            navState : true,
            navClass : "collapse navbar-collapse show"
        })
    }

    render() {
        return (
            <div>
               <nav className="navbar navbar-expand-sm bg-theme text-white ">
                   <Link to="/" className="navbar-brand ml-md-5">
                       <img src={logo} alt="Logo" width="40px" />
                    </Link>
                    <button className="navbar-toggler" onClick={this.myToggle}>
                        <span className="text-white">Menu</span>
                    </button>
                    <div className={this.state.navClass}>
                        <ul className="navbar-nav ml-auto mr-5">
                            {this.state.menus.map(menu => {
                                return(
                                <li key={menu.id} className="nav-item">
                                    <Link to={menu.url} className="nav-link text-white">
                                        {menu.text}
                                    </Link>
                                </li>
                                )
                            })}
                            
                            <li className="nav-item">
                                <Link to="/" className="nav-link text-white">
                                    <FaCartArrowDown className="cart-icon"/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav> 
            </div>
        )
    }
}
