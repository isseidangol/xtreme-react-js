import { Component,submitUser } from 'react';
import { Container,state } from 'react-bootstrap';
import axios from 'axios'; 
import './Register.css';
import swal from 'sweetalert'
import { Link } from 'react-router-dom';

class Register extends Component{
    state = {
        UserName : "",
        Password : "",
        Email : "",
        userType:""

    }

    submitUser =(e)=> {
        e.preventDefault();
        const userData = {
            UserName : this.state.UserName,
            Password : this.state.Password,
            Email : this.state.Email,
            userType : this.state.userType
        }
        axios.post("http://localhost:90/insert/user",userData)
        if(response.data.success == true)
        {
            swal({
                "title":"Success!!",
                "text":"Registration done",
                "icon":"success"
            })
        }

    }
    render(){
        return(
            <div className="register">
                <Link to ="/">
                <img className="register_logo" src="im2.png"/>
                </Link>


            <div className="register_container">
                <h1>Register</h1>
                <form>
                    <h5>Username</h5>
                    <input type ="text" value = {this.state.UserName} 
                    onChange={(event)=>{this.setState({UserName: event.target.value})}}/>

                    <h5>Password</h5>
                    <input type ="text" value = {this.state.Password} 
                    onChange={(event)=>{this.setState({Password: event.target.value})}}/>

                    <h5>Email</h5>
                    <input type ="text" value = {this.state.Email} 
                    onChange={(event)=>{this.setState({Email: event.target.value})}}/>

                    <h5>UserType</h5>
                    <input type ="text" value = {this.state.userType} 
                    onChange={(event)=>{this.setState({userType: event.target.value})}}/>


                    <button className="register_submitButton btn text-black btn-primary mr-3" onClick={this.submitUser}>Submit</button>
                    
                </form>
            </div>
            </div>
           
        )
    }
}
export default Register