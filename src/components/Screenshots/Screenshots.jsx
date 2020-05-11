import React from 'react';
import styles from './Screenshots.module.css';

import image1 from  '../../img/gallery-image1.png';
import image2 from  '../../img/gallery-image2.png';
import image3 from  '../../img/gallery-image3.png';
import image4 from  '../../img/gallery-image4.png';
import image5 from  '../../img/gallery-image5.png';
import image6 from  '../../img/gallery-image6.png';

const Screenshots = () => {
    return (
        <div className={styles.screenshots} id="screenshots">
            <div className={styles.container}>
                <h1>SCREENSHOTS</h1>
                <div className={styles.images__top}>
                    <div className={styles.mainImage}>
                        <img src={image1} alt="Last of Us 2 Image"/>
                    </div>
                    <div className={styles.asideImages}>
                        <div className={styles.asideImage}>
                            <img src={image2} alt="Last of Us 2 Image"/>
                        </div>
                        <div className={styles.asideImage}>
                            <img src={image3} alt="Last of Us 2 Image"/>
                        </div>
                    </div>
                </div>
                <div className={styles.images__bottom}>
                    <div className={styles.asideImages}>
                        <div className={styles.asideImage}>
                            <img src={image5} alt="Last of Us 2 Image"/>
                        </div>
                        <div className={styles.asideImage}>
                            <img src={image6} alt="Last of Us 2 Image"/>
                        </div>
                    </div>
                    <div className={styles.mainImage}>
                        <img src={image4} alt="Last of Us 2 Image"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Screenshots;