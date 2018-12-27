import * as React from "react";
import { withStyles, createStyles } from "@material-ui/core/styles";

const styles = (theme: any) =>
  createStyles({
    splashContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignContent: "center",
      height: "120vh",
      width: "100%",
      backgroundColor: "lightgrey"
    },
    canvas: {
      alignSelf: "center",
      height: '50vh',
      width: '50vh',
      backgroundColor: "grey"
    }
  });

function Splash(props: any) {
  const { classes } = props;

  return (
    <div className={classes.splashContainer}>
      <div id="canvas" className= {classes.canvas}>
      
      </div>
    </div>
  );
}

export default withStyles(styles)(Splash);
