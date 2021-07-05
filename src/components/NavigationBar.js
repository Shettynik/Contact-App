import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2">
            <Link to="/" className="ml-5 navbar-brand">Contact App</Link>
            <ul>
                <li></li>
            </ul>
        </nav>
    )
}

export default NavigationBar
