import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const [animate, setAnimate] = useState(false);
    const [animateStyle, setAnimateStyle] = useState('');

    useEffect(() => {
        if (animate) {
            setAnimateStyle('animation desktop')
        } else {
            setAnimateStyle('desktop')
        }
    }, [animate, animateStyle])


    return (
        <header>
            <div className='header_content'>
                <div className='header_logo'>
                    <Link to='/'>
                        <div className='header_logo-img'>IR</div>
                    </Link>
                    <Link to='/'>
                        <div className='header_logo-txt'>Ian <strong>Rosas</strong></div>
                    </Link>
                </div>
                <nav className='hamburguer'>
                    <div className={animateStyle}>
                        <Link className='gray' to='/about'>About Me</Link>
                        <Link className='gray' to='/portfolio'>Portafolio</Link>
                        <a className='gray' href='https://ianrosas.netlify.app'>Contac Me</a>
                    </div>
                    <i onClick={(e) => {
                        animate ? setAnimate(false) : setAnimate(true);
                    }}
                        className="fas fa-bars mobile"></i>
                </nav>
            </div>
        </header>
    )
}

export default Header;