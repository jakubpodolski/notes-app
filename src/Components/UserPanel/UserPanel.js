import React from 'react';
import data from './notes';
import NotesList from '../NotesList/NotesList.js';

const UserPanel = ({match}) => {
    const user = match.params.username;
    console.log(user);

    
    return (
        <div style={{ backgroundColor: 'red' }}>
            {`Hello ${match.params.username}`}
            <div>
                {data.notes.map((note) => (
                   <NotesList key={note.id_note} note={note}/>
                ))}
            </div>
        </div>
    )
}

export default UserPanel;