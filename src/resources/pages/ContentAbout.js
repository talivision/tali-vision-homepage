import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import useTheme from "@material-ui/core/styles/useTheme";

import meImage from "../img/me.jpg";

export default function ContentAbout() {
  let theme = useTheme();
  return (
    <div>
      <div className="bodyParagraph">
        <h1>Who?</h1>
        <p>Hey there, I'm Tali.</p>
        <img src={meImage} style={{"width": "100%"}} alt="picture of me with long hair vibing near a lake"></img>
        <h1>What?</h1>
        <p>
          I'm a regular person who currently lives in Canberra, Australia.
          Very occasionally I will make things and put them on the internet.
          Among my endeavours are:
          <ul>
            <li>
              <a href="/projects">Development</a>
            </li>
            <li>
              <a href="https://instagram.com/theactualmestre">Photography</a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCAMr6LCsc8JWuOilU-DXZsA">
                Videography
              </a>
            </li>
            <li>
              <a href="">Maps</a>
            </li>
            <li>
              <a href="https://soundcloud.com/tali-de-mestre">Music</a>
            </li>
            <li>
              <a href="https://www.strava.com/athletes/28695924">
                Physical Activity?
              </a>
            </li>
          </ul>
          It would be very cool if you thought the things I made were very cool.
          and told me about it.
        </p>
        <br></br>
        <h1>Oh My God How Do I Hire You?</h1>
        <p>
          I am currently not looking for employment but I'd be flattered if you
          <a href="mailto:talidemestre@gmail.com"> tried anyway</a>.<br></br>
          <br></br>
          Or just use that link to send me spam whatever you're vibing.
        </p>
      </div>
    </div>
  );
}
