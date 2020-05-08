import React from 'react';
import styles from './Video.module.css';

const Video = () => {
    return (
        <div className={styles.video}>
            <div className={styles.container}>
                <h1>LATEST VIDEOS</h1>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Gse0LU73G7c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    );
};

export default Video;