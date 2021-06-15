import React from 'react'
import {Link} from 'react-router-dom';
import './styles/Appbar.css';
function Appbar() {
    return (
        <header id='app-bar'>
            <nav className='navbar'>
                <ul id='nav-links'>
                    <Link to='/'>Home</Link>
                    <Link to='/signin'>Sign In</Link>
                    <Link to='/about'>About</Link>
                </ul>
            </nav>
        </header>
    )
}

export default Appbar
