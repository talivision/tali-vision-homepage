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
          You can get in contact with me by two proven methods:
          <ul>
            <li>
              Contacting me via email{" "}
              <a href="mailto:talidemestre@gmail.com">here</a>.
            </li>
            <li>
              Opening a merge request at me on GitHub{" "}
              <a href="https://github.com/talidemestre">here</a>.
            </li>
          </ul>
          Or use a carrier pigeon?
        </p>
      </div>
    </div>
  );
}
