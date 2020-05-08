import React from 'react';
import styles from './Info.module.css';

const Info = () => {
    return (
        <div className={styles.info}>
            <h1>A GROUND-BREAKING EXPERIENCE</h1>
            <ul className={styles.info__list}>
                <li className={styles.info__listItem}>
                    <img src="#" alt="Last of Us 2 Image"/>
                    <h3>A COMPLEX AND EMOTIONAL STORY</h3>
                    <p>Experience the escalating moral conflicts created by Ellie’s relentless pursuit of vengeance. The cycle of violence left in her wake will challenge your notions of right versus wrong, good versus evil, and hero versus villain.</p>
                </li>
                <li className={styles.info__listItem}>
                    <img src="#" alt="Last of Us 2 Image"/>
                    <h3>TENSE AND DESPERATE ACTION-SURVIVAL GAMEPLAY</h3>
                    <p>New and evolved gameplay systems deliver upon the life-or-death stakes of Ellie’s journey through the hostile world. Feel her desperate struggle for survival through improved features such as high-intensity melee combat, fluid movement, and dynamic stealth. A broad variety of weapons, crafting items, skills, and upgrades allows you to personalize Ellie’s capabilities to your play style.</p>
                </li>
                <li className={styles.info__listItem}>
                    <img src="#" alt="Last of Us 2 Image"/>
                    <h3>A BEAUTIFUL YET DANGEROUS WORLD</h3>
                    <p>Set out on Ellie’s journey, taking her from the peaceful mountains and forests of Jackson to the lush, overgrown ruins of greater Seattle. Encounter new survivor groups, unfamiliar and treacherous environments, and terrifying evolutions of the infected. Brought to life by the latest iteration of the Naughty Dog engine, the deadly characters and world are more realistic and meticulously detailed than ever before.</p>
                </li>
            </ul>
        </div>
    );
};

export default Info;