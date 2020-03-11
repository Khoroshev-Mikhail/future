import React from 'react';

import './App.css';
import './css/style.css';

import Header from './Header/Header.js';
import Helimain from './Header/Helimain.js';
import Body from './Body/Body.js';
import Footer from './Footer/Footer.js';
import Over from './Body/Over.js';
import Dark from './Body/Dark.js';

class App extends React.Component{
  render(){
    return(
      <div className="App">
          <Dark />
          <Over />
          <Header />
          <Helimain />
          <Body />
          <Footer />
      </div>
    );
  }
}

export default App;
