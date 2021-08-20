import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { CardContainer } from './card';
import { DefaultLayout } from "../../components/Layouts";

import { allPlansSelector, plansActions } from "../../store/plan";

import { useStyles } from "./style";

const Pricing = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const plans = useSelector(allPlansSelector);

  useEffect(() =>{
    dispatch(plansActions.loadPlans())
  },[0])


  return (
    <DefaultLayout>
      <Container maxWidth="md" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Our Special Wine Plans
        </Typography>

        <Grid container spacing={5} alignItems="flex-end" justifyContent="space-evenly">
          {plans &&
            plans.map(plan =>
              <CardContainer
                {...plan}
                key={plan.id}
              />
          )}
        </Grid>
      </Container>

      <Container maxWidth="md" component="main">
        <Typography className={classes.pricingLabel} variant="h4" align="center" color="textPrimary" component="p">
          Discover the Membership benefits and find out why it's worth subscribing to the Wine Club.
        </Typography>

        <Typography variant="h5" align="center" color="textSecondary" component="p">
          Every month, handpicked wines by our experts, Winehunters.
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          Try the most amazing wines around the world.
          From the classic Toro Loco to the renowned VIK, our Winehunters look for the most surprising specimens.
        </Typography>
      </Container>

    </DefaultLayout>
  )
}

export default Pricing;