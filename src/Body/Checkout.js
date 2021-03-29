import React from 'react'
import"./Checkout.css";
import Footer from "../Footer/Footer";
import { Link } from 'react-router-dom';

function Checkout() {
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
