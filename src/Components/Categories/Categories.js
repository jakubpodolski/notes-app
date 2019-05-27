import React from 'react'

import './Categories.css'

const Categories = ({ style }) => {
    return (
    <select className='note-input'>
        {style.map((sty, id) => (
            <option key={id} value={sty.kategoria}>
                {sty.kategoria}
            </option>
        ))}
    </select>
    )
}

export default Categories