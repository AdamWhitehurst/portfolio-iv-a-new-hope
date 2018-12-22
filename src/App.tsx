import * as React from "react";
import { withStyles, createStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./Components/Header";
import Splash from "./Components/Splash";

const styles = (theme: any) =>
  createStyles({
    app: {
      display: "flex",
      width: "100%",
      height: "50rem",
      flexGrow: 1,
      flexDirection: "column"
    }
  });

function App(props: any) {
  const { classes } = props;
  return (
    <div className={classes.app}>
      <CssBaseline />
      <Header />
      <Splash />
      {/* <Experience /> */}
    </div>
  );
}

export default withStyles(styles)(App);
