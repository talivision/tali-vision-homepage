import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import useTheme from "@material-ui/core/styles/useTheme";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";

import mapImage from "../img/map.png";
import spotifyImage from "../img/spotify.png";
import palindromeImage from "../img/palindrome.png";
import productiveImage from "../img/productive.png";

export default function Content() {
  let theme = useTheme();
  return (
    <div>
      <div className="bodyParagraph">
        <p>
          I've worked on a number of things, here are a few of my favourites.
          <ProjectCard
            title="Where Am I Listening?"
            subtitle="A Flask-based webapp that uses a BeautifulSoup scraper to visualise where your favourite Spotify artists are from."
            imageURL={spotifyImage}
            link="http://spotify.tali.vision"
          ></ProjectCard>
          <ProjectCard
            title="Palindromes"
            subtitle="A collection of data and conclusions sorrounding the mysterious properites of Lychrel numbers."
            imageURL={palindromeImage}
            link="http://palindrome.tali.vision"
          ></ProjectCard>
          <ProjectCard
            title="Maps"
            subtitle="I've extensively used both QGIS and ArcGIS to produce a variety of high quality maps."
            imageURL={mapImage}
            link=""
          ></ProjectCard>
          <ProjectCard
            title="Productivity Tracker"
            subtitle="A site for tracking your good days, and for tracking your bad days. Binary data is king of course."
            imageURL={productiveImage}
            link="http://tracker.taliesindemestre.com"
          ></ProjectCard>
        </p>
      </div>
    </div>
  );
}
