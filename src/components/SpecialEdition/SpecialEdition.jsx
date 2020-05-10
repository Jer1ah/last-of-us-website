import React, { useState } from 'react';
import styles from './SpecialEdition.module.css';
import image from '../../img/special-edition.png';

import Module from '../Module/Module';

const SpecialEdition = () => {
    const [moduleStatus, toggleModule] = useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.image}> 
                <img src={image} alt="Last of Us 2 Game Image"/>
            </div>
            <div className={styles.info}>
                <h3>SPECIAL EDITION</h3>
                <a href="#" 
                   className={styles.preOrderButton}
                   onClick={(event) => {
                       event.preventDefault();
                       toggleModule(!moduleStatus);
                    }}
                >PRE ORDER</a>
                <p>For Digital Pre-order instantly recieve a The Last of Us Part II PSN Avatar featuring Ellie's distinct tattoo. Only available during the pre-order period period for The Last of Us Part II.</p>
                <p>Pre-order and recieve the following special in-game items at launch.</p>
                <ul className={styles.info__list}>
                    <li className={styles.info__listItem}>
                        <p>Ammo Capacity Upgrade: Instantly unlock an ammo capacity upgrade for Ellie's pistol.</p>
                    </li>
                    <li className={styles.info__listItem}>
                        <p>Crafting Training Manual: Instantly unlock the Crafting Training Manual, which provides access to new crafting recipes and upgrades.</p>
                    </li>
                </ul>
                <span>*Supplements required to unlock recipes, skills and upgrades.</span>
            </div>
            {moduleStatus ? <Module 
                edition="Special Edition"
                price="79.99"
                toggle={toggleModule}
                /> : null}
        </div>
    );
};

export default SpecialEdition;