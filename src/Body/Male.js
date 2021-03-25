import {Component} from 'react';
import Footer from '../Footer/Footer';
import './Male.css';
import Product from './Product';

class Male extends Component{
  
    render(){
      localStorage.setItem("checked",true)

   
 return (
    <div>
    <div className="home">
        <div className="home_container">
          <div
          className="maleimg"
          /> 
          
          <div className="home_row">
             <Product title="Leather jacket" 
             price ={45} 
             image= "https://i.pinimg.com/originals/51/99/7d/51997dbfdb2d7d87c347635f08ec2a4e.jpg" />
            
             <Product/>
             <Product/>
            
          </div>

          <div className="home_row">
         
             <Product/>
             <Product/>
             <Product/> 
          </div>
          
        </div>
       

       
    </div>
    <Footer/>
    </div>
    )
}
}

export default Male;
