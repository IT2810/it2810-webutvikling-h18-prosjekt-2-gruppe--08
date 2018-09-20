import React, { Component,} from 'react';

/*
const picture =  ["nature", "city", "animals"] ;
const text = ["poems", "limericks", "Song lyricss"] ;
const audio = ["rock", "dubstep", "jazz"] ;
*/

class Menu extends Component {


    constructor(props){
        super(props);
    }

    render(){
        console.log("Nå er jeg i render() i Menu.js");
        return(
            <div className="menu_container">
                {/*-- ------------------------------- PICTURE ----------------------------------------------- */}
                <div className="picture_choice">
                    <h2 id="h2_menu">Picture</h2>
                    <p id="p">
                        <input type="radio" value='nature' checked={this.props.pictureCategory === 'nature'}
                        onClick={() => {this.props.onCategoryChanged(0, 'nature')}} />
                        Nature
                    </p>
                    <p id="p">
                        <input type="radio" value='city' checked={this.props.pictureCategory === 'city'}
                        onClick={() => {this.props.onCategoryChanged(0, 'city')}}/>
                        City
                    </p>
                    <p id="p">
                        <input type="radio" value='animal' checked={this.props.pictureCategory === 'animal'}
                        onClick={() => {this.props.onCategoryChanged(0, 'animal')}} />
                        Animal
                    </p>
            </div>
            {/* ------------------------------- TEXT -----------------------------------------------*/}
            <div className="text_choice">
                <h2 id="h2_menu">Text</h2>
                <p id="p">
                    <input type="radio" value='poems' checked={this.props.textCategory === 'poems'}
                    onClick={() => {this.props.onCategoryChanged(1, 'poems')}}  />
                    Poem
                </p>
                <p id="p">
                    <input type="radio" value='limericks' checked={this.props.textCategory === 'limericks'}
                    onClick={() => {this.props.onCategoryChanged(1, 'limericks')}} />
                    Limerick
                </p>
                <p id="p">
                    <input type="radio" value='lyrics' checked={this.props.textCategory === 'lyrics'}
                    onClick={() => {this.props.onCategoryChanged(1, 'lyrics')}} />
                    Lyric
                </p>
            </div>
            {/* ------------------------------- AUDIO ----------------------------------------------- */}
            <div className="audio_choice">
                <h2 id="h2_menu">Audio</h2>
                <p id="p">
                    <input type="radio" value='rock' checked={this.props.audioCategory === 'rock'}
                    onClick={() => {this.props.onCategoryChanged(2, 'rock')}} />
                    Rock
                </p>
                <p id="p">
                    <input type="radio" value='dubstep' checked={this.props.audioCategory === 'dubstep'}
                    onClick={() => {this.props.onCategoryChanged(2, 'dubstep')}} />
                    Dubstep
                </p>
                <p id="p">
                    <input type="radio" value='jazz' checked={this.props.audioCategory === 'jazz'}
                    onClick={() => {this.props.onCategoryChanged(2, 'jazz')}} />
                    Jazz
                </p>

            </div>

            </div>
            )
        }
    }




export default Menu;
