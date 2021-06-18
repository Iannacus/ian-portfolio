import React from 'react';
import Bubble from './Bubble';

function Bubbles() {
    return (
        <div className='bubbles_area'>
            <Bubble pos={'bubble1'} />
            <Bubble pos={'bubble2'} />
            <Bubble pos={'bubble3'} />
            <Bubble pos={'bubble4'} />
        </div>
    )
}

export default Bubbles;