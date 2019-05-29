import React, { useState } from 'react';
import md5 from 'js-md5';
import { apiUserURL, userPost } from '../../Helper';
import './UserForm.css'

const UserForm = ({create, handleStatusClick, history}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passCheck, setPassCheck] = useState('');
    const [disable, setDisable] = useState(false)

    const handleForm = (e) => {
        e.preventDefault()
        create ? userCreate(username,password,passCheck) : userLogin(username,password)
    };

    const userLogin = (user) => {
        const url = apiUserURL + `get_passwd.php?nazwa_uzytkownika=${user}`
        const pass = md5(password);
        fetch(url)
            .then(res => res.json())
            .then(res => {
                res.password === pass ? history.push(`/user/${username}`) : setDisable(true)
            })
    };

    const userCreate = (user,pass) => {        
        fetch((apiUserURL+'create.php'), userPost(user,pass))
            .then(res => res.status).then(() => history.push(`/user/${username}`))
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
                    className={`input-userLogin ${disable}`}
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onBlur={() => setDisable(false)}
                    name='password'
                    placeholder='Password'/>
                    {disable ? <p className='disable'>Wrong password</p> : null}
                {create ? <input
                            className={`input-userLogin ${disable}`}
                            type='password'
                            value={passCheck}
                            onChange={(e) => setPassCheck(e.target.value)}
                            name='repeate_password'
                            placeholder='Repeat password'
                            onBlur={() => setDisable(password !== passCheck)}
                            /> : null}
                {disable && create ? <p className='disable'>Passwords do not match</p> : null}
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
