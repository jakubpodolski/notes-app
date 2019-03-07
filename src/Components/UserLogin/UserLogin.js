import React from 'react';
import './UserLogin.css'

const UserLogin = (props) => {
    const {createUser,handleChange,username,password} = {...props}
    return (
        <div className='div-wrapper-userlogin'>
            <form onSubmit={(event) => createUser(event)}>
                <input type="text" value={username} onChange={handleChange} name='username'/>
                <input type="text" value={password} onChange={handleChange} name='password'/>
                <input type="submit" value="Stwórz nowego użytkownika" />
            </form>
        </div>
    )
}

export default UserLogin