import { Component } from "react";
import axios from "axios";

class AddProduct extends Component{
    state = {
        pname:'',
        pdesc:'',
        pprice:'',
        ppimage:''
    }
    addProduct =(e)=>{
        e.preventDefault();
        const productData = {
            pname : this.state.pname,
            pdesc : this.state.pdesc,
            pprice : this.state.pprice,
            pimage : this.state.pimage
        }
        axios.post("http://localhost:90/product/insert",productData)
    }

    

    changeHandler = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render(){
        return(
            <div>
                 <form>
                <p>
                    Product Name
                    <input type="text" name="pname" value={this.state.pname} 
                    onChange={this.changeHandler}/>
                </p>

                <p>
                    Product Description
                    <input type="text" name="pdesc" value={this.state.pdesc}
                    onChange={this.changeHandler}/>
                </p>

                <p>
                    Product Price
                    <input type="text" name="pprice"  value={this.state.pprice}
                    onChange={this.changeHandler}/>
                </p>

                <p>
                    Product image
                    <input type="text" name="pimage" value={this.state.pimage}
                    onChange={this.changeHandler}/>
                </p>

                <button onClick={this.addProduct}>Add Product</button>


            </form>
            </div>
        )
    }
}

export default AddProduct;