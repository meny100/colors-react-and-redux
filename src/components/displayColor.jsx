import { Component } from "react";
import { connect } from "react-redux";

class DisplayColor extends Component{
    state = {};

    render(){
      const {props: {color}} = this;

        return (<div className="div" 
        className="rounded border mt-5"
        style={{
            width:"500px",
             height:"200px",
             margin:"auto",
             background:`rgb(${color.red}, ${color.green}, ${color.blue})`
    }}></div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      color: state.color,
    };
  };


export default connect(mapStateToProps)(DisplayColor);
