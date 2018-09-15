import React, { Component } from 'react';


class Menu extends Component {

    render() {
        return(
            <div className="menu_container">
                <div className="picture_choice">
                    <h2>Picture</h2>
                    <h3>Nature</h3>
                    <h3>City</h3>
                    <h3>Animal</h3>
                </div>
                <div className="text_choice">
                    <h2>Text</h2>
                    <h3>Poem</h3>
                    <h3>Limerick</h3>
                    <h3>Song Lyrics</h3>
                </div>
                <div className="audio_choice">
                    <h2>Audio</h2>
                    <h3>Rock</h3>
                    <h3>Dubstep</h3>
                    <h3>Jazz</h3>
                </div>
            </div>
        )
    }
}

export default Menu;
