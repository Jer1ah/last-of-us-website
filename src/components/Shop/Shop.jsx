import React from 'react';
import styles from './Shop.module.css';

import CollectorsEdition from '../CollectorsEdition/CollectorsEdition';
import SpecialEdition from '../SpecialEdition/SpecialEdition';
import StandardEdition from '../StandardEdition/StandardEdition';

class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.navList = React.createRef();
        this.state = {
            currentNavItem: "collector"
        };
    }

    navigationController = (event) => {
        event.preventDefault();
        if(event.target.tagName === "A") {
            for(let i = 0; i < 3; i++) {
                this.navList.current.children[i].children[0].style = "";
            }
            event.target.style.borderBottom = ".4rem solid #E7C50B";
            event.target.style.paddingBottom = ".33rem";
            event.target.style.color = "#fff";

            switch(event.target.textContent) {
                case "COLLECTOR'S EDITION":
                    this.setState({ currentNavItem: "collector" });
                    break;
                case "SPECIAL EDITION":
                    this.setState({ currentNavItem: "special" });
                    break;
                case "STANDARD EDITION":
                    this.setState({ currentNavItem: "standard" });
                    break;
                default:
                    this.setState({ currentNavItem: "collector" });
            }
        }
    };

    renderComponent = () => {
        switch(this.state.currentNavItem) {
            case "collector":
                return <CollectorsEdition />
                break;
            case "special":
                return <SpecialEdition />
                break;
            case "standard":
                return <StandardEdition />
                break;
        }
    }

    render() {
        const activeStyles = {
            borderBottom: ".4rem solid #E7C50B",
            paddingBottom: ".33rem",
            color: "#fff"
        };

        return (
            <div className={styles.shop} id="shop">
                <div className={styles.container}>
                    <h1>CHOOSE YOUR EDITION</h1>
                    <ul className={styles.shop__nav}
                        ref={this.navList} 
                        onClick={event => this.navigationController(event)}
                    >
                        <li className={styles.shop__navItem}>
                            <a href="#" style={activeStyles}>COLLECTOR'S EDITION</a>
                        </li>
                        <li className={styles.shop__navItem}>
                            <a href="#">SPECIAL EDITION</a>
                        </li>
                        <li className={styles.shop__navItem}>
                            <a href="#">STANDARD EDITION</a>
                        </li>
                    </ul>
                    {this.renderComponent()}
                </div>
            </div>
        );
    }
};

export default Shop;