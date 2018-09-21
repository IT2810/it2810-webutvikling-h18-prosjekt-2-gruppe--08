import React, {Component} from 'react';

class Home extends Component {

    constructor(props) {
        super(props);

    }

    createElementFromHTML(htmlString) {
        var div = document.createElement('div');
        div.innerHTML = htmlString.trim();

        // Change this to div.childNodes to support multiple top-level nodes
        var child = div.firstChild;
        return child;
    }

    // For å gjøre om responseteksten fra ajax-kallet til svg
    createMarkup() {
        return {__html: this.props.picture};
    }

    render() {
        return (
            <div className="home_container">
                <div className="picture"
                     dangerouslySetInnerHTML={this.createMarkup()}/>
                <div className="text">
                    {this.props.text.split("\n").map((i, key) => {
                        return <div key={key}>{i}</div>;
                    })}
                </div>
                <div className="audio">
                    <audio src={this.props.audio} type="audio/mp3" controls/>
                </div>
            </div>
        )
    }
}

export default Home;
