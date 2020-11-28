import React from 'react';
import { Link } from 'react-router-dom';

const HeaderStyle = {
    background: 'teal',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

function header() {
    return (
        <header style={HeaderStyle}>
            <h1>PENG TODO LISTS</h1>
            <Link to="/">Home</Link> | <Link to="/about">About</Link>
        </header>
    )
}

export default header
