import React from 'react';
import styles from './Module.module.css';

import closeIcon from '../../img/cancel.svg';

const Module = (props) => {
    return (
        <div className={styles.module}>
            <div className={styles.header}>
                <h1>The Last of Us Part II {props.edition}</h1>
                <img src={closeIcon} 
                     alt="Close Icon" 
                     className={styles.closeIcon}
                />
            </div>
            <ul className={styles.list}>
                <li className={styles.listItem}>
                    <img src="#" alt="PlayStation Logo"/>
                    <h5 className={styles.price}>{props.price}</h5>
                    <h5 className={styles.status}>Pre-Order</h5>
                    <a href="#" className={styles.button}>Buy</a>
                </li>
                <li className={styles.listItem}>
                    <img src="#" alt="PlayStation Logo"/>
                    <h5 className={styles.price}>{props.price}</h5>
                    <h5 className={styles.status}>Pre-Order</h5>
                    <a href="#" className={styles.button}>Buy</a>
                </li>
                <li className={styles.listItem}>
                    <img src="#" alt="PlayStation Logo"/>
                    <h5 className={styles.price}>{props.price}</h5>
                    <h5 className={styles.status}>Pre-Order</h5>
                    <a href="#" className={styles.button}>Buy</a>
                </li>
                <li className={styles.listItem}>
                    <img src="#" alt="PlayStation Logo"/>
                    <h5 className={styles.price}>{props.price}</h5>
                    <h5 className={styles.status}>Pre-Order</h5>
                    <a href="#" className={styles.button}>Buy</a>
                </li>
                <li className={styles.listItem}>
                    <img src="#" alt="PlayStation Logo"/>
                    <h5 className={styles.price}>{props.price}</h5>
                    <h5 className={styles.status}>Pre-Order</h5>
                    <a href="#" className={styles.button}>Buy</a>
                </li>
            </ul>
            <div className={styles.footer}></div>
        </div>
    );
};

export default Module;