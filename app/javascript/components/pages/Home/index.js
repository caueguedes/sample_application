import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Pagination from '@material-ui/lab/Pagination';

import BottleCard from "./BottleCard";
import { DefaultLayout } from "../../components/Layouts";

import { useStyles } from "./style";

import {
  allBottlesSelector,
  totalPagesSelector,
  bottleActions
} from "../../store/bootle";


const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const bottles = useSelector(allBottlesSelector);
  const total_pages = useSelector(totalPagesSelector);
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    dispatch(bottleActions.loadBottles(page));
    console.log(bottles)
  },[page]);

  return (
    <DefaultLayout>
      <Container
        className={classes.cardGrid}
        maxWidth="md"
      >
        <Grid
          container
          spacing={4}
        >
          {bottles.length > 0
            ? (bottles.map(bottle =>
                <BottleCard
                  key={bottle.id}
                  {...bottle}
                />
              ))
            : <Typography
                component="h1"
                variant="h5"
              >
                No content available
              </Typography>
          }
        </Grid>
      </Container>

      <Container
        className={classes.bottlesPaginator}
      >
        <Pagination
          count={total_pages}
          shape="rounded"
          onClick={scrollToTop}
          onChange={handleChange}
        />
      </Container>
    </DefaultLayout>
  );
};

export default Home;