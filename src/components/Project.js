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
                            text='view online'
                            link={applink}
                        />
                        <Button
                            text='Code on GitHub'
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