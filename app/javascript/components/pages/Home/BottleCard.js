import React from "react";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { useStyles } from "./style";
import { CardMedia } from "@material-ui/core";


const BottleCard = ({description, image, name}) => {
  const classes = useStyles();
  return (
    <Grid
      item
      xs={12} sm={6} md={4}
    >
      <Card
        className={classes.card}
      >
        <CardMedia
          className={classes.cardMedia}
          image={image}
          title={name}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography>
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            fullWidth
          >
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default BottleCard;
