import React from 'react'
import { Component,updateProduct,changeHandler } from 'react'
import axios from 'axios'; 
import { Container,state } from 'react-bootstrap';

class Update extends Component {
    state = {
        pname:'',
        pdesc:'',
        pprice:'',
        ppimage:''


    }
    updateProduct =(e)=>{
        e.preventDefault();
        const productData = {
            pname : this.state.pname,
            pdesc : this.state.pdesc,
            pprice : this.state.pprice,
            pimage : this.state.pimage
        }
        axios.post("http://localhost:90/product/update",productData)
    }

    

    changeHandler = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render ()
    {
        return(
<div>
            <form>
                <p>
                    <input type="text" name="pname" value={this.state.pname}
                     onChange={this.changeHandler}/>
                </p>

                <p>
                    <input type="text" name="pdesc" value={this.state.pdesc}
                     onChange={this.changeHandler}/>
                </p>

                <p>
                    <input type="text" name="pprice" value={this.state.pprice}
                     onChange={this.changeHandler}/>
                </p>

                <p>
                    <input type="text" name="pimage" value={this.state.pimage}
                     onChange={this.changeHandler}/>
                </p>

                <button className="update_updateButton" onClick={this.updateProduct}>Update</button>


            </form>
        </div>
        )
        
    }
        
}

export default Update
