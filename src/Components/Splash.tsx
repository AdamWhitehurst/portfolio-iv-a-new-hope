import * as React from "react";
import { withStyles, createStyles } from "@material-ui/core/styles";

const styles = (theme: any) =>
  createStyles({
    splashContainer: {
      height: "100vh",
      width: "100%",
      backgroundColor: "grey"
    }
  });

function Splash(props: any) {
  const { classes } = props;

  return <div className={classes.splashContainer} />;
}

export default withStyles(styles)(Splash);
