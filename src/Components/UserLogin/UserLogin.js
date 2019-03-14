import React, { useState } from 'react';
import './UserLogin.css'

const UserLogin = () => {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    
    const createUser = (e) => {
        e.preventDefault()
        console.log(e.target.value, 'tu bedzie php')
    }

    return (
        <div className='div-wrapper-userlogin'>
            <form className='form-userlogin' onSubmit={(event) => createUser(event)}>
                <input className='input-userlogin' type="text" value={username} onChange={(e)=>setUsername(e.target.value)} name='username' placeholder='User'/>
                <input className='input-userlogin' type="password" value={password} onChange={(e)=>setPassword(e.target.value)} name='password' placeholder='Password'/>
                <input type="submit" value="Log In" />
            </form>
        </div>
    )
}

export default UserLogin