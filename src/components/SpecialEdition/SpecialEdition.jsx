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
                playstation="https://direct.playstation.com/en-us/games/game/the-last-of-us-part-ii-special-edition-ps4.3004826"
                walmart="https://www.walmart.com/ip/The-Last-of-Us-Part-II-Special-Edition-Sony-Playstation-4/549218110?irgwc=1&sourceid=imp_WqwRZUVAKxyJWpowUx0Mo3Y3Ukiz%3A80ONTYt3w0&veh=aff&wmlspartner=imp_78091&clickid=WqwRZUVAKxyJWpowUx0Mo3Y3Ukiz%3A80ONTYt3w0&sharedid="
                gamestop="https://www.gamestop.com/video-games/playstation-4/games/products/the-last-of-us-part-ii-special-edition/11097390.html?utm_source=rakutenls&utm_medium=affiliate&utm_content=www.PriceSpider.com&utm_campaign=10&utm_kxconfid=tebx5rmj3&cid=afl_10000087&affID=77777&sourceID=jo_pTdthTuc-1es2cu8Y0UmKIRo9AlyLmw"
                target="https://www.target.com/p/the-last-of-us-part-ii-special-edition-playstation-4/-/A-78382924?clkid=f95844d3N6c7b11eaa07442010a246e0f&lnm=81938&afid=NeuIntel%2C%20LLC&ref=tgt_adv_xasd0002"
                amazon="https://www.amazon.com/dp/B07YBX9F4R?tag=price19296-20&ascsubtag=wtbs_5eb8ab8e7cbe17e862286e5d&m=ATVPDKIKX0DER"
                toggle={toggleModule}
                /> : null}
        </div>
    );
};

export default SpecialEdition;