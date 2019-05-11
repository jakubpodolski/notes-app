import React, { useState,useEffect } from 'react';
import data from './notes';

import './UserPanel.css'

import NotesList from '../NotesList/NotesList.js';

const UserPanel = ({match, history}) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    //const [notes, setNotes] = useState([])
    //const [style, setStyle] = useState('')
    const [disable, setDisable] = useState(false)

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
        validator()
    }

    const validator = () => {
        console.log('t',title.length,'c', content.length)
        setDisable(title.length>25||content.length>250)
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
                    <form className='note-form' onSubmit={(e) => handleNoteSave(e)} autocomplete="off">
                        <input className={`note-input ${title.length>25}`} type='text' name='title' value={title} onChange={(e) => setTitle(e.target.value)}/>
                        <textarea className={`note-input ${content.length>250}`} cols="40" rows="5" type='text' name='content' value={content} onChange={(e) => setContent(e.target.value)}/>
                        <select className='note-input'>
                            <option value='normal'>Normal</option>
                            <option value='important'>Important</option>
                        </select>
                        <input className={`note-input-submit`} type='submit' name='create' disabled={disable}/>
                        
                    </form>
                </div>
                <div style={{ width:'200px' }}/>
            </div>
        </div>
    )
}

export default UserPanel;