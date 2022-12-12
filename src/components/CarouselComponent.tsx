/* eslint-disable jsx-a11y/alt-text */
// import React, { Component } from "react";
// import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import "./slide.css";

export const Carousels = () => {
  return (
    <Stack sx={{ marginTop: "80px" }}>
      <Carousel className="main-slide">
        <div>
          <Card aria-orientation="vertical">
            <CardMedia component="img" alt="green iguana" height="140" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Card 1
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
                repudiandae magnam nisi cumque. Odit voluptatibus repellendus
                neque cupiditate assumenda totam ut harum molestiae, eligendi
                dolor maiores debitis aspernatur alias voluptatem?
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </div>
        <div>
          <Card aria-orientation="vertical">
            <CardMedia component="img" alt="green iguana" height="140" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Card 2
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laboriosam asperiores doloribus mollitia aliquam quo sapiente!
                Rem nulla, dicta ipsa accusantium commodi numquam debitis saepe
                neque quas ab perspiciatis, minus nobis?
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </div>
        <div>
          <Card aria-orientation="vertical">
            <CardMedia component="img" alt="green iguana" height="140" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Card 4
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
                provident soluta mollitia porro, voluptates labore vel quae
                quibusdam saepe voluptatem et atque nihil beatae ipsam doloribus
                debitis fuga iste eveniet?
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </div>
      </Carousel>
    </Stack>
  );
};
