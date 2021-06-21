import React from 'react'

function Button({ text, link }) {
    return (
        <a href={link} target='blank'>
            <button className='btn'>
                {text}
            </button>
        </a>

    )
}

export default Button;