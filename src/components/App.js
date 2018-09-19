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
        this.onCategoryClick = this.onCategoryClick.bind(this)

        this.state = {
            tabNumber: 0,
            selectedPicture: 'Nature',
            activePicture: ["", "", "", ""],
            activeText: ["", "", "", ""],
            activeAudio: ["", "", "", ""],

            // [picture, text, audio]
            activeCategories: ["animal", "lyrics", ""]

        }
    }


    onTabClick(tabNumber){
        //console.log(tabNumber);
        // if(this.state.tabNumber !== tabNumber) {
        this.setState({
            tabNumber: tabNumber
        })

        // Setter URL-en til tilfeldig bilde, tekst og lyd
        let picturesURL = "/content/images/" + this.state.activeCategories[0]
        +"/"+this.state.activeCategories[0]+"1.svg"

        let textsURL = "/content/texts/" + this.state.activeCategories[1]
        + ".json"

        let audiosURL= "/content/audio/" + this.state.activeCategories[2]
        +"/"+this.state.activeCategories[2]+"1.mp3"

        // ---------- HENTER TEKST ------------------
        // Sjekker at vi ikke allerede har hentet tekst til denne taben
        if (this.state.activeText[tabNumber-1] === "") {
          axios.get(textsURL)
          .then((response) => {
              console.log("Henter tekst til tab" + tabNumber);
              let texts = this.state.activeText
              texts[tabNumber-1] = response.data[tabNumber-1].text
              this.setState({
                activeText: texts
              })
          })
          .catch(function (error) {
              console.log(error);
          });
        }
        else {
          console.log("Har allerede hentet tekst til tab" + tabNumber);

        }

        // ---------- HENTER BILDE ------------------
        // Sjekker at vi ikke allerede har hentet bilde til denne taben
        if (this.state.activePicture[tabNumber-1] === "") {
          var ajax = new XMLHttpRequest();
          ajax.open("GET", picturesURL, true);
          ajax.send();
          const pictures = this.state.activePicture
          console.log("Henter bilde til tab" + tabNumber);
          ajax.onload = function(e) {
            //console.log(ajax.responseText);
                pictures[0] = ajax.responseText
          }
          //console.log(pictures[0]);
          this.setState({
            activePicture: pictures
          })


        }
        else {
          console.log("Har allerede hentet bilde til tab" + tabNumber);
        }


        // }
    }

    // Når en ny kategori velges kjøres denne funksjonen som oppdaterer staten
    onCategoryClick(catNo, category) {
      let categories = this.state.activeCategories
      categories[catNo-1] = category
      this.setState({
        activeCategories: categories
      })

    }


    pictureChange(changeEvent){
        this.setState({
            selectedPicture: changeEvent.target.value
        });

    }




  render() {

    //  console.log("hei"+ this.state.activePicture);
    return (
      <div className="main_container">
          <Header/>
          <Tabs onTabSelect={this.onTabClick}/>
          <Home text={this.state.activeText[this.state.tabNumber-1]}
          picture = {this.state.activePicture[0]}/>
          <Menu onClick={this.pictureChange}/>
          <Footer/>
      </div>
    );
  }
}

export default App;
