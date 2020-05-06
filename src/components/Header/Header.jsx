import React from 'react';
import styles from './Header.module.css';

import logo from '../../img/header-image.png';
import Navigation from '../Navigation/Navigation';

const Header = () => {
    return (
        <header className={styles.header}>
            <Navigation />
            <div className={styles.header__heading}>
                <img src={logo} alt="Last of Us 2 Logo"/>
                <h3>AVAILABLE 06.19.2020</h3>
                <div className={styles.buttonsContainer}>
                    <a href="#" className={styles.preOrderButton}>PRE ORDER</a>
                    <a href="#" className={styles.trailerButton}>WATCH TRAILER</a>
                </div>
            </div>
        </header>
    );
};

export default Header;