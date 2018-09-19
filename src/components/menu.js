import React, { Component,} from 'react';

/*
const picture =  ["nature", "city", "animals"] ;
const text = ["poems", "limericks", "Song lyricss"] ;
const audio = ["rock", "dubstep", "jazz"] ;
*/

class Menu extends Component {


    constructor(props){
        super(props);
        this.state = {
          picture_choice: "",
          text_choice: "",
          audio_choice: ""
        }
        }

    render()
            {
        return(
            <div className="menu_container">
            {/*-- ------------------------------- PICTURE ----------------------------------------------- */}
                <div className="picture_choice">
                    <h2>Picture</h2>
                    <input type="radio" value='nature' checked={this.state.picture_choice === 'nature'}
                    onClick={() => {
                      this.props.onCategoryChanged(0, 'nature')
                      this.setState({picture_choice: 'nature'})
                    }
                  } /> Nature


                    <h3> </h3>
                    <input type="radio" value='city' checked={this.state.picture_choice === 'city'}
                    onClick={() => {
                      this.props.onCategoryChanged(0, 'city')
                      this.setState({picture_choice: 'city'})
                    }
                  }/> City

                    <h3> </h3>
                    <input type="radio" value='animal' checked={this.state.picture_choice === 'animal'}
                    onClick={() => {
                      this.props.onCategoryChanged(0, 'animal')
                      this.setState({picture_choice: 'animal'})
                    }
                  } /> Animal

                </div>
                {/* ------------------------------- TEXT -----------------------------------------------*/}
                <div className="text_choice">
                    <h2>Text</h2>
                    <input type="radio" value='poems' checked={this.state.text_choice === 'poems'}
                    onClick={() => {
                      this.props.onCategoryChanged(1, 'poems')
                      this.setState({text_choice: 'poems'})
                    }
                  }  /> Poem

                    <h3> </h3>
                    <input type="radio" value='limericks' checked={this.state.text_choice === 'limericks'}
                    onClick={() => {
                      this.props.onCategoryChanged(1, 'limericks')
                      this.setState({text_choice: 'limericks'})
                    }
                  } /> Limerick

                    <h3> </h3>
                    <input type="radio" value='lyrics' checked={this.state.text_choice === 'lyrics'}
                    onClick={() => {
                      this.props.onCategoryChanged(1, 'lyrics')
                      this.setState({text_choice: 'lyrics'})
                    }
                  } /> Lyric
                </div>
                {/* ------------------------------- AUDIO ----------------------------------------------- */}
                <div className="audio_choice">
                    <h2> Audio</h2>
                    <input type="radio" value='rock' checked={this.state.audio_choice === 'rock'}
                    onClick={() => {
                      this.props.onCategoryChanged(2, 'rock')
                      this.setState({audio_choice: 'rock'})
                    }
                  } /> Rock

                    <h3> </h3>
                    <input type="radio" value='dubstep' checked={this.state.audio_choice === 'dubstep'}
                    onClick={() => {
                      this.props.onCategoryChanged(2, 'dubstep')
                      this.setState({audio_choice: 'dubstep'})
                    }
                  } /> Dubstep

                    <h3> </h3>
                    <input type="radio" value='jazz' checked={this.state.audio_choice === 'jazz'}
                    onClick={() => {
                      this.props.onCategoryChanged(2, 'jazz')
                      this.setState({audio_choice: 'jazz'})
                    }
                  } /> Jazz
                </div>

            </div>)
            }

        }

export default Menu;
