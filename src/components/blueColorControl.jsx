import React, { Component } from "react";
import { connect } from "react-redux";
import { changeBlue } from "../store/color/colorActions";
import Slider from "react-input-slider";

class BlueColorControl extends Component {
  state = {};

  handleChange = (value) => {
    this.props.changeBlue(value);
  };

  render() {
    return (
      <React.Fragment>
        <b className="text-primary mt-3">Blue {this.props.color.blue}</b>
          <Slider
            style={{ width: "100%" }}
            xmax="255"
            x={this.props.color.blue}
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
    changeBlue: (value) => dispatch(changeBlue(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BlueColorControl);
