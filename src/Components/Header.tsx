import * as React from "react";
import { withStyles, createStyles } from "@material-ui/core/styles";
import { LogoSVG } from "../assets/LogoSVG";
import { Typography } from "@material-ui/core";

const styles = (theme: any) => {
  return createStyles({
    headerContainer: {
      position: "fixed",
      top: 0,
      display: "flex",
      width: "100%",
      height: "10vh"
    },
    sideSection: {
      display: "flex",
      flexDirection: "row",
      flex: "10",
      backgroundColor: "#418641",
      borderColor: "white",
      borderBottomWidth: "0.14rem",
      borderBottomStyle: "solid",
      filter: "drop-shadow(1px 1px 1px rgba(0,0,0,.3))",
    },
    sideLink: {
      lineHeight: "0.7",
      color:'white',
      fontFamily: "damion",
      textAlign: "center",
      alignSelf: "end",
    },

    leftSideLink: {
      extend: "sideLink",
      textAlign: "end",
      flex: 10,
    },

    middleSideLink: {
      extend: "sideLink",
      flex: 1,
    },

    rightSideLink: {
      extend: "sideLink",
      textAlign: "start",
      flex: 10,
    },

    middleSection: {
      flex: 4,
      filter: "drop-shadow(1px 1px 1px rgba(0,0,0,.3))",
    },
    logoText: {
      fill: "white"
    },
    logoBackground: {
      fill: "#418641"
    }
  });
};

function Header(props: any) {
  const { classes } = props;

  return <div className={classes.headerContainer}>
      <div className={classes.sideSection}>
        <Typography variant='h5' className={`${classes.sideLink} ${classes.leftSideLink}`} >About</Typography>
        <Typography variant='h5' className={`${classes.sideLink} ${classes.middleSideLink}`} >+</Typography>
        <Typography variant='h5' className={`${classes.sideLink} ${classes.rightSideLink}`} >Stuff</Typography>
      </div>
      <div className={classes.middleSection}>
        <LogoSVG textStyle={classes.logoText} backgroundStyle={classes.logoBackground} />
      </div>
      <div className={classes.sideSection}>
        <Typography variant='h5' className={`${classes.sideLink} ${classes.leftSideLink}`} >Also</Typography>
        <Typography variant='h5' className={`${classes.sideLink} ${classes.middleSideLink}`} >+</Typography>
        <Typography variant='h5' className={`${classes.sideLink} ${classes.rightSideLink}`} >Things.</Typography>
      </div>
    </div>;
}

export default withStyles(styles)(Header);
