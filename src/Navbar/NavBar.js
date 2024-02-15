import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    return (
        <nav className="navbar">
            {/* Logo linking to home page */}
            <Link className="logo" to="/">ConnectAll</Link>
            {/* Navigation links */}
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/create">Create Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
