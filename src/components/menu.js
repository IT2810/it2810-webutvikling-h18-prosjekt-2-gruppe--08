import React, { Component,} from 'react';

/*
const picture =  ["Nature", "City", "Animals"] ;
const text = ["Poem", "Limerick", "Song Lyrics"] ;
const audio = ["Rock", "Dubstep", "Jazz"] ;
*/

class Menu extends Component {



    constructor(props){
        super(props);
        }

    render()
            {
        return(
            <div className="menu_container">
                <div className="picture_choice">
                    <h2>Picture</h2>
                    <input type="radio" value='Nature' /*checked={this.selectedPicture === 'Nature'}*/ onClick={this.pictureChange} /> Nature
                    <h3> </h3>
                    <input type="radio" value='City' checked={this.props.selectedPicture === 'City'} onClick={this.pictureChange} /> City
                    <h3> </h3>
                    <input type="radio" value='Animal' checked={this.props.selectedPicture === 'Animal'} onClick={this.pictureChange} /> Animal
                </div>
                <div className="text_choice">
                    <h2>Text</h2>
                    <input type="radio" value='Poem' checked={false} onClick={this.pictureChange} /> Poem
                    <h3> </h3>
                    <input type="radio" value='Limerick' checked={false} onClick={this.pictureChange} /> Limerick
                    <h3> </h3>
                    <input type="radio" value='Song Lyric' checked={false} onClick={this.pictureChange} /> Song Lyric
                </div>
                <div className="audio_choice">
                    <h2> Audio</h2>
                    <input type="radio" value='Rock' checked={false} onClick={this.pictureChange} /> Rock
                    <h3> </h3>
                    <input type="radio" value='Dubstep' checked={false} onClick={this.pictureChange} /> Dubstep
                    <h3> </h3>
                    <input type="radio" value='Jazz' checked={false} onClick={this.pictureChange} /> Jazz

                </div>
            </div>)
            }

        }

export default Menu;
