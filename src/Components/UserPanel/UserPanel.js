import React from 'react';
import data from './notes';

import './UserPanel.css'

import NotesList from '../NotesList/NotesList.js';

const UserPanel = ({match}) => {
    const user = match.params.username;    
    return (
        <div>
            <div className='user'>
                {`Hello ${user}`}
            </div>
            <div className='notesList'>
                {data.notes.map((note) => (
                <NotesList key={note.id_note} note={note}/>
                ))}
            </div>
        </div>
    )
}

export default UserPanel;