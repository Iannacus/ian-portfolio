import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const [animate, setAnimate] = useState(false);
    const [animateStyle, setAnimateStyle] = useState('');
    const [aboutActive, setAboutActive] = useState('gray');
    const [portfolioActive, setPortfolioActive] = useState('gray');

    const location = useLocation();

    useEffect(() => {
        if (animate) {
            setAnimateStyle('animation desktop')
        } else {
            setAnimateStyle('desktop')
        }
    }, [animate, animateStyle]);

    useEffect(() => {
        location.pathname === '/about' ? setAboutActive('gray active') : setAboutActive('gray');
        location.pathname === '/portfolio' ? setPortfolioActive('gray active') : setPortfolioActive('gray');
        //slocation.pathname === '/contact' ? setContactActive('gray active') : setContactActive('gray');
    }, [location]);



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
                        <Link
                            className={aboutActive}
                            to='/about'>
                            About Me
                        </Link>

                        <Link
                            className={portfolioActive}
                            to='/portfolio'>
                            Portafolio
                        </Link>
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