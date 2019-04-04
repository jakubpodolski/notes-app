import React from 'react';
import { withRouter } from 'react-router-dom';
import './Header.css'

const Header = withRouter(({ history }) => (
        <div className='div-wrapper-header'>
            <button onClick={() => history.push('/login')}> login </button>
            <button onClick={() => history.push('/create')}> create user </button>
        </div>
))

export default Header;