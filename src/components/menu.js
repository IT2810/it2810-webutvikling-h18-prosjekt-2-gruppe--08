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
                  <h2>Picture</h2>
                  <input type="radio" value='nature' checked={this.props.pictureCategory === 'nature'}
                  onClick={() => {
                    this.props.onCategoryChanged(0, 'nature')
                  }
                } /> Nature

                  <h3> </h3>
                  <input type="radio" value='city' checked={this.props.pictureCategory === 'city'}
                  onClick={() => {
                    this.props.onCategoryChanged(0, 'city')
                  }
                }/> City

                  <h3> </h3>
                  <input type="radio" value='animal' checked={this.props.pictureCategory === 'animal'}
                  onClick={() => {
                    console.log("Du klikket nå på animal..");
                    this.props.onCategoryChanged(0, 'animal')
                  }
                } /> Animal

              </div>
              {/* ------------------------------- TEXT -----------------------------------------------*/}
              <div className="text_choice">
                  <h2>Text</h2>
                  <input type="radio" value='poems' checked={this.props.textCategory === 'poems'}
                  onClick={() => {
                    this.props.onCategoryChanged(1, 'poems')
                  }
                }  /> Poem

                  <h3> </h3>
                  <input type="radio" value='limericks' checked={this.props.textCategory === 'limericks'}
                  onClick={() => {
                    console.log("Du klikket nå på limerick..")
                    this.props.onCategoryChanged(1, 'limericks')

                  }
                } /> Limerick

                  <h3> </h3>
                  <input type="radio" value='lyrics' checked={this.props.textCategory === 'lyrics'}
                  onClick={() => {
                  console.log("Du klikket nå på lyric..")
                    this.props.onCategoryChanged(1, 'lyrics')


                  }
                } /> Lyric
              </div>
              {/* ------------------------------- AUDIO ----------------------------------------------- */}
              <div className="audio_choice">
                  <h2> Audio</h2>
                  <input type="radio" value='rock' checked={this.props.audioCategory === 'rock'}
                  onClick={() => {
                    this.props.onCategoryChanged(2, 'rock')

                  }
                } /> Rock

                  <h3> </h3>
                  <input type="radio" value='dubstep' checked={this.props.audioCategory === 'dubstep'}
                  onClick={() => {
                    this.props.onCategoryChanged(2, 'dubstep')

                  }
                } /> Dubstep

                  <h3> </h3>
                  <input type="radio" value='jazz' checked={this.props.audioCategory === 'jazz'}
                  onClick={() => {
                    this.props.onCategoryChanged(2, 'jazz')

                  }
                } /> Jazz
              </div>

          </div>)
          }
    }




export default Menu;
