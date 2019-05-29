import React from 'react';
import './NotesList.css'

const NotesList = ({note, handleNoteClick, handleNoteDel}) => {
    const {id_notatki, tytul_notatki, data_stworzenia, kategoria} = note
    return (
        <div className='notes-list-wrapper'>
            <button className={`${kategoria} category`}/>
            <button className='note-list-button' onClick={() => handleNoteClick(id_notatki)}>
                <h4 className='note-list-title'>{tytul_notatki}</h4>
            </button>
            <button className='note-list-button del' onClick={() => handleNoteDel(id_notatki)}>x</button>
            <p className='note-list-date'>{data_stworzenia}</p>
        </div>
    )
};

export default NotesList;
