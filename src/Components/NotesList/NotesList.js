import React from 'react';
import './NotesList.css'

const NotesList = ({note, handleNoteClick, handleNoteDel}) => {
    const {id_note, title, date, category} = note
    return (
        <div className='notes-list-wrapper'>
            <button className={`${category} category`}/>
            <button className='note-list-button' onClick={() => handleNoteClick(id_note)}>
                <h4 className='note-list-title'>{title}</h4>
            </button>
            <button className='note-list-button del' onClick={() => handleNoteDel(id_note)}>x</button>
            <p className='note-list-date'>{date}</p>
        </div>
    )
};

export default NotesList;

/* 
normal - no style
imporant - red 
private - blue
life - green 
work - black
*/