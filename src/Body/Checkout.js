import React,{useState,useEffect} from 'react'
import"./Checkout.css";
import Footer from "../Footer/Footer";
import { Link } from 'react-router-dom';
import {Col,Row,Container,Card} from 'react-bootstrap'
import axios from 'axios';

function Checkout() {
    let [myCart,setCart] = useState([]);
    let [auth,setAuth] = useState({
        "config":{
            "headers":{
                "authorization":`Bearer ${localStorage.getItem('token')}`
            }
        }
    })
    useEffect(()=>{
        axios.get('http://localhost:90/getMyCart',auth.config)
        .then((response)=>{
          
            setCart(
                response.data.data
            )
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
    return (
        <div>
        <div className="checkout">
           <div className="checkout_left">
               <Link to="/Update">
            <img 
                className="checkout_banner" 
                src="https://284859-881315-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/02/combined-tial-40.jpg"/>  
                </Link> 
             <div>
                <h2 className="checkout_title">
                    Your shopping basket</h2>
                    <Row>
                {
                   myCart.map((product)=>{
                        return(
                        <Col lg={4}>
                             <Card className="cart">
                                 <div className="product__img">
                            <Card.Img variant="top" src={`http://localhost:90/${product.pid.pimage}`} />
                            </div>
                            <Card.Body>
                                <Card.Title className="text-center">{product.pid.pname}</Card.Title>
                                <p><strong>Quantity: </strong>{product.quantity}</p>
                                <p><strong>Price: </strong>{product.price}</p>
                                <button></button>

                            
                            </Card.Body>
                            </Card>   
                        </Col>
                        )
                   }) 
                }
                </Row>
            </div>
            

            </div> 

           

            <div className="checkout_right">
              
            </div>
          
        </div>
<Footer/>
        </div>
        


)

}

export default Checkout
