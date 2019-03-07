import React from 'react';
import './Header.css'

const Header = (props) => {
    const button = props.onButtonClick
    return (
        <div className='div-wrapper-header'>
            <button> login </button>
            <button> create user </button>
        </div>
    )
}

export default Header