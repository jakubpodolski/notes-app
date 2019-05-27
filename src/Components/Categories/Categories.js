import React from 'react'

import {apiCategoriesURL} from '../../Helper';

const Categories = () => {
    const style = Promise.all(fetch(apiCategoriesURL).then(res => res.json()).then(res => res))
    console.log(style)
    return (
    <select className='note-input'>
        {style.map((sty, id) => (
            console.log(id, sty.kategoria)
        ))}
    </select>
    )
}

export default Categories