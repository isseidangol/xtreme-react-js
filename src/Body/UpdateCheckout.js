import React, { Component,state,changeHandler,updateProductdata } from 'react'
import swal from 'sweetalert'
import axios from "axios";
import { withRouter } from 'react-router';


 class UpdateCheckout extends Component {
    state={
        quantity:""
        // id:

    }
    changeHandler=(e)=>{this.setState({
      [e.target.name]:e.target.value
    })}
    updateProductdata=(e)=>{
      e.preventDefault();
      axios.put("http://localhost:90/cart/update/"+this.props.match.params.id,this.state)
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

    render() {
        return (
            <div>
                 <div className="update_Checkout">
      <div className="updateCheckout_container">
        <h1>Update</h1>

        <form>
          <h5>Quantity</h5>
            <input
              type="text"
              name="quantity"
              value={this.state.quantity}
              onChange={this.changeHandler}
            />
           
            <button   className="btn text-black btn-outline-primary mr-3" onClick={this.updateProductdata}>
            Update
          </button>
       
            
            </form>
            </div>
            </div>
    
            </div>
     
        )
    }
}

export default withRouter(UpdateCheckout) 
