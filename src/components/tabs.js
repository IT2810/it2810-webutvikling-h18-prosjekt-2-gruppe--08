import React, { Component } from 'react';

class Tabs extends Component {

    constructor(props){
        super(props);

    }

    render() {
        return(
            <div className="tabs_container">
                <div className="tab1" onClick={() => this.props.onTabSelect(1)}>
                    Kunst 1
                </div>
                <div className="tab2">
                    Kunst 2
                </div>
                <div className="tab3">
                    Kunst 3
                </div>
                <div className="tab4">
                    Kunst 4
                </div>
            </div>
        )
    }
}

export default Tabs;
