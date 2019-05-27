import React, { useState,useEffect } from 'react';
import data from './notes';

import './UserPanel.css'

import NotesList from '../NotesList/NotesList.js';

const UserPanel = ({ match, history }) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    //const [notes, setNotes] = useState([])
    //const [style, setStyle] = useState('')
    const [disableTitle, setDisableTitle] = useState(false)
    const [disableContent, setDisableContent] = useState(false)

    useEffect(()=>{
        //fetch data on first render
    })

    const handleNoteClick = (id) => {
        // fetch data from database, specific note, by id
        const found = data.notes.find(note=>note.id_note===id)
        setTitle(found.title)
        setContent(found.content)
    }

    const handleNoteDel = (id) => {
        console.log('PURGE THE UNCLEAN', id)
    }

    const handleNoteSave = (e) => {
        e.preventDefault();
        // send data to database
    }

    const user = match.params.username;
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
                    {data.notes.map((note) => (
                        <NotesList
                            key={note.id_note}
                            note={note}
                            handleNoteClick={handleNoteClick}
                            handleNoteDel={handleNoteDel}
                        />
                    ))}
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
                        <select className='note-input'>
                            <option value='normal'>Normal</option>
                            <option value='important'>Important</option>
                        </select>
                        <input
                            className={`note-input-submit`}
                            type='submit'
                            name='create'
                            disabled={disableTitle||disableContent}/>
                        
                    </form>
                </div>
                <div style={{ width:'300px' }}/>
            </div>
        </div>
    )
}

export default UserPanel;