import React from 'react';

const UserLogin = (props) => {
    const {createUser,handleChange,username,password} = {...props}
    return (
        <div>
            <form onSubmit={(event) => createUser(event)}>
                <input type="text" value={username} onChange={handleChange} name='username'/>
                <input type="text" value={password} onChange={handleChange} name='password'/>
                <input type="submit" value="Stwórz nowego użytkownika" />
            </form>
        </div>
    )
}

export default UserLogin