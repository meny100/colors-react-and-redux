import React, { Component } from "react";
import { connect } from "react-redux";
import { changeRed } from "../store/color/colorActions";
import Slider from "react-input-slider";

class RedColorControl extends Component {
  state = {};

  handleChange = (value) => {
    this.props.changeRed(value);
  };

  render() {
    return (
      <React.Fragment>
        <b className="text-danger mt-3">Red {this.props.color.red}</b>
          <Slider
            style={{ width: "100%" }}
            xmax="255"
            x={this.props.color.red}
            onChange={({ x }) => this.handleChange(x)}
          />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    color: state.color,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeRed: (value) => dispatch(changeRed(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RedColorControl);
