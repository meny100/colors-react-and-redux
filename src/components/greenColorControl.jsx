import React, { Component } from "react";
import { connect } from "react-redux";
import { changeGreen } from "../store/color/colorActions";
import Slider from "react-input-slider";

class GreenColorControl extends Component {
  state = {};

  handleChange = (value) => {
    this.props.changeGreen(value);
  };

  render() {
    return (
      <React.Fragment>
        <b className="text-success mt-3">Green {this.props.color.green}</b>
          <Slider
            style={{ width: "100%" }}
            xmax="255"
            x={this.props.color.green}
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
    changeGreen: (value) => dispatch(changeGreen(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GreenColorControl);
