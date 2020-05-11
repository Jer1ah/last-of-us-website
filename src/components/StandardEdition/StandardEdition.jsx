import React, { useState } from 'react';
import styles from './StandardEdition.module.css';
import image from '../../img/standard-edition.jpg';

import Module from '../Module/Module';

const StandardEdition = () => {
    const [moduleStatus, toggleModule] = useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.image}> 
                <img src={image} alt="Last of Us 2 Game Image"/>
            </div>
            <div className={styles.info}>
                <h3>STANDARD EDITION</h3>
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
                edition="Standard Edition"
                price="59.99"
                playstation="https://store.playstation.com/en-us/product/UP9000-CUSA07820_00-THELASTOFUS2STND?emcid=se-pi-239770&state=returning&error=login_required&error_code=4165&error_description=User+is+not+authenticated&no_captcha=false"
                walmart="https://www.walmart.com/ip/The-Last-of-Us-Part-II-Sony-PlayStation-4-711719519102/839659063"
                target="https://www.target.com/p/the-last-of-us-part-ii-playstation-4/-/A-78382925"
                amazon="https://www.amazon.com/Last-Us-Part-II-PlayStation-4/dp/B07DJRFSDF/ref=sr_1_1?crid=3JIJLC7KWEC84&dchild=1&keywords=last+of+us+2&qid=1589161346&sprefix=last+of+us+%2Caps%2C209&sr=8-1"
                gamestop="https://www.gamestop.com/video-games/playstation-4/games/products/the-last-of-us-part-ii/11097389.html"
                toggle={toggleModule}
                /> : null}
        </div>
    );
};

export default StandardEdition;