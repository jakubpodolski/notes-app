import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import './UserLogin.css'

const UserLogin = () => {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    
    const loginUser = (e) => {
        e.preventDefault()
        console.log(username,password, 'Logowanie Usera')
    }

    return (
        <div className='div-wrapper-userLogin'>
            <form className='form-userLogin' onSubmit={(event) => loginUser(event)}>
                <input className='input-userLogin' type="text" value={username} onChange={(e)=>setUsername(e.target.value)} name='username' placeholder='User'/>
                <input className='input-userLogin' type="password" value={password} onChange={(e)=>setPassword(e.target.value)} name='password' placeholder='Password'/>
                <div>    
                    <input className='button-userLogin' type="submit" value="Log In" />
                    <Route render={({ history }) => (
                        <button type="button" className='button-create' onClick={()=>{ history.push('/create') }}>
                            Create an account
                        </button>
                    )}/>
                </div>
            </form>
        </div>
    )
}

export default UserLogin