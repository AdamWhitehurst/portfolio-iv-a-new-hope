import * as React from "react";
import { withStyles, createStyles } from "@material-ui/core/styles";
import Logo from "../Assets/logo.svg";

const styles = (theme: any) =>
  createStyles({
    headerContainer: {
      position: "fixed",
      top: 0,
      display: "flex",
      width: "100%",
      height: "10vh"
    },

    sideSection: {
      flex: "10",
      backgroundColor: "white",
      borderColor: "black",
      borderBottomWidth: "0.1rem",
      borderBottomStyle: "solid"
    },

    middleSection: {
      flex: "4"
    },

    logo: {
      height: "100%",
      width: "100%"
    }
  });

function Header(props: any) {
  const { classes } = props;

  return <div className={classes.headerContainer}>
      <div className={classes.sideSection} />
      <div className={classes.middleSection}>
        {Logo}
      </div>
      <div className={classes.sideSection} />
    </div>;
}

export default withStyles(styles)(Header);
