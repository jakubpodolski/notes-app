import React, { useState,useEffect } from 'react';
import data from './notes';

import './UserPanel.css'

import NotesList from '../NotesList/NotesList.js';

const UserPanel = ({match, history}) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    //const [notes, setNotes] = useState([])
    //const [style, setStyle] = useState('')

    useEffect(()=>{

    })

    const handleNoteClick = (id) => {
        // fetch data from database, specific note, by id
        const found = data.notes.find(note=>note.id_note===id)
        setTitle(found.title)
        setContent(found.content)
    }

    const handleNoteSave = (e) => {
        // send data to database
        e.preventDefault();
    }

    const user = match.params.username;    
    return (
        <div>
            <div className='user'>
                <h1 className='user-name'>{`Hello ${user}`}</h1>
                <button className='user-logOut' onClick={() => history.push('/')}>
                    Log out
                </button>
            </div>
            <div className='panel'>
                <div className='notes-list'>
                    {data.notes.map((note) => (
                        <NotesList
                            key={note.id_note}
                            note={note}
                            handleNoteClick={handleNoteClick}
                        />
                    ))}
                </div>
                <form className='note-wrapper' onSubmit={(e) => handleNoteSave(e)}>
                    <input className='note-input' type='text' name='title' value={title} onChange={(e) => setTitle(e.target.value)}/>
                    <textarea className='note-input' cols="40" rows="5" type='text' name='content' value={content} onChange={(e) => setContent(e.target.value)}/>
                    <select>
                        <option value='normal'>Normal</option>
                        <option value='important'>Important</option>
                    </select>
                    <input type='submit' name='create'/>
                </form>
            </div>
        </div>
    )
}

export default UserPanel;