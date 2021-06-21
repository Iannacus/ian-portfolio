import React from 'react';

function Skill({ skillName, skillPercentage }) {

    return (
        <div className='skill_item'>
            <div className='skill_item-header'>
                <h4>{skillName}</h4>
                <p>{skillPercentage}</p>
            </div>
            <div className='skill_item-bar'>
                <div className='skill_item-fillbar' style={{ width: `${skillPercentage}` }}>
                </div>
            </div>
        </div>
    )
}

export default Skill;