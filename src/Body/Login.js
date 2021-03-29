import React from 'react'
import axios from 'axios';
import {Component, state, changeHandler, submitLogin } from "react";
import { Link } from 'react-router-dom';
import swal from 'sweetalert'
import './Login.css';

class login extends Component{
    state={
        username: "",
        password: ""
    }
    changeHandler =(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    submitLogin = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:90/account/login", this.state)
        .then((response)=>{
            if(response.data.success === true)
            {
                swal({
                    "title":"Success!!",
                    "text":"logged in",
                    "icon":"success"
                })

                localStorage.setItem('token',response.data.token);//to save the token after user logged in
                localStorage.setItem('userType',response.data.userType);//to save the token after user logged in
            }
            console.log(response);
        })        
        .catch((err)=>{
            console.log(err.response)
        })
    }
    render(){  return (
        <div className="login">
            <Link to="/">
           <img className="login_logo"
            src="im2.png"/>
            </Link>

            <div className="login_container">
                <h1>Sign-in</h1>

                <form>
                    <h5>Username</h5>
                    <input type="text" name="username" value={this.state.username} onChange={this.changeHandler}/>

                    <h5>Password</h5>
                    <input type="password" name="password" value={this.state.password} onChange={this.changeHandler}/>

                    <button className="login_btn btn text-black btn-primary mr-3" onClick={this.submitLogin}>Sign In</button>
                </form>

                <p>
                    By signing-in you accept and agree
                    to our <b>XTREAM</b> terms and condition.
                </p>
                <Link to="/Register">
                <button className="register_btn btn text-black btn-primary mr-3">Create account</button>
                </Link>

            </div>

        </div>
    )}

  
}

export default login
