import React from 'react';
import styles from './Navigation.module.css';

import logo from '../../img/navigation-logo.png';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.nav = React.createRef();
        this.navIcon = React.createRef();
    }

    componentDidMount() {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 50) {
                this.nav.current.style.backgroundColor = "rgba(0,0,0,.85)";
                this.navIcon.current.style.opacity = "1";
            } else {
                this.nav.current.style.backgroundColor = "transparent";
                this.navIcon.current.style.opacity = "0";
            }
        });
    }

    render() {
        return (
            <nav className={styles.navigation} ref={this.nav}>
                <img src={logo} 
                     alt="Last of Us 2 Icon" 
                     className={styles.navigation__icon}
                     ref={this.navIcon}
                />
                <ul className={styles.navigation__list}>
                    <li className={styles.navigation__listItem}>
                        <a href="#">ABOUT</a>
                    </li>
                    <li className={styles.navigation__listItem}>
                        <a href="#">MEDIA</a>
                    </li>
                    <li className={styles.navigation__listItem}>
                        <a href="#">NEWS</a>
                    </li>
                    <li className={styles.navigation__listItem}>
                        <a href="#">PRE ORDER</a>
                    </li>
                </ul>
            </nav>
        );
    }
};

export default Navigation;