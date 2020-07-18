import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import useTheme from "@material-ui/core/styles/useTheme";
import { Link } from "react-router-dom";
let TopBar = (props) => {
  let theme = useTheme();
  console.log(props.bodyContent);
  return (
    <div>
      <AppBar color={"primary"} position={"sticky"}>
        <Toolbar>
          <div style={{ marginLeft: "auto", marginRight: "auto" }}>
            <Link to={"/"}>
              <Button color={"primary"}>
                <div style={{ color: theme.palette.primary.contrastText }}>
                  Home
                </div>
              </Button>
            </Link>
            <Link to={"/projects"}>
              <Button color={"primary"}>
                <div style={{ color: theme.palette.primary.contrastText }}>
                  Projects
                </div>
              </Button>
            </Link>
            <Link to={"/contact"}>
              <Button color={"primary"}>
                <div style={{ color: theme.palette.primary.contrastText }}>
                  Contact
                </div>
              </Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <div>{props.currentMenu}</div>
    </div>
  );
};

export default TopBar;
