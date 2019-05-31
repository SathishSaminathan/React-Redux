import React, { Component } from "react";
import { debounce } from "lodash";
import axios from "axios";
import { connect } from "react-redux";

import { setValues } from "../store/actions";
import Header from "../Header/Header";
import ResultArea from "./ResultArea";
import "./Home.css";
const totalCountPerResult = 4;

class Home extends Component {
  state = {
    searchKey: "",
    dataSource: [],
    filteredData: [],
    start: 0,
    end: totalCountPerResult,
    latitude: "",
    longitude: ""
  };

  componentDidMount() {
    this.fetchHotels();
    this.getMyLocation();
  }

  getMyLocation = () => {
    const location = window.navigator && window.navigator.geolocation;

    if (location) {
      location.getCurrentPosition(
        position => {
          this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
        },
        error => {
          this.setState({
            latitude: "err-latitude",
            longitude: "err-longitude"
          });
        }
      );
    }
  };

  fetchHotels = searchKey => {
    this.setState({ isLoading: true });
    axios.get("https://api.myjson.com/bins/qz8qn").then(res => {
      this.setState({
        isLoading: false
      });
      this.props.setValues(res.data.data.restaurants[0].restaurants);
    });
  };

  loadMore = () => {
    this.setState(
      {
        start: this.state.end,
        end: this.state.end + totalCountPerResult
      },
      () => this.searchKey(this.state.searchKey)
    );
  };

  searchKey = searchKey => {
    const { hotelList } = this.props;
    const { start, end } = this.state;
    let slicedData = [];
    let filteredData = [];
    this.setState({ searchKey });

    // if (searchKey.length > 0) {
    //     filteredData =
    //       hotelList &&
    //       hotelList.hotelList.filter(data =>
    //         data.name.toLowerCase().includes(searchKey.toLowerCase())
    //       );

    //     this.setState({ filteredData: filteredData }, () =>
    //     );
    //   } else {
    //     this.setState({ filteredData: [] });
    //   }

    // if (this.state.dataSource.length > 0) {
    if (searchKey.length > 0) {
      filteredData =
        hotelList &&
        hotelList.hotelList.filter(data =>
          data.name.toLowerCase().includes(searchKey.toLowerCase())
        );

      slicedData = filteredData.slice(start, end);

      this.setState({ filteredData: filteredData }, () => {});
    } else {
      this.setState({ filteredData: [] });
    }
  };

  render() {
    const { dataSource, filteredData, searchKey } = this.state;

    console.log('latitude.', this.state.latitude)
    console.log('longitude.', this.state.longitude)

    // const DataSource = filteredData.length > 0 ? filteredData : dataSource;

    const DataSource = filteredData;

    return (
      <div className="homeContainer">
        <Header searchKey={this.searchKey} isLoading={this.state.isLoading} />
        <ResultArea dataSource={DataSource} />
        {/* {filteredData.length > 0 && (
          <button className="loadMore" onClick={() => this.loadMore()}>
            Load More
          </button>
        )} */}
        {DataSource.length === 0 && searchKey !== "" && (
          <div>No Hotels Found</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ dataSource }) => {
  return {
    hotelList: dataSource
  };
};

export default connect(
  mapStateToProps,
  { setValues }
)(Home);
