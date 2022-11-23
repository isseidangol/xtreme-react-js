import React from 'react'
import {Link} from 'react-router-dom'
import './Start.css'
import Index from './Male/Male'

function Start(props) {
    const switchGender = (e, gender) => {
        localStorage.setItem('gender', gender);
    }
    // let homeChecked = localStorage.getItem("checked");
    return (


        <div>

            <div className="start_container">

                <h3><span className="text-primary">Fashions fade,</span> <span className="text-black text-warning">style is Eternal.</span>
                </h3>
                <div className='start_btn'>
                    <Link to="/male">
                        <button className="btn text-black btn-warning mr-3 btn-lg" onClick={(event) => {
                            switchGender(event, "Index")
                        }}>Male
                        </button>
                    </Link>

                    <Link to="/female">

                        <button className="btn text-black btn-outline-primary btn-lg" onClick={(event) => {
                            switchGender(event, "Female")
                        }}>Women
                        </button>
                    </Link>


                </div>

            </div>

        </div>


    )
}

export default Start
