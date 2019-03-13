import React, { useState } from 'react';
import './UserLogin.css'

const UserLogin = (props) => {
    //const {createUser,handleUsernameChange,username,handlePasswordChange,password} = {...props}
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    
    const createUser = (e) => {
        e.preventDefault()
        console.log(e.target.value)
    }
    console.log(username)
    return (
        <div className='div-wrapper-userlogin'>
            <form onSubmit={(event) => createUser(event)}>
                <input type="text" value={username}  name='username'/>
                <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} name='password'/>
                <input type="submit" value="Stwórz nowego użytkownika" />
            </form>
        </div>
    )
}

export default UserLogin