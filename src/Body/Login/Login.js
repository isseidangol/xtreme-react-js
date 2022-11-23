import React from 'react'
import axios from 'axios';
import {Component, state, changeHandler, submitLogin} from "react";
import {Link} from 'react-router-dom';
import swal from 'sweetalert'
import './Login.css';

class login extends Component {
    state = {
        username: "",
        password: ""
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitLogin = (e) => {
        e.preventDefault();
        axios.post("http://localhost:90/account/login", this.state)
            .then((response) => {
                if (response.data.success === true) {

                    localStorage.setItem('token', response.data.token);//to save the token after user logged in
                    localStorage.setItem('userType', response.data.data.userType);//to save the token after user logged in
                    swal({
                        "title": "Success!!",
                        "text": response.data.data.userType,
                        "icon": "success"

                    })

                    window.location.href = "/male"


                } else {
                    swal({
                        "title": "Error!!",
                        "text": response.data.message,
                        "icon": "error"
                    })
                }
                console.log(response);
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        return (
            <div className="login">

                <div className="login_main_container">
                    <div className="login_outer_container">
                        <div className="login_container">
                            <Link to="/">
                                <img className="login_logo"
                                     src="im2.png"/>
                            </Link>
                            <div className="form_container">
                                <div className="login_heading">
                                    <h1>Welcome back !</h1>
                                    <h6>The faster you fill up, the faster you look good.</h6>
                                </div>
                                <form>
                                    <input type="text" name="username" value={this.state.username}
                                           onChange={this.changeHandler} placeholder="Username"/>
                                    <input type="password" name="password" value={this.state.password}
                                           onChange={this.changeHandler} placeholder="Password"/>

                                    <button className="login_btn btn text-black btn-primary mr-3"
                                            onClick={this.submitLogin}>Sign In
                                    </button>
                                </form>

                                <p>
                                    By signing-in you accept and agree
                                    to our <b>XTREAM</b> terms and condition.
                                </p>
                                <Link to="/Register">
                                    <button className="register_btn btn text-black btn-outline-primary mr-3">Create
                                        account
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src="login.jpg" className="login_sideImage"/>
                    </div>
                </div>

            </div>
        )
    }


}

export default login
