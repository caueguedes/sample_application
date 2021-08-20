import React, { useState } from 'react';

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'


function UnitForm({isEditing, title, unit, errors, unitsPath}){
  const [editing, setEditing] = useState(isEditing)
  const {
    name = '',
    address = '',
    city = '',
    neighborhood = '',
    phone = '',
    latitude = '',
    longitude = '',
  } = unit;

  const handleEdit = () => {
    editing && document.forms[0].submit()
    setEditing(true)
  }

  return (
    <>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            id="unit_name"
            name="unit[name]"
            label="Name"
            fullWidth
            required
            error={errors.name}
            defaultValue={name}
            InputProps={{ readOnly: !editing }}
          />
          <Typography variant="inherit" color="error" display="block" >
            {errors.name}
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            id="unit_city"
            name="unit[city]"
            label="City"
            fullWidth
            required
            error={errors.city}
            defaultValue={city}
            InputProps={{ readOnly: !editing }}
          />
          <Typography variant="inherit" color="error" display="block" >
            {errors.city}
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            id="unit_neighborhood"
            name="unit[neighborhood]"
            label="Neighborhood"
            fullWidth
            defaultValue={neighborhood}
            error={errors.neighborhood}
            InputProps={{ readOnly: !editing }}
          />
          <Typography variant="inherit" color="error" display="block" >
            {errors.neighborhood}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="unit_address"
            name="unit[address]"
            label="Address"
            fullWidth
            required
            defaultValue={address}
            error={errors.address}
            InputProps={{ readOnly: !editing }}
          />
          <Typography variant="inherit" color="error" display="block" >
            {errors.address}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="unit_phone"
            name="unit[phone]"
            label="Phone"
            placeholder="xxx-xxx-xxxx"
            defaultValue={phone}
            error={errors.phone}
            InputProps={{ readOnly: !editing }}
          />
          <Typography variant="inherit" color="error" display="block" >
            {errors.phone}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="unit_latitude"
            name="unit[latitude]"
            label="Latitude"
            type="number"
            fullWidth
            required
            defaultValue={latitude}
            error={errors.latitude}
            InputProps={{ readOnly: !editing }}
          />
          <Typography variant="inherit" color="error" display="block" >
            {errors.latitude}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="unit_longitude"
            name="unit[longitude]"
            label="Longitude"
            type="number"
            fullWidth
            required
            defaultValue={longitude}
            error={errors.longitude}
            InputProps={{readOnly: !editing}}
          />
          <Typography variant="inherit" color="error" display="block" >
            {errors.longitude}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button  variant="contained" color="default" href={unitsPath}>
            Return
          </Button>
          <Button  variant="contained" color="primary" onClick={handleEdit}>
            {editing? 'Save' : 'Edit'}
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default UnitForm;
