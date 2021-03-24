
import Button  from './Button'
import React from 'react'
import './Start.css'

function Start() {
    return (
        <div className="start_container">
            <img src=''/>
            <h3>Fashions fade, style is Eternal.</h3>
            <div className='start_btn'>
               <Button type="button"
               
               buttonStyle="btn--warning--solid"
               buttonSize="btn--large">Male</Button>

            <Button type="button"
               buttonStyle="btn--warning--solid"
               buttonSize="btn--large">women</Button>

            </div>
            
        </div>
    )
}

export default Start
