import React, { useState } from 'react';
import './UserLogin.css'

const UserLogin = (props) => {
    //const {createUser,handleUsernameChange,username,handlePasswordChange,password} = {...props}
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    
    const createUser = (e) => {
        e.preventDefault()
        console.log(e.target.value, 'tu bedzie php')
    }

    return (
        <div className='div-wrapper-userlogin'>
            <form onSubmit={(event) => createUser(event)} className='form-userlogin'>
                <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} name='username' placeholder='User'/>
                <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} name='password' placeholder='Password'/>
                <input type="submit" value="Stwórz nowego użytkownika" />
            </form>
        </div>
    )
}

export default UserLogin