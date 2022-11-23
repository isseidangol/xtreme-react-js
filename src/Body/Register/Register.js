import {Component, submitUser} from 'react';
import {Container, state} from 'react-bootstrap';
import axios from 'axios';
import './Register.css';
import swal from 'sweetalert'
import {Link} from 'react-router-dom';

class Register extends Component {
    state = {
        UserName: "",
        Password: "",
        Email: "",
        userType: "",
        fullName: ""


    }

    submitUser = (e) => {
        e.preventDefault();
        const userData = {
            username: this.state.UserName,
            Password: this.state.Password,
            email: this.state.Email,
            userType: this.state.userType,
            fullName: this.state.fullName
        }
        axios.post("http://localhost:90/insert/user", userData)
            .then((response) => {


                swal({
                    "title": "Success!!",
                    "text": "Registration done",
                    "icon": "success"
                })


            })
            .catch((err) => {
                console.log(err);
            })

    }

    render() {
        return (
            <div className="register">
                <div className="register_main_container">
                    <div className="register_outer_container">
                        <div className="register_container">
                                <Link to="/">
                                    <img src="im2.png" className="register_logo"/>
                                </Link>
                            <div className="form_container">
                                <h1>Register</h1>
                                <form>
                                    <input
                                        placeholder="Full name"
                                        type="text" value={this.state.fullName}
                                        onChange={(event) => {
                                            this.setState({fullName: event.target.value})
                                        }}/>
                                    <input
                                        placeholder="Username"
                                        type="text" value={this.state.UserName}
                                        onChange={(event) => {
                                            this.setState({UserName: event.target.value})
                                        }}/>

                                    <input
                                        placeholder="Password"
                                        type="password" value={this.state.Password}
                                        onChange={(event) => {
                                            this.setState({Password: event.target.value})
                                        }}/>

                                    <input placeholder="Email" type="text" value={this.state.Email}
                                           onChange={(event) => {
                                               this.setState({Email: event.target.value})
                                           }}/>

                                    <h5>UserType</h5>
                                    {/*<input type ="text" value = {this.state.userType} */}
                                    {/*onChange={(event)=>{this.setState({userType: event.target.value})}}/>*/}
                                    <div onChange={(event) => {
                                        console.log("event",event.target.value)
                                        this.setState({userType: event.target.value})
                                    }}
                                         className="register_userType">
                                        <span>
                                        <input type="radio" value="admin" name="userType"
                                               className="register_userType_radio"/>Admin</span>
                                        <span>
                                        <input type="radio" value="customer" name="userType"
                                               className="register_userType_radio"/> Customer</span>
                                        <span>
                                        <input type="radio" value="seller" name="userType"
                                               className="register_userType_radio"/> Seller</span>
                                    </div>


                                    <button className="register_submitButton btn text-black btn-primary mr-3"
                                            onClick={this.submitUser}>Submit
                                    </button>
                                    <Link to="/login">
                                        <button
                                            className="register_submitButton btn text-black btn-outline-primary mr-3">Already
                                            have an account
                                        </button>
                                    </Link>

                                </form>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src="register.jpg" className="register_sideImage"/>
                    </div>
                </div>
            </div>

        )
    }
}

export default Register