import React, { Component } from 'react';
import axios from 'axios';



class Home extends Component {

    constructor(props){
        super(props);

        this.state = {
            picture: '',
            text: '',
            audio: ''
        }
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



    render() {
      //console.log(this.props.picture);
      //var svg = this.createElementFromHTML(this.props.picture)



        return(
            <div className="home_container">
                <div className="picture"
                  dangerouslySetInnerHTML={this.createMarkup()} />;

                <div className="text">
                    {this.props.text}
                </div>
                <div className="audio">
                    LYD asvhfjdklø
                </div>

            </div>
        )
    }
}

export default Home;
