import React,{useState} from 'react'
import "./Product.css";
import {Link} from 'react-router-dom';
import axios from 'axios';



function Product({title, image, price,id}) {
    
    let [auth,setAuth] = useState({
        "config":{
            "headers":{
                "authorization":`Bearer ${localStorage.getItem('token')}`
            }
        }
    })

    var userType = localStorage.getItem("userType");
    var token = localStorage.getItem("token");

    const deleteProduct = (e,id)=>{
        
        axios.delete("http://localhost:90/product/delete/"+id,auth.config)
        .then((response)=>{
           

                window.location.href = "/male"
            
        })
        .catch((err)=>
        {
            console.log(err);
        }
        )
    }
      
    return (
       
        <div className="product">
           <div className = "product_info">
              <p>{title}</p> 
              <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
              </p>
            </div> 

        <img src ={`http://localhost:90/${image}`}/>
        {
            userType == "Admin" || userType == "Seller"?
            (
                <>
                <button className="btn text-black btn-primary mr-3" onClick={(event)=>{deleteProduct(event,id)}}>Delete</button>
                <button className="btn text-black btn-primary mr-3"><Link to={"/Update/"+id}>Update</Link></button>
                </>
            ):
            (
               
                <button className="btn text-black btn-primary mr-3">Add to Basket{id}</button>
            )
        }
        
        
        </div>
           
    )
}


export default Product
