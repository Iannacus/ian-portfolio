import React from 'react';

function Container(props) {
    return (
        <div className='page_container'>
            {props.children}
        </div>
    )
}

export default Container;