import React from 'react';


const NotesList = ({note}) => {
    const {title, date, category} = note
    return (
        <div>
            <h3>{title}</h3>
            <h6>{date}</h6>
            {category}
        </div>
    )
};

export default NotesList;