import React, { Component } from "react";

import "./ResultArea.css";
import Hotels from "../Hotels";

class ResultArea extends Component {
  state = {
    dataSource: []
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.dataSource !== this.state.dataSource) {
      this.setState({ dataSource: nextProps.dataSource });
    }
  }

  displayHotels = () => {
    let hotelTemplate = [];
    const { dataSource } = this.state;

    dataSource.map((hotel, index) => {
      hotelTemplate.push(<Hotels key={index} hotelDetails={hotel} />);
    });
    return hotelTemplate;
  };

  render() {
    return (
      <div className="resultAreaContainer">
        {/* Results:{ JSON.stringify(this.state.dataSource)} */}
        {this.displayHotels()}
        {/* <Hotels key={1} hotelDetails={{}} /> */}
      </div>
    );
  }
}

export default ResultArea;
