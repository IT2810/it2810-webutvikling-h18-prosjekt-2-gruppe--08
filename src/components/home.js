import React, { Component } from 'react';


const URL_HOME = 'http://localhost:3004/home'

class Home extends Component {

    constructor(props){
        super(props);

        this.state = {
            home:''
        }
    }

    componentDidMount(){
        fetch(URL_HOME, {method:'GET'})
        .then(response => response.json())
        .then(json =>{
            this.setState({
                home:json
            })
        })
    }

    render() {
        return(
            <div className="home_container">
                <div className="picture" >
                    BILDE
                </div>
                <div className="text">
                    TEXT agvdkjlø
                </div>
                <div className="audio">
                    LYD asvhfjdklø
                </div>

            </div>
        )
    }
}

export default Home;
