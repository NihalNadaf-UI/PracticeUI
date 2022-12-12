import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";

export default function CardDetails() {
  return (
    <Stack direction="row" spacing={2}>
      <Card aria-orientation="vertical" sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="./img1.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Card 1
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
            repudiandae magnam nisi cumque. Odit voluptatibus repellendus neque
            cupiditate assumenda totam ut harum molestiae, eligendi dolor
            maiores debitis aspernatur alias voluptatem?
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>

      <Card aria-orientation="vertical" sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Card 2
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
            asperiores doloribus mollitia aliquam quo sapiente! Rem nulla, dicta
            ipsa accusantium commodi numquam debitis saepe neque quas ab
            perspiciatis, minus nobis?
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>

      <Card aria-orientation="vertical" sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Card 3
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            nesciunt minima ipsum dolores in cum a quibusdam ducimus pariatur?
            Ducimus, nemo nisi tenetur iste consequuntur quas eaque quod
            excepturi? Porro!
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>

      <Card aria-orientation="vertical" sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
        />
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
    </Stack>
  );
}
