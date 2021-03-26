//import logo from './logo.svg';
import './App.css';
import Male from './Body/Male'

import Start from './Body/Start';
import Checkout from './Body/Checkout';
import Header from './Header/Header';
import AddProduct from './Body/AddProduct';
import Login from './Body/Login';
import Register from './Body/Register';
import Update from './Body/Update';
import  'bootstrap/dist/css/bootstrap.min.css'

import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Footer from './Footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
      

       <Switch>
          <Route path="/checkout">
          <Header/>
        
            <Checkout/>
           
          </Route>

          <Route path="/male">
            <Header/>
            <Male/>

          </Route>

          <Route path="/add">
            <Header/>
            <AddProduct/>
            <Footer/>
          </Route>

          <Route path='/start'>
            <Start/>
          </Route>

          <Route path="/login">
            <Login/>
          </Route>

          <Route path="/Register">
            <Register/>
          </Route>

          <Route path="/Update">
            <Update/>
          </Route>
           
          

          <Route path="/">
            <Start/>
          </Route>


     
       </Switch>
      
       
       

     </div>
</Router>
   
  );
}

export default App;
