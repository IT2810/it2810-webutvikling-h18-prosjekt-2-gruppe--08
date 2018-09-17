import React, { Component } from 'react';
import axios from 'axios';
//dlcl
// Component
import Header from './header';
import Footer from './footer';
import Home from './home';
import Menu from './menu';
import Tabs from './tabs';

class App extends Component {

    constructor(props) {
        super(props);

        this.onTabClick = this.onTabClick.bind(this)

        this.state = {
            tabNumber:0,
            activePicture:"",
            activeText:"",
            activeAudio:""
        }
    }

    onTabClick(tabNumber){
        console.log(tabNumber);
        this.setState({
            tabNumber: tabNumber
        })
        axios.get("/db.json")
          .then((response) => {
              this.setState({
                  activeText: response.data.home.picture.text
              });
          })
          .catch(function (error) {
            console.log(error);
          });

    }

  render() {
    return (
      <div className="main_container">
          <Header/>
          <Tabs onTabSelect={this.onTabClick}/>
          <Home text={this.state.activeText}/>
          <Menu/>
          <Footer/>
      </div>
    );
  }
}

export default App;
