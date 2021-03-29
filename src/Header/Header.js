import {Component,state,switchFemale,switchMale} from 'react';
import  './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Container,Row,Col}from "react-bootstrap";
import {Link} from "react-router-dom"

class Header extends Component{
    state={
        config:{
            headers:{
                'authorization':`Bearer ${localStorage.getItem('token')}`
            }
        }
     }
     
     switchMale = (e)=>{
        
        localStorage.setItem('gender',"Male");
        window.location.href="/male"
    }

    switchFemale = (e)=>{
       
       localStorage.setItem('gender',"Female");
       window.location.href="/male"
   }
  
    render(){
        const token = localStorage.getItem('token')
        const userType = localStorage.getItem('userType')
        return(
           <div className='header'>
            <Link to = "/">
            <img className = "logo" src="im.png"/> 
            </Link> 

           
                <div className="male">
                    <button className=" btn btn-outline-warning mr-3"onClick={this.switchMale}>MALE</button>
                </div>
             
             
            
                <div className="female">
                    <button className="btn btn-outline-primary"  onClick={this.switchFemale}>FEMALE</button>
                </div>
               
               
            
   

               <div className="header_search">
                   <input
                   className="header_searchInput" type="text"/>
                   <SearchIcon className="header_searchIcon"/>
               </div>

               <div className="header_nav">
                
                    
                   <Link to="/login">
                   <div className='header_option'>
                        <span className='header_optionOne'>
                            Hello 
                        </span>
                        <span className='header_optionTwo'>
                            Sign In 
                        </span>
                   </div>
                   </Link>
                   {!token ? (<>
                </>):(<>
                </>)}
               
                   
                <Link >
                  {userType}
                </Link>

                <Link to = "/Checkout">
                   <div className="header_optionBasket">
                     
                     <ShoppingBasketIcon/>
                     
                     
                    
                     </div>  
                  
                </Link>
               

                 
               </div>
           </div>
        )
    }  
}

export default Header;