import * as React from "react";
import { withStyles, createStyles } from "@material-ui/core/styles";
import * as bgImage from "../assets/bg.png";


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
    },
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
