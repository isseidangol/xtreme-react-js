import React from 'react';
import './Button.css'

const STYLES = [
    'btn--primary--solid',
    'btn--success--solid',
    'btn--danger--solid',
    'btn--warning--solid',
    'btn--primary--outline',
    'btn--success--outline',
    'btn--danger--outline',
    'btn--warning--outline',
];

const SIZE = ['btn--medium','btn--large'];

const Button =({
    childern,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];
    return(
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
            {childern}
        </button>
    )
}

export default Button
