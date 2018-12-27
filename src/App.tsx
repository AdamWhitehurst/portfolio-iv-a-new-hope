import * as React from "react";
import { createStyles, withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./Components/Header";
import Splash from "./Components/Splash";

const styles = (theme: any) => createStyles({
  app: {
    display: "flex",
    width: "100%",
    flexGrow: 1,
    backgroundColor: "#3f3f40",
  }
});

const App = withStyles(styles)((props: any) => {
    const {classes} = props;
    return (
      <div className={classes.app}>
        <CssBaseline />
        <Header />
        <Splash />
        {/* <Experience /> */}
      </div>
    );
  }
);

export default App;
