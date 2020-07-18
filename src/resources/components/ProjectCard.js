import React from "react";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
export default function ProjetCard(props) {
  return (
    <div>
      <br></br>
      <a href={props.link} style={{"textDecoration" : "none"}}>
        <Card style={{ textAlign: "center" }}>
          <CardContent>
            <Typography
              color="textPrimary"
              variant="h5"
              component="h2"
              gutterBottom
            >
              {props.title}
            </Typography>

            <img
              src={props.imageURL}
              alt={`${props.title}'s picture`}
              style={{ width: "100%" }}
            />

            <Typography variant="body2" component="p">
              {props.subtitle}
            </Typography>
          </CardContent>

          <CardActions>
            <Button href={props.link} size="small">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </a>
    </div>
  );
}
