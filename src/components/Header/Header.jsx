import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <nav className="navigation">
                <img src="#" alt="Last of Us 2 Icon"/>
                <ul className="navigation__list">
                    <li className="navigation__listItem">
                        <a href="#">ABOUT</a>
                    </li>
                    <li className="navigation__listItem">
                        <a href="#">MEDIA</a>
                    </li>
                    <li className="navigation__listItem">
                        <a href="#">NEWS</a>
                    </li>
                    <li className="navigation__listItem">
                        <a href="#">PRE ORDER</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;