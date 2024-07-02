import React from 'react';
import { Link } from 'react-router-dom';

function Logout(props) {
    return (
        <div>
            <div className="main">
            <h1>yes you are logout</h1>
            <Link to={"/login"}>again visit site click here</Link>
        </div></div>
    );
}

export default Logout;