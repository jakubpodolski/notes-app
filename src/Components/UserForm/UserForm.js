import React, { useState } from 'react';
import './UserForm.css'

const UserForm = ({create,handleCreateClick}) => {

    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ passCheck, setPassCheck ] = useState('');
    

    const loginUser = (e) => {
        e.preventDefault()
        // create === true ? creat_user : login_user
        console.log(username,password, 'Logowanie Usera')
    }

    return (
        <div className={create ? 'div-wrapper-userCreate' : 'div-wrapper-userLogin'}>
            <h2>{create ? 'Create account' : 'Log In'}</h2>
            <form className='form-userLogin' onSubmit={(event) => loginUser(event)}>
                <input
                    className='input-userLogin'
                    type='text'
                    value={ username }
                    onChange={ (e)=>setUsername(e.target.value) }
                    name='username'
                    placeholder='User'/>
                <input 
                    className='input-userLogin'
                    type='password'
                    value={password}
                    onChange={ (e)=>setPassword(e.target.value) }
                    name='password'
                    placeholder='Password'/>
                {create ? <input
                            className='input-userLogin'
                            type='password'
                            value={passCheck}
                            onChange={(e)=>setPassCheck(e.target.value)}
                            name='repeate_password'
                            placeholder='repeate password'
                            /> : null}
                <div>
                    <input 
                        className='button-userLogin'
                        type='submit'
                        value={ create ? 'Create' : 'Log in'}
                    />
                    <button 
                        type='button'
                        className='button-create'
                        onClick={() => handleCreateClick()}
                    >
                            {create ? 'Sign in instead' : 'Create an account'}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default UserForm