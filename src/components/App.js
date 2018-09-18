import React, { Component } from 'react';
import axios from 'axios';

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
        if(this.state.tabNumber != tabNumber) {
            this.setState({
                tabNumber: tabNumber
            })
            let list = {}
            axios.get("/content/texts/limmericks.json")
            .then((response) => {
                //console.log(response);
                if (tabNumber == 1) {
                    this.setState({
                        activeText: response.data[0].text
                    });
                    //console.log(this.state.activeText);
                } else if (tabNumber == 2) {
                    this.setState({
                        activeText: response.data[1].text
                    });
                }

            })
            .catch(function (error) {
                console.log(error);
            });
        }



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
