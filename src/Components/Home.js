import React, { Component } from "react";
import { debounce } from "lodash";
import axios from "axios";

import Header from "../Header/Header";
import ResultArea from "./ResultArea";

class Home extends Component {
  state = {
    searchKey: "",
    dataSource: [],
    filteredData: []
  };

  componentDidMount() {
    this.fetchHotels();
  }

  fetchHotels = searchKey => {
    axios.get("https://api.myjson.com/bins/qz8qn").then(res => {
      this.setState({
        isLoading: false,
        dataSource: res.data.data.restaurants[0].restaurants
      });
    });
  };

  // searchKey = debounce(searchKey => {
  //   if (searchKey.length > 0) {
  //     this.setState({
  //       searchKey,
  //       isLoading: true
  //     });
  //   } else {
  //     this.setState({ isLoading: false });
  //   }
  // }, 2000);

  searchKey = searchKey => {
    let filteredData = [];

    // if (this.state.dataSource.length > 0) {
    if (searchKey.length > 0) {

      filteredData = this.state.dataSource.filter(data =>
        data.name.toLowerCase().includes(searchKey.toLowerCase())
      );
      // console.log('filter..', this.state.dataSource.filter(data=>data.name.toLowerCase(searchKey)))
      this.setState({ filteredData }, () =>
        console.log("works", this.state.filteredData)
      );
    } else {
      this.setState({ filteredData: [] });
    }
    console.log("filteredData", this.state.filteredData);
  };

  render() {
    const { dataSource, filteredData } = this.state;

    // const DataSource = filteredData.length > 0 ? filteredData : dataSource;

    const DataSource = filteredData;

    return (
      <div>
        <Header searchKey={this.searchKey} isLoading={this.state.isLoading} />
        <ResultArea dataSource={DataSource} />
      </div>
    );
  }
}

export default Home;
