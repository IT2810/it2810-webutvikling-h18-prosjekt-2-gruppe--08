import React, { Component } from 'react';

class Tabs extends Component {

    constructor(props){
        super(props);

    }

    render() {
        return(
            <div className="tabs_container">
                <div className="tab1" onClick={() => this.props.onTabSelect(0)}>
                    Kunst 1
                </div>
                <div className="tab2" onClick={() => this.props.onTabSelect(1)}>
                    Kunst 2
                </div>
                <div className="tab3" onClick={() => this.props.onTabSelect(2)}>
                    Kunst 3
                </div>
                <div className="tab4" onClick={() => this.props.onTabSelect(3)}>
                    Kunst 4
                </div>
            </div>
        )
    }
}

export default Tabs;
