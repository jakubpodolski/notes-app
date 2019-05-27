import React from 'react'

import './Categories.css'

const Categories = ({ style, selectedStyle, setSelectedStyle }) => {
    return (
    <select className='note-input' value={selectedStyle} onChange={(e) => setSelectedStyle(e.target.value)}>
        {style.map((sty, id) => (
            <option key={id} value={sty.kategoria}>
                {sty.kategoria}
            </option>
        ))}
    </select>
    )
}

export default Categories