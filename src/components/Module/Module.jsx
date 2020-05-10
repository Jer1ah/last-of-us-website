import React from 'react';
import styles from './Module.module.css';

import closeIcon from '../../img/cancel.svg';
import playstationIcon from '../../img/playstation.png';
import walmartIcon from '../../img/walmart.png';
import amazonIcon from '../../img/amazon.png';
import targetIcon from '../../img/target.png';
import gamestopIcon from '../../img/gamestop.png';

const Module = (props) => {
    const onToggle = () => {
        props.toggle(false);
    }

    return (
        <div className={styles.module}>
            <div className={styles.header}>
                <h1>The Last of Us Part II {props.edition}</h1>
                <img src={closeIcon} 
                     alt="Close Icon" 
                     className={styles.closeIcon}
                     onClick={onToggle}
                />
            </div>
            <ul className={styles.list}>
                <li className={styles.listItem}>
                    <img src={playstationIcon} alt="PlayStation Logo"/>
                    <h5 className={styles.price}>${props.price}</h5>
                    <h5 className={styles.status}>Pre-Order</h5>
                    <a href={props.playstation} 
                       className={styles.button}
                       target="_blank"
                    >Buy</a>
                </li>
                <li className={styles.listItem}>
                    <img src={walmartIcon} alt="Walmart Logo"/>
                    <h5 className={styles.price}>${props.price}</h5>
                    <h5 className={styles.status}>Pre-Order</h5>
                    <a href={props.walmart} 
                       className={styles.button}
                       target="_blank"
                    >Buy</a>
                </li>
                <li className={styles.listItem}>
                    <img src={targetIcon} alt="Target Logo"/>
                    <h5 className={styles.price}>${props.price}</h5>
                    <h5 className={styles.status}>Pre-Order</h5>
                    <a href={props.target} 
                       className={styles.button}
                       target="_blank"
                    >Buy</a>
                </li>
                <li className={styles.listItem}>
                    <img src={amazonIcon} alt="Amazon Logo"/>
                    <h5 className={styles.price}>${props.price}</h5>
                    <h5 className={styles.status}>Pre-Order</h5>
                    <a href={props.amazon} 
                       className={styles.button}
                       target="_blank"
                    >Buy</a>
                </li>
                <li className={styles.listItem}>
                    <img src={gamestopIcon} alt="GameStop Logo"/>
                    <h5 className={styles.price}>${props.price}</h5>
                    <h5 className={styles.status}>Pre-Order</h5>
                    <a href={props.gamestop} 
                       className={styles.button}
                       target="_blank"
                    >Buy</a>
                </li>
            </ul>
            <div className={styles.footer}></div>
        </div>
    );
};

export default Module;