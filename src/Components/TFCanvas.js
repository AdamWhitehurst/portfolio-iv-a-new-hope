import * as React from "react";
import { withStyles, createStyles } from "@material-ui/core/styles";
import * as tf from "@tensorflow/tfjs";
import { Typography } from "@material-ui/core";
import {GenerateRandomNums} from "../Utils/Functions";

// Tensorflow definitions
const shape = [2, 5, 3];

const input = tf.input({shape: [5]});
const layer1 = tf.layers.dense({units: 10, activation: 'relu'});
const layer2 = tf.layers.dense({units: 5, activation: 'softmax'});
const output = layer2.apply(layer1.apply(input));
const model = tf.model({inputs: input, outputs: output});

const styles = (theme) => createStyles(
  {
    canvas: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignContent: "center",
      alignSelf: "center",
      alignItems: "center",
      height: '50vh',
      width: '50vh',
      backgroundColor: "#418641",
      borderColor: "white",
      borderWidth: "0.2rem",
      borderStyle: "solid",
      filter: "drop-shadow(1px 1px 1px rgba(0,0,0,.3))",
    }
  }
);


class TFCanvas extends React.Component {

  constructor (props) {
    super(props);

  }

  componentWillMount () {
    let newT = tf.tidy(() => {
      let nums = GenerateRandomNums(30);
      let t = tf.tensor3d(nums, shape, "int32");
      return t;
    });

    this.setState(oldState => {
      return ({testV: oldState.testV.assign(newT)});
    });
  }

  componentDidMount () {
    this.state.testV.print();
  }

  render () {
    const { classes } = this.props;
    return (
        <div id="canvas" className= {classes.canvas}>
          <Typography variant="overline">{this.state.testV.toString()}</Typography>
        </div>
    );
  }
}

export default withStyles(styles)(TFCanvas);
