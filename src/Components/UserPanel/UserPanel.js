import React, { useState,useEffect } from 'react';
import data from './notes';

import './UserPanel.css'

import NotesList from '../NotesList/NotesList.js';

const UserPanel = ({match, history}) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [notes, setNotes] = useState([])
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
        e.priventDefault();
    }

    const user = match.params.username;    
    return (
        <div>
            <div className='user'>
                {`Hello ${user}`}
                <button onClick={() => history.push('/')}>
                    Log Out
                </button>
            </div>
            <div className='notes-list'>
                {data.notes.map((note) => (
                    <NotesList
                        key={note.id_note}
                        note={note}
                        handleNoteClick={handleNoteClick}
                    />
                ))}
            </div>
            <div className='note-wrapper'>
                <form>
                    <input type='text' name='title' value={title} onChange={(e) => setTitle(e.target.value)}/>
                    <input type='text' name='content' value={content} onChange={(e) => setContent(e.target.value)}/>
                    <select>
                        <option value='normal'>Normal</option>
                        <option value='important'>Important</option>
                    </select>
                    <input type='submit' name='create' onSubmit={(e) => handleNoteSave(e)}/>
                </form>
            </div>
        </div>
    )
}

export default UserPanel;