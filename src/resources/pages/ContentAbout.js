import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import useTheme from "@material-ui/core/styles/useTheme";

export default function ContentAbout() {
  let theme = useTheme();
  return (
    <div>
      <h1>Who?</h1>
      <div className="bodyParagraph">
        <p>Hey there, I'm Tali.</p>
        <p>
          I'm a student at the ANU, studying a Bachelor of Advanced Science in
          Applied Mathematics and Computer Science. In my free time I try to
          enjoy the finer things, such as all things outdoors and lawnmower
          engines.
        </p>
      </div>
    </div>
  );
}
