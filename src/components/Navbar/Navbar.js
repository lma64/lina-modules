import React, { Component } from "react";
import "./Navbar.css";
import Logo from "../../assets/enha-name-white.jpg";
import Logo2 from "../../assets/enha-logo2.jpg";

export default class Navbar extends Component {
    state = { clicked: false}
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    
    render() {
    return (
        <nav>
            <a className="navbar-brand d-lg-none" href="#">
                <img src={Logo} className="initial-logo" alt="Logo" width="150px"/>

            </a>
    
            <div>
                <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
                    <li>
                        <a href="">PROFILE</a>
                    </li>
                    <li>
                        -- 
                    </li>
                    <li>
                        <a href="">DISCOGRAPHY</a>
                    </li>
                    <li>
                        -- 
                    </li>
                    <li>
                        <a href="">ACHIEVEMENTS</a>
                    </li>
                    <li>
                        -- 
                    </li>
                </ul>
            </div>
            <div id="mobile" onClick={this.handleClick}>
                <i id="bar" className={this.state.clicked ? "fas fa-times custom-cursor " : "fas fa-bars custom-cursor times"}></i>
            </div>
        </nav>
      )
  }
}

