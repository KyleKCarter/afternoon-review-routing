import React from 'react';
import {Link} from 'react-router-dom'

const Menu = () => {
    return (
        <header>
            <ul style={{listStyle: 'none', display: 'flex', justifyContent: 'space-evenly'}}>
                <Link to='/' style={{color: 'grey', textDecoration: 'none'}}><li>Home</li></Link>
                <Link to='/about' style={{color: 'grey', textDecoration: 'none'}}><li>About</li></Link>
                <Link to='/contact' style={{color: 'grey', textDecoration: 'none'}}><li>Contact</li></Link>
                <Link to='/videos' style={{color: 'grey', textDecoration: 'none'}}><li>Videos</li></Link>
            </ul>
        </header>
    )
}

export default Menu