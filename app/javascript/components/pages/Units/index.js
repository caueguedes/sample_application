import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import { Marker } from "google-maps-react";
import MapContainer from "./mapContainer";

import { DefaultLayout } from "../../components/Layouts";

import { allUnitsSelector, unitsActions } from "../../store/unit";

import { useStyles } from "./style";


const Units = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const units = useSelector(allUnitsSelector);

  useEffect(() =>{
    dispatch(unitsActions.loadUnits())
  },[0])

  return (
    <DefaultLayout>
      <Container maxWidth="md" component="main" >
        <Typography
          className={classes.title}
          variant="h4"
          align="center"
          color="textPrimary"
          component="p"
        >
          Our Units
        </Typography>

        <div className={classes.mainContainer}>
          {units &&
            <MapContainer
              center={{
                lat: units[0]?.latitude || 38.21,
                lng: units[0]?.longitude || -95.95
              }}
            >
              { units &&
                units.map((unit, index) => (
                  <Marker
                    key={index}
                    name={unit.name}
                    position={{
                      lat: unit.latitude,
                      lng: unit.longitude
                    }}
                  />
                ))
              }
            </MapContainer>
          }
        </div>
      </Container>
    </DefaultLayout>
  );
};

export default Units;