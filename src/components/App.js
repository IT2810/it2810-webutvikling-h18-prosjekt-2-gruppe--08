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
            activeText:["", "", "", ""],
            activeAudio:""
        }
    }

    onTabClick(tabNumber){
        //console.log(tabNumber);
        if(this.state.tabNumber != tabNumber) {
            this.setState({
                tabNumber: tabNumber
            })

            if (this.state.activeText[tabNumber-1] == "") {
              axios.get("/content/texts/lyrics.json")
              .then((response) => {
                  console.log("henter tekst fra tab" + tabNumber);
                  let updatedTexts = this.state.activeText
                  updatedTexts[tabNumber-1] = response.data[tabNumber-1].text
                  this.setState({
                    activeText: updatedTexts
                  })
              })
              .catch(function (error) {
                  console.log(error);
              });
            }
            else {
              console.log("Har allerede hentet tab" + tabNumber);
            }


        }



    }

  render() {
    return (
      <div className="main_container">
          <Header/>
          <Tabs onTabSelect={this.onTabClick}/>
          <Home text={this.state.activeText[this.state.tabNumber-1]}/>
          <Menu/>
          <Footer/>
      </div>
    );
  }
}

export default App;
