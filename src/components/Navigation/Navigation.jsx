import React from 'react';
import styles from './Navigation.module.css';

import logo from '../../img/navigation-logo.png';
import menuIcon from '../../img/menu.svg';
import closeIcon from '../../img/cancel.svg';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.nav = React.createRef();
        this.navList = React.createRef();
        this.navIcon = React.createRef();
        this.mobileNav = React.createRef();
    }

    componentDidMount() {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 50 && window.innerWidth > 925) {
                this.nav.current.style.backgroundColor = "rgba(0,0,0,.85)";
                this.navIcon.current.style.opacity = "1";
            } else {
                this.nav.current.style.backgroundColor = "transparent";
                this.navIcon.current.style.opacity = "0";
            }
        });

        window.onresize = () => {
            if(window.innerWidth > 925) {
                this.navList.current.style.display = "flex";
                this.mobileNav.current.src = menuIcon;
            } else {
                this.navList.current.style.display = "none";
                this.mobileNav.current.src = menuIcon;
            }
        };
    }

    mobileNavController = () => {
        if(this.navList.current.style.display === "" || this.navList.current.style.display === "none") {
            this.navList.current.style.display = "flex";
            this.mobileNav.current.src = closeIcon;
        } else {
            this.navList.current.style.display = "none";
            this.mobileNav.current.src = menuIcon;
        }
    }

    render() {
        return (
            <nav className={styles.navigation} ref={this.nav}>
                <img src={logo} 
                     alt="Last of Us 2 Icon" 
                     className={styles.navigation__icon}
                     ref={this.navIcon}
                />
                <ul className={styles.navigation__list} ref={this.navList}>
                    <li className={styles.navigation__listItem}>
                        <a href="#about">ABOUT</a>
                    </li>
                    <li className={styles.navigation__listItem}>
                        <a href="#screenshots">MEDIA</a>
                    </li>
                    <li className={styles.navigation__listItem}>
                        <a href="#news">NEWS</a>
                    </li>
                    <li className={styles.navigation__listItem}>
                        <a href="#shop">PRE ORDER</a>
                    </li>
                </ul>
                <img src={menuIcon} 
                     alt="Mobile Nav Icon" 
                     className={styles.mobileNav}
                     onClick={this.mobileNavController}
                     ref={this.mobileNav}
                />
            </nav>
        );
    }
};

export default Navigation;