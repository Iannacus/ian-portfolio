import React from 'react';
import BorderDivision from './BorderDivision';

function Title({ title }) {
    return (
        <>
            <BorderDivision />
            <div className='section-title'>
                <h1>{title}</h1>
            </div>
            <BorderDivision />
        </>
    )
}

export default Title;