import React, { Component } from "react";
import { connect } from "react-redux";

class CustomText extends Component {
  render() {
    return <span style={{fontSize:this.props.fontSize}}>{this.props.children}</span>;
  }
}

const mapStateToProps = ({ fontStyle }) => {
  return {
    fontSize: fontStyle.fontSize
  };
};

export default connect(
  mapStateToProps,
  null
)(CustomText);
