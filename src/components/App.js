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


        this.tabUpdate = this.tabUpdate.bind(this)
        this.categoryUpdate = this.categoryUpdate.bind(this)

        this.state = {
            tabNumber: 0,

            activePicture: ["", "", "", ""],
            activeText: ["", "", "", ""],
            activeAudio: ["", "", "", ""],

            // [picture, text, audio]
            activeCategories: ["", "", ""]

        }
    }

    getPictureOnTab(){
      console.log("Nå er jeg i getPictureOnTab");
      let picturesURL = "/content/images/" + this.state.activeCategories[0]
      +"/"+this.state.activeCategories[0]+ (this.state.tabNumber+1) + ".svg"
      // ---------- HENTER BILDE ------------------
      if (this.state.activePicture[this.state.tabNumber] === "") {
        axios.get(picturesURL)
        .then((response) => {
            console.log("Henter bilde til tab" + this.state.tabNumber);
            let pictures = this.state.activePicture
            pictures[this.state.tabNumber] = response.data
            this.setState({
              activePicture: pictures
            })
        })
        .catch(function (error) {
            console.log(error);
        });
      }
      else {
        console.log("Har allerede hentet bilde til tab" + this.state.tabNumber);
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

    tabUpdate(tabNumber){
      // TODO: Skal kun skje endring dersom man endrer tab
       if (tabNumber > -1){
        console.log("Nå er jeg inne i tabUpdate");
        this.setState({
            tabNumber: tabNumber
        }, () => {
          this.getMedia()
          }
        )
       }
    }

    getMedia() {
      // Om en kategori for mediatypene er valgt så hentes et medie fra samlingen under den kategorien
      console.log("Inne i getMedia, tab er " + this.state.tabNumber);
      if (this.state.activeCategories[0] !== ""){
        this.getPictureOnTab()
      }
      if (this.state.activeCategories[1] !== ""){
        this.getTextOnTab()
      }
        // TODO: Mangler å hente lyd
    }


    // Når en ny kategori velges kjøres denne funksjonen som oppdaterer staten
    categoryUpdate(catNo, changeEvent) {
      console.log("Nå er jeg i categoryUpdate og skal endre til " + changeEvent);
      let categories = this.state.activeCategories
      categories[catNo] = changeEvent

      // Når en ny kategori endres for et medie så tømmes de allerede innhentede mediene for den kategorien
      this.clearData(catNo)

      // Setter tabUpdate i en callback for å sikre at den kalles ETTER at staten er endret
      this.setState({
        activeCategories: categories
      }, () => {
        console.log("Kategoriene er nå: " + this.state.activeCategories);
        this.tabUpdate(this.state.tabNumber)
      })

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




  render() {
    console.log("Nå er jeg i render() i App.js");
    
    return (
      <div className="main_container">
          <Header/>
          <Tabs onTabSelect={this.tabUpdate}/>

          <Home text={this.state.activeText[this.state.tabNumber]}
          picture = {this.state.activePicture[this.state.tabNumber]}/>

          <Menu
          pictureCategory = {this.state.activeCategories[0]}
          textCategory = {this.state.activeCategories[1]}
          audioCategory = {this.state.activeCategories[2]}
          onCategoryChanged={this.categoryUpdate}
          text = {this.state.activeText}
          c = {this.state.activeCategories}/>

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
