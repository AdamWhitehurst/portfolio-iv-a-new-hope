import * as React from "react";
import { withStyles, createStyles } from "@material-ui/core/styles";
import * as bgImage from "../Assets/bg.png";
import TFCanvas from "./TFCanvas.js";

const styles = (theme: any) =>
  createStyles({
    splashContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignContent: "center",
      height: "100vh",
      width: "100%",
      backgroundColor: "DarkSeaGreen",
      backgroundImage: `url(${bgImage})`,
      backgroundRepeat: 'repeat',
    }
  });

function Splash(props: any) {
  const { classes } = props;

  return (
    <div className={classes.splashContainer}>
      <TFCanvas />
    </div>
  );
}

export default withStyles(styles)(Splash);
