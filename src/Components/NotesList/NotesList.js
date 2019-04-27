import React from 'react';


const NotesList = ({note, handleNoteClick}) => {
    const {id_note, title, date, category} = note
    return (
        <div className={`${category}`}>
            <button onClick={() => handleNoteClick(id_note)}>{title}</button>
            <h6>{date}</h6>
            <button>del</button>
            <button>edit</button>
        </div>
    )
};

export default NotesList;