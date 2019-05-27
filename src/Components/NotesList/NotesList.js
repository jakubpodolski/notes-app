import React from 'react';
import PropTypes from 'prop-types';
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

NotesList.propTypes = {
    note: PropTypes.object.isRequired,
    handleNoteClick: PropTypes.func.isRequired,
    handleNoteDel: PropTypes.func.isRequired,
};

/* 
normal - no style
imporant - red 
private - blue
life - green 
work - black
*/