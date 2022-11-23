import {Component, state} from 'react';
import Footer from '../../Footer/Footer';
import './Female.css';
import Product from '../Product/Product';
import axios from 'axios';
import {Container, Row, Col} from 'react-bootstrap';

class Female extends Component {
    state = {
        products: [],
        gender: localStorage.getItem('gender')
    }

    componentDidMount() {
        if (this.state.gender == null) {
            this.state.gender = "Index"
        }
        axios.get("http://localhost:90/product/showall/" + this.state.gender)
            .then((response) => {

                this.setState({products: response.data.data})
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        return (
            <div>
                <div className="home container-fluid px-0">
                    <div className="home_container container-fluid px-0">

                        <div className="maleimg">
                            <img src="Fashion_sale_banner_template.jpg" alt="" className="maleimg"/>
                        </div>
                        <div className="home_row">
                            <Container fluid>
                                <Row>


                                    {
                                        this.state.products.map((val) => {
                                            return (

                                                <Col lg={4}>

                                                    <Product title={val.pname} image={val.pimage} price={val.pprice}
                                                             id={val._id}/>

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

export default Female;
