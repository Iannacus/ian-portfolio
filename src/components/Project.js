import React from 'react';
import Button from './Button';

function Project({ title, img, description, applink, repolink }) {

    return (
        <div className='project_card'>
            <div className='project' style={{ backgroundImage: `url(${img})` }}>
                <div className='project_info'>
                    <h4>{title}</h4>
                    <div className='buttons'>
                        <Button
                            text='Online'
                            link={applink}
                        />
                        <Button
                            text='GitHub'
                            link={repolink}
                        />
                    </div>
                </div>
            </div>
            <p>{description}</p>
        </div>
    )
}

export default Project;