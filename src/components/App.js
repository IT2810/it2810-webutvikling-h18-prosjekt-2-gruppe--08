import React, { Component } from 'react';

// Component
import Header from './header';
import Footer from './footer';
import Home from './home';
import Menu from './menu';
import Tabs from './tabs';


class App extends Component {
  render() {
    return (
      <div className="main_container">
          <Header/>
          <Tabs/>
          <Home/>
          <Menu/>
          <Footer/>
      </div>
    );
  }
}

export default App;
