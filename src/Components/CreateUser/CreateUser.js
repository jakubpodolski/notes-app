import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import './CreateUser.css'

const CreateUser = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passCheck, setPassCheck] = useState('');

    return (
        <div className='div-wrapper-creatuser'>
            <form>
                <input placeholder='name' value={username} onChange={(e)=>setUsername(e.target.value)}/>
                <input placeholder='password' type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <input placeholder='repeate password' type='password' value={passCheck} onChange={(e)=>setPassCheck(e.target.value)}/>
                <input type='submit' value='Create'/>
                <Route render={({ history }) => (
                    <button
                        type='button'
                        className='button-create'
                        onClick={()=>{ history.push('/') }}>
                        Sign in insted
                    </button>
                )}/>
            </form>
        </div>
    )
}

export default CreateUser