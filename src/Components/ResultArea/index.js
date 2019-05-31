import React, { Component } from "react";

import './ResultArea.css'
import Hotels from "../Hotels";

class ResultArea extends Component {
  state = {
    dataSource: []
  };

  componentDidMount() {
    console.log("this.state.dataSource", this.state.dataSource);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.dataSource !== this.state.dataSource) {
      this.setState({ dataSource: nextProps.dataSource });
      console.log("componentWillReceiveProps", this.state.dataSource);
    }
  }

  displayHotels = () => {
    let hotelTemplate = [];
    const { dataSource } = this.state;

    dataSource.map((hotel, index) => {
      hotelTemplate.push(<Hotels key={index} hotelDetails={hotel}/>);
    });
    return hotelTemplate;
  };

  render() {
    return (
      <div className='resultAreaContainer'>
        {/* Results:{ JSON.stringify(this.state.dataSource)} */}
        {this.displayHotels()}
      </div>
    );
  }
}

export default ResultArea;
