import React from 'react'
import Footer from '../Footer/Footer'
import './Male.css';
import Product from './Product';

function Male() {
    return (
        <div>
            <div className="male">
                <div className="male_container">
                    <div className="male_image"/>
                    <div className="male_row">
                        <Product/>
                        <Product/>
                        <Product/>
                    </div>

                    <div className="male_row">
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

export default Male
