import React from 'react';

import Header from '../Header/Header';
import About from '../About/About';
import Shop from '../Shop/Shop';
import Info from '../Info/Info';
import Screenshots from '../Screenshots/Screenshots';
import Video from '../Video/Video';
import News from '../News/News';

const App = () => {
    return (
        <div>
            <Header />
            <About />
            <Shop />
            <Info />
            <Screenshots />
            <Video />
            <News />
        </div>
    );
};

export default App;