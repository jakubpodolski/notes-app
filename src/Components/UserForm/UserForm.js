import React, { useState } from 'react';
import './UserForm.css'

const UserForm = ({create,handleCreateClick, history}) => {

    const [ username, setUsername ] = useState('test');
    const [ password, setPassword ] = useState('123qwe');
    const [ passCheck, setPassCheck ] = useState('');
    

    const handleForm = (e) => {
        e.preventDefault()
        create ? userCreate(username,password,passCheck) : userLogin(username,password)
    };

    const userLogin = (u,p) => {
        // fetch data form DataBase, check if password passed is equal to password fetched
        console.log('Login')
        return p === '123qwe' ? history.push(`/user/${username}`) : console.log('wrong pass'); 
    };

    const userCreate = (u,p,pc) => {
        // create user in DataBase
        console.log('create')
    };


    return (
        <div className={create ? 'div-wrapper-userCreate' : 'div-wrapper-userLogin'}>
            <h2>{create ? 'Create account' : 'Log In'}</h2>
            <form className='form-userLogin' onSubmit={(event) => handleForm(event)}>
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
                            placeholder='Repeat password'
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