import React, { Component } from 'react';
import axios  from 'axios';

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
            tabNumber: -1,

            activePicture: ["", "", "", ""],
            activeText: ["", "", "", ""],
            activeAudio: ["", "", "", ""],

            // [picture, text, audio]
            activeCategories: ["", "", ""]

        }
    }

    getPictureOnTab(){
      let picturesURL = "/content/images/" + this.state.activeCategories[0]
      +"/"+this.state.activeCategories[0]+"1.svg"
      // ---------- HENTER BILDE ------------------
      // Sjekker at vi ikke allerede har hentet bilde til denne taben
      if (this.state.activePicture[this.state.tabNumber] === "") {
        var ajax = new XMLHttpRequest();
        ajax.open("GET", picturesURL, true);
        ajax.send();
        const pictures = this.state.activePicture
        console.log("Henter bilde til tab" + this.state.tabNumber);
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
        console.log("Har allerede hentet bilde til tab" + this.statetabNumber);
      }
    }

    getTextOnTab(){
      let textsURL = "/content/texts/" + this.state.activeCategories[1]
      + ".json"
      // ---------- HENTER TEKST ------------------
      // Sjekker at vi ikke allerede har hentet tekst til denne taben
      console.log("Nå er jeg inne i getTextOnTab");
      console.log("Tabnumber er " + this.state.tabNumber);
      if (this.state.activeText[this.state.tabNumber] === "") {
        axios.get(textsURL)
        .then((response) => {
            console.log("Henter tekst til tab" + this.state.tabNumber);
            let texts = this.state.activeText
            texts[this.state.tabNumber] = response.data[this.state.tabNumber].text
            this.setState({
              activeText: texts
            })
        })
        .catch(function (error) {
            console.log(error);
        });
      }
      else {
        console.log("Har allerede hentet tekst til tab" + this.state.tabNumber);
      }
    }

    getAudioOnTab(){
      let audiosURL= "/content/audio/" + this.state.activeCategories[2]
      +"/"+this.state.activeCategories[2]+"1.mp3"
    }

    onTabClick(tabNumber){
      // TODO: Skal kun skje endring dersom man endrer tab
       if (tabNumber > -1){
        this.setState({
            tabNumber: tabNumber
        })
        console.log("Nå er jeg inne i onTabClick");
        // Om en kategori for mediatypene er valgt så hentes et medie fra samlingen under den kategorien
        if (this.state.activeCategories[0] !== ""){
          this.getPictureOnTab()
        }
        if (this.state.activeCategories[1] !== ""){
          this.getTextOnTab()
        }
        // TODO: Mangler å hente lyd
       }
    }


    // Når en ny kategori velges kjøres denne funksjonen som oppdaterer staten
    onCategoryClick(catNo, changeEvent) {
      let categories = this.state.activeCategories
      categories[catNo] = changeEvent
      this.clearData(catNo)

      this.setState({
        activeCategories: categories
      }, this.onTabClick(this.state.tabNumber) )


      //console.log("Tekst: " + this.state.activeText);
      //this.onTabClick(this.state.tabNumber)

    }

    clearData(catNo) {
      if (catNo === 0) {
        this.setState({
          activePicture: ["", "", "", ""]
        })
      }
      else if (catNo === 1) {
        this.setState({
          activeText: ["", "", "", ""]
        })
      }
      else if (catNo === 2) {
        this.setState({
          activeAudio: ["", "", "", ""]
        })
      }

    }


    // pictureChange(changeEvent){
    //     this.setState({
    //         selectedPicture: changeEvent.target.value
    //     });
    //
    // }



  render() {
    console.log("Nå er jeg i render() i App.js");
    //console.log(this.state.activeCategories);
    //console.log("Bilder: " + this.state.activePicture);
    //console.log("Tekst: " + this.state.activeText);
    //console.log("Audio: " + this.state.activeAudio);
    //  console.log("hei"+ this.state.activePicture);
    return (
      <div className="main_container">
          <Header/>
          <Tabs onTabSelect={this.onTabClick}/>
          <Home text={this.state.activeText[this.state.tabNumber]}
          picture = {this.state.activePicture[0]}/>
          {/* Må sende inn bilde og lyd som prop til menu-component i tillegg */}
          <Menu textCategory = {this.state.activeCategories[1]}
          onCategoryChanged={this.onCategoryClick}/>
          <Footer/>
          <audio controls>
              <source src="" type="audio/ogg"/>
                  <source src="" type="audio/mpeg"/>
          </audio>
      </div>
    );
  }
}

export default App;
