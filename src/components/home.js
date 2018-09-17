import React, { Component } from 'react';
import axios from 'axios';

const URL_HOME = '/db.json'

class Home extends Component {

    constructor(props){
        super(props);

        this.state = {
            home:''
        }
    }


    componentDidMount(){
        axios.get(URL_HOME)
          .then((response) => {
              this.setState({
                  home: response.data.home
              });
            console.log(response.data.home.picture[0].text);
          })
          .catch(function (error) {
            console.log(error);
          });
    }



    render() {
        return(
            <div className="home_containser">
                <div className="picture" >
                    BILDE
                </div>
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
