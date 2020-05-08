import React from 'react';
import styles from './Screenshots.module.css';

const Screenshots = () => {
    return (
        <div className={styles.container}>
            <h1>SCREENSHOTS</h1>
            <div className={styles.images__top}>
                <div className={styles.mainImage}>
                    <img src="#" alt="Last of Us 2 Image"/>
                </div>
                <div className={styles.asideImages}>
                    <div className={styles.asideImage}>
                        <img src="#" alt="Last of Us 2 Image"/>
                    </div>
                    <div className={styles.asideImage}>
                        <img src="#" alt="Last of Us 2 Image"/>
                    </div>
                </div>
            </div>
            <div className={styles.images__bottom}>
                <div className={styles.mainImage}>
                    <img src="#" alt="Last of Us 2 Image"/>
                </div>
                <div className={styles.asideImages}>
                    <div className={styles.asideImage}>
                        <img src="#" alt="Last of Us 2 Image"/>
                    </div>
                    <div className={styles.asideImage}>
                        <img src="#" alt="Last of Us 2 Image"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Screenshots;