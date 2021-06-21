import React from 'react';

function TimelineItem({ year, company, title, content }) {
    return (
        <div className='timeline-item'>
            <header>
                <h4 className='year'>{year}</h4>
                <p className='gray'>{company}</p>
            </header>
            <div className='timeline-content'>
                <h3>{title}</h3>
                <p>{content}</p>
            </div>

        </div>
    )
}

export default TimelineItem;