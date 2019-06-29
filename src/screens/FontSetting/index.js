import React, { Component } from "react";
import { connect } from "react-redux";
import { setFontStyle } from "../../store/actions";

class FontSetting extends Component {
  changeFontSize = value => {
    this.props.setFontSize(value);
  };

  render() {
    console.log(this.props.fontSize);
    return (
      <div>
        <button onClick={() => this.changeFontSize("12px")}>12</button>
        <button onClick={() => this.changeFontSize("20px")}>20</button>
        <button onClick={() => this.changeFontSize("50px")}>30</button>
      </div>
    );
  }
}

const mapStateToProps = ({ fontStyle }) => {
  return {
    fontSize: fontStyle.fontSize
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setFontSize: value => dispatch(setFontStyle(value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FontSetting);
