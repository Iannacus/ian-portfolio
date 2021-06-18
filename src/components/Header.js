import React from 'react';

function Header() {
    return (
        <header>
            <div className='header_content'>
                <div className='header_logo'>
                    <div className='header_logo-img'>IR</div>
                    <div className='header_logo-txt'>Ian <strong>Rosas</strong></div>
                </div>
                <nav>
                    <a className='gray' href='#'>About Me</a>
                    <a className='gray' href='#'>Resume</a>
                    <a className='gray' href='#'>Portfolio</a>
                    <a className='gray' href='#'>Contac Me</a>
                </nav>
            </div>
        </header>
    )
}

export default Header;