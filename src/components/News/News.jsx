import React from 'react';
import styles from './News.module.css';

import image1 from '../../img/news-image1.png';
import image2 from '../../img/news-image2.png';

const News = () => {
    return (
        <div className={styles.news}>
            <div className={styles.container}>
                <h3>STAY UP TO DATE</h3>
                <h1>LATEST NEWS</h1>
                <ul className={styles.list} id="news">
                    <li className={styles.listItem}>    
                        <img src={image1} alt="Last of Us 2 Image"/>
                        <a href="https://www.naughtydog.com/blog/the_last_of_us_part_ii_ellie_edition_restock_new_key_art_and_more" target="_blank">THE LAST OF US PART II ELLIE EDITION</a>
                        <span>February 11th, 2020 | Arne Meyer</span>
                    </li>
                    <li className={styles.listItem}>
                        <img src={image2} alt="Last of Us 2 Image"/>
                        <a href="https://www.naughtydog.com/blog/the_last_of_us_part_ii_gameplay_revealed" target="_blank">THE LAST OF US PART II GAMEPLAY REVEALED</a>
                        <span>June 11th, 2018 | Neil Druckmann</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default News;