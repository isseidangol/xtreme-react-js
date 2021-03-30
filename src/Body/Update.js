import React from "react";
import { Component, updateProduct, changeHandler } from "react";
import axios from "axios";
import { Container, state } from "react-bootstrap";
import { withRouter } from "react-router";

class Update extends Component {
  state = {
    pname: "",
    pdesc: "",
    pprice: "",
    ppimage: "",
    config: {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    },
    id: this.props.match.params.id,
  };

  componentDidMount() {
    console.log(this.props.match && this.props.match.params.param);

    const id = this.state.id;
    console.log(id);
    axios
      .get("http://localhost:90/product/single/" + this.props.match.params.id)
      .then((response) => {
        this.state.pname = response.data.data.pname;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  updateProduct = (e) => {
    e.preventDefault();
    const productData = {
      pname: this.state.pname,
      pdesc: this.state.pdesc,
      pprice: this.state.pprice,
      pimage: this.state.pimage,
      id: this.props.match.params.id,
    };
    axios
      .put(
        "http://localhost:90/product/update",
        productData,
        this.state.config
      )
      .then((response) => {})
      .catch((err) => {
        console.log(err);
      });
  };

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <form>
          <p>
            <input
              type="text"
              name="pname"
              value={this.state.pname}
              onChange={this.changeHandler}
            />
          </p>

          <p>
            <input
              type="text"
              name="pdesc"
              value={this.state.pdesc}
              onChange={this.changeHandler}
            />
          </p>

          <p>
            <input
              type="text"
              name="pprice"
              value={this.state.pprice}
              onChange={this.changeHandler}
            />
          </p>

          <p>
            <input type="file" name="pimage" onChange={this.fileHandler} />
          </p>

          <button className="update_updateButton" onClick={this.updateProduct}>
            Update
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(Update);
