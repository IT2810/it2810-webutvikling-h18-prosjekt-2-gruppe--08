import React, {Component} from 'react';

class Tabs extends Component {

    getStyle(activeBool) {
        return activeBool === true ? {'backgroundColor': 'var(--pink)'} : {'backgroundColor': 'white'};
    }

    render() {
        let {activeTabs} = this.props;
        return (
            <div className="tabs_container">
                <div className="tab1" onClick={() => this.props.onTabSelect(0)} style={this.getStyle(activeTabs[0])}>
                    <a>Artwork 1</a>
                </div>
                <div className="tab2" onClick={() => this.props.onTabSelect(1)} style={this.getStyle(activeTabs[1])}>
                    <a>Artwork 2</a>
                </div>
                <div className="tab3" onClick={() => this.props.onTabSelect(2)} style={this.getStyle(activeTabs[2])}>
                    <a>Artwork 3</a>
                </div>
                <div className="tab4" onClick={() => this.props.onTabSelect(3)} style={this.getStyle(activeTabs[3])}>
                    <a>Artwork 4</a>
                </div>
            </div>
        )
    }
}

export default Tabs;
