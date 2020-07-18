import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import useTheme from "@material-ui/core/styles/useTheme";
import { Link } from "react-router-dom";

export default function Content() {
  let theme = useTheme();
  return (
    <div>
      <div className="bodyParagraph">
        <p>
          I've worked on a number of things, here are a few of my favourites.
        </p>
      </div>
    </div>
  );
}
