import React from 'react';
import {Link} from 'react-router-dom'

const Menu = () => {
    return (
        <header>
            <ul>
                <Link to='/'><li>Home</li></Link>
                <Link to='/about'><li>About</li></Link>
                <Link to='/contact'><li>Contact</li></Link>
                <Link to='/videos'><li>Videos</li></Link>
            </ul>
        </header>
    )
}

export default Menu