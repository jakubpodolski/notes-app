import React, { useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import {
    apiNoteURL,
    apiUserURL,
    apiCategoriesURL,
    noteUpdate,
    noteSave,
    noteDelete
} from '../../Helper'
import NotesList from '../NotesList/NotesList.js'
import Categories from '../Categories/Categories'

import './UserPanel.css'

const UserPanel = ({ match, history }) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [notes, setNotes] = useState([])
    const [style, setStyle] = useState([])
    const [selectedStyle, setSelectedStyle] = useState('normal')
    const [disableTitle, setDisableTitle] = useState(false)
    const [disableContent, setDisableContent] = useState(false)
    const [noteID, setNoteID] = useState(0);
    const [userID, setUserID] = useState(null)
    const user = match.params.username;
    
    useEffect(()=>{
        const userURL = apiUserURL + `read_user.php?nazwa_uzytkownika=${user}`
        const noteURL = apiNoteURL + 'read_user.php?id='

        fetch(userURL).then(res => res.json())
                        .then(res => {
                            setUserID(res.id_uzytkownika)
                            return fetch(noteURL+res.id_uzytkownika)
                        })
                            .then(res => res.json())
                            .then(res => setNotes(res ))
                            .then(() => fetch(apiCategoriesURL))
                                .then(res => res.json()).then(res => setStyle(res))
    }, [])

    const handleNoteClick = (id) => {
        const found = notes.find(note=>note.id_notatki===id)
        setTitle(found.tytul_notatki)
        setContent(found.tresc_notatki)
        setNoteID(id)
        setSelectedStyle(found.kategoria)
    }

    const handleNoteDel = (id) => {
        fetch(apiNoteURL+'delete.php', noteDelete(id)).then(() => window.location.reload())
    }

    const handleNoteSave = (e) => {
        e.preventDefault();
        if (notes.find(note=>note.id_notatki===noteID)) {
            fetch(apiNoteURL+'update.php', noteUpdate(noteID, userID, content, title, selectedStyle)).then(() => window.location.reload())
        } else {
            fetch(apiNoteURL+'create.php', noteSave(userID, content, title, selectedStyle)).then(() => window.location.reload())
        }
    }
    
    return (
        <div>
            <div className='user'>
                <div>
                    <h1 className='user-name'>{`Hello ${user}`}</h1>
                </div>
                <div>
                    <button className='user-logOut' onClick={() => history.push('/')}>
                        Log out
                    </button>
                </div>
            </div>
            <div className='panel'>
                <div className='notes-list'>
                    {
                    notes.length ? notes.map((note) => (
                        <NotesList
                            key={note.id_notatki}
                            note={note}
                            handleNoteClick={handleNoteClick}
                            handleNoteDel={handleNoteDel}
                        /> )) : 
                        <div className='notes-empty'>
                            <p>Your notes will be here</p>
                        </div>
                    }
                </div>
                <div className='note-wrapper'>
                    <form className='note-form' onSubmit={(e) => handleNoteSave(e)} autoComplete="off">
                        <input
                            className={`note-input ${disableTitle}`}
                            type='text' name='title'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            onBlur={() => setDisableTitle(title.length>25)}
                        />
                        {disableTitle ? <p className='disable'>Title should have less than 25 charcters</p> : null}
                        <textarea
                            className={`note-input ${disableContent}`}
                            cols="40" rows="5" type='text'
                            name='content'
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            onBlur={() => setDisableContent(content.length>250)}
                        />
                        {disableContent ? <p className='disable'>Content should have less than 250 charcters</p> : null}
                        <Categories style={style} selectedStyle={selectedStyle} setSelectedStyle={setSelectedStyle}/>
                        <input
                            className={`note-input-submit`}
                            type='submit'
                            name='create'
                            disabled={disableTitle||disableContent}/>
                    <button className='user-logOut' onClick={(e) => {setTitle(''); setContent(''); setNoteID(0); e.preventDefault()}}>
                        New note
                    </button>
                    </form>
                </div>
                <div style={{ width:'300px' }}/>
            </div>
        </div>
    )
}

export default UserPanel;

UserPanel.propTypes = { 
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    match: PropTypes.shape({
        params: PropTypes.shape({
            username: PropTypes.string.isRequired
        })
    }),
}