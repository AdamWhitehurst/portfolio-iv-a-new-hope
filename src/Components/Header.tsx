import * as React from "react";
import { withStyles, createStyles } from "@material-ui/core/styles";
import LogoSVG from "../assets/logo.js";
import { Typography } from "@material-ui/core";

const styles = (theme: any) => {
  console.log(styles);
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
      backgroundColor: "#3f3f40",
      borderColor: "white",
      borderBottomWidth: "0.1rem",
      borderBottomStyle: "solid",
    },
    sideLink: {
      lineHeight: "0.6",
      color: "white",
      fontFamily: "Damion",
      textAlign: "center",
      alignSelf: "end",
      flex: 1
    },
    'sideSection > Typography': {
      color:'white',
    },

    middleSection: {
      flex: "4"
    },
    logoText: {
      fill: "white"
    },
    logoBackground: {
      fill: "#3f3f40"
    }
  });
};

function Header(props: any) {
  const { classes } = props;

  return <div className={classes.headerContainer}>
      <div className={classes.sideSection}>
        <Typography variant='h5' className={classes.sideLink} >About</Typography>
        <Typography variant='h5' className={classes.sideLink} >About</Typography>
      </div>
      <div className={classes.middleSection}>
        <LogoSVG textStyle={classes.logoText} backgroundStyle={classes.logoBackground} />
      </div>
      <div className={classes.sideSection}>
        <Typography variant='h5' className={classes.sideLink} >About</Typography>
        <Typography variant='h5' className={classes.sideLink} >About</Typography>
      </div>
    </div>;
}

export default withStyles(styles)(Header);
