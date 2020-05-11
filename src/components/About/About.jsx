import React from 'react';
import styles from './About.module.css';

const About = () => {
    return (
        <div className={styles.about} id="about">
            <div className={styles.about__main}>
                <h1>THE LAST OF US PART II</h1>
                <p>Five years after their dangerous journey across the post-pandemic United States, Ellie and Joel have settled down in Jackson, Wyoming. Living amongst a thriving community of survivors has allowed them peace and stability, despite the constant threat of the infected and other, more desperate survivors.</p>
                <p>When a violent event disrupts that peace, Ellie embarks on a relentless journey to carry out justice and find closure. As she hunts those responsible one by one, she is confronted with the devastating physical and emotional repercussions of her actions.</p>
            </div>
        </div>
    );
}

export default About;