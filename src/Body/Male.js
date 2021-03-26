import {Component,state} from 'react';
import Footer from '../Footer/Footer';
import './Male.css';
import Product from './Product';
import axios from 'axios';
import {Container,Row,Col} from 'react-bootstrap';
class Male extends Component{
   state={
      products : [],
      gender:localStorage.getItem('gender')
   }
  
   componentDidMount()
   {
      axios.get("http://localhost:90/product/showall/"+this.state.gender)
      .then((response)=>{
        
         this.setState({products:response.data.data})
      })
      .catch((err)=>{
         console.log(err);
      })
   }

    render(){
     
      console.log(this.state)
   
 return (
    <div>
    <div className="home">
        <div className="home_container">
          <div
          className="maleimg"
          > 
          </div>
          <div className="home_row">
          <Container fluid>
             <Row>

           
          {
             this.state.products.map((val)=>{
                return(
               
                  <Col lg={4}>
                    
                  <Product title = {val.pname} image = {val.pimage} price = {val.pprice}/>
                  
                  </Col>
            
               
                )
             })
          }
         
         </Row>
          </Container>
          </div>

         
          
        </div>
       

       
    </div>
    <Footer/>
    </div>
    )
}
}

export default Male;
