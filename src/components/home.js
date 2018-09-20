import React, { Component } from 'react';

class Home extends Component {

    constructor(props){
        super(props);

    }


    // componentDidMount(){
    //     axios.get()
    //       .then((response) => {
    //           this.setState({
    //               home: response.data.home
    //           });
    //         console.log(response.data.home.picture[0].text);
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });
    // }

    createElementFromHTML(htmlString) {
        var div = document.createElement('div');
        div.innerHTML = htmlString.trim();

        // Change this to div.childNodes to support multiple top-level nodes
        var child = div.firstChild;
        console.log(child);
        return child;
      }

      // For å gjøre om responseteksten fra ajax-kallet til svg
      createMarkup(){
          return {__html: this.props.picture};
      }

      // playAudio(audio_src){
      //   let audio = new Audio(audio_src)
      //   audio.play()
      // }



    render() {
      console.log("Nå er jeg i render() i Home.js")

        return(
            <div className="home_container">
                <div className="picture"
                  dangerouslySetInnerHTML={this.createMarkup()} />

                <div className="text">
                  {this.props.text.split("\n").map((i,key) => {
                    return <div key={key}>{i}</div>;
                  })}
                </div>

                <div className="audio" >
                <audio src= {this.props.audio} type="audio/mp3" controls/>

                </div>

            </div>
        )
    }
}

export default Home;
