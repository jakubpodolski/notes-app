import React, { useState } from 'react';
import api from '../../Helper';
import './UserForm.css'

const UserForm = ({create, handleStatusClick, history}) => {

    const [username, setUsername] = useState('test');
    const [password, setPassword] = useState('dupa');
    const [passCheck, setPassCheck] = useState('dupa');
    const [disable, setDisable] = useState(false)

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
        console.log('create')
        const user = {
            method: 'POST',
            header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nazwa_uzytkownika: u,
                password: p,
            })
        }
        fetch(api, user)
            .then(res => console.log(res))
    };


    return (
        <div className={create ? 'div-wrapper-userCreate' : 'div-wrapper-userLogin'}>
            <h2>{create ? 'Create account' : 'Log In'}</h2>
            <form className='form-userLogin' onSubmit={(event) => handleForm(event)}>
                <input
                    className='input-userLogin'
                    type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    name='username'
                    placeholder='User'/>
                <input 
                    className='input-userLogin'
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name='password'
                    placeholder='Password'/>
                {create ? <input
                            className={`input-userLogin ${disable}`}
                            type='password'
                            value={passCheck}
                            onChange={(e) => setPassCheck(e.target.value)}
                            name='repeate_password'
                            placeholder='Repeat password'
                            onBlur={() => setDisable(password !== passCheck)}
                            /> : null}
                {disable ? <p className='disable'>Passwords do not match</p> : null    }
                <div>
                    <input 
                        className='button-userLogin'
                        type='submit'
                        value={ create ? 'Create' : 'Log in'}
                        disabled={disable}
                        onClick={() => 'Create_user_Function'}
                    />
                    <button 
                        type='button'
                        className='button-create'
                        onClick={() => {handleStatusClick(); setDisable(false)}}
                    >
                            {create ? 'Sign in instead' : 'Create an account'}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default UserForm