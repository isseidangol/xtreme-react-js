import {Component} from 'react';
import  './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Container,Row,Col}from "react-bootstrap";
import {Link} from "react-router-dom"

class Header extends Component{
  
    render(){
        return(
           <div className='header'>
            <Link to = "/">
            <img className = "logo" src="logo3.png"/> 
            </Link>   
               
            
   

               <div className="header_search">
                   <input
                   className="header_searchInput" type="text"/>
                   <SearchIcon className="header_searchIcon"/>
               </div>

               

               <div className="header_nav">
                   <Link to="/login">
                   <div className='header_option'>
                        <span className='header_optionOne'>
                            Hello Guest
                        </span>
                        <span className='header_optionTwo'>
                            Sign In 
                        </span>
                   </div>
                   </Link>
                   
                  

                <Link to = "/Checkout">
                   <div className="header_optionBasket">
                     
                     <ShoppingBasketIcon/>
                     
                     
                     <span className="header_optionLineTwo 
                     header_basketCount">0</span>
                     </div>  
                  
                </Link>

                 
               </div>
           </div>
        )
    }  
}

export default Header;