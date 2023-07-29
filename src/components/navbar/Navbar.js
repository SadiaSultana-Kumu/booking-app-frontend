import React from 'react';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navContainer">
                <span className="logo">shortTrip.com</span>
                <div className="navItems">
                    <button className="login-register-button">Register</button>
                    <button className="login-register-button">Login</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;