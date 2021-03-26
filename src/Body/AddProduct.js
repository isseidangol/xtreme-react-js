import { Component,state,addProduct,changeHandler,fileHandler } from "react";
import axios from "axios";
import './AddProduct.css'
import { data } from "jquery";
import swal from 'sweetalert'


class AddProduct extends Component{
    
    state = {
        pname:'',
        pdesc:'',
        pprice:'',
        ppimage:'',
        category:"Male",
        config :{ //to check the tokenn of the user
            headers : {
                authorization: `Bearer ${localStorage.getItem('token')}` 
            }
        }
    }
    fileHandler = (e)=>{
        this.setState({
           [e.target.name]  : e.target.files[0]
        })
    }
   
    addProduct =(e)=>{
        e.preventDefault();//prevent from default behaviour(refresh) 
        const productData = new FormData()
           productData.append( 'pname' , this.state.pname)
           productData.append('pdesc' , this.state.pdesc) 
           productData.append('pprice' , this.state.pprice) 
            productData.append('pimage' , this.state.pimage)
            productData.append('category',this.state.category)
            
    
        axios.post("http://localhost:90/product/insert",productData, this.state.config)
        .then((response)=>{
                if(response.data.success == true)
                {
                    swal({
                        "title":"Success!!",
                        "text":"Added",
                        "icon":"success"
                    })
                }
        })
        .catch((err)=>{
                console.log(err.response)
        })
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
                    <input type="file" name="pimage" 
                    onChange={this.fileHandler}/>
                </p>

                <p>
                    Category
                    <select name="category" onChange={this.changeHandler}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </p>

                <button className="btn text-black btn-outline-primary mr-3 " onClick={this.addProduct}>Add to male</button>
              
              

            </form>
            </div>
        )
    }
}

export default AddProduct;