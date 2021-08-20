import React from "react";

import Button from "@material-ui/core/Button";
import { Card } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";
import StarIcon from "@material-ui/icons/StarBorder";
import Typography from "@material-ui/core/Typography";

import { useStyles } from "./style";

import routes from '../../config/routes.json'


export const CardContainer = ({title, subtitle, price, description}) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={title === 'Enterprise' ? 12 : 6} md={4}>
      <Card >
        <CardHeader
          title={title}
          subheader={subtitle}
          titleTypographyProps={{ align: 'center' }}
          subheaderTypographyProps={{ align: 'center' }}
          action={title === 'Pro'
            ? <StarIcon />
            : null
          }
          className={classes.cardHeader}
        />
        <CardContent>
          <div className={classes.cardPricing}>
            <Typography
              component="h2"
              variant="h3"
              color="textPrimary"
            >
              ${price}
            </Typography>
            <Typography
              variant="h6"
              color="textSecondary"
            >
              /mo
            </Typography>
          </div>
          <ul>
            {description.map(line =>
              <Typography
                component="li"
                variant="subtitle1"
                align="center"
                key={line}
              >
                {line}
              </Typography>
            )}
          </ul>
        </CardContent>
        <CardActions>
          <Button
            fullWidth
            variant="outlined"
            color="primary"
            href={routes.REGISTER.path}
          >
            Register
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}