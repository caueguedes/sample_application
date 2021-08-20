import React, { useState } from 'react';

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'


const selectOptions = [
  {value: 0, label: 'Red'},
  {value: 1, label: 'White'},
  {value: 2, label: 'Rose'},
  {value: 3, label: 'Sparkling'},
]

function BottleForm({isEditing, title, bottle, errors, bottlesPath}){
  const [editing, setEditing] = useState(isEditing);
  const [type, setType] = useState(bottle.bottle_type);
  const {
    name = '',
    brand = '',
    bottled = '',
    coloring = '',
    country = '',
    description = '',
  } = bottle;

  const handleChange = (value) => {
    setType(value);
  };

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
        <Grid item xs={12} md={6}>
          <TextField
            id="bottle_name"
            name="bottle[name]"
            label="Name"
            fullWidth
            required
            defaultValue={name}
            error={errors.name}
            InputProps={{ readOnly: !editing }}
          />
          <Typography variant="inherit" color="error" display="block" >
            {errors.name}
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            id="bottle_brand"
            name="bottle[brand]"
            label="Brand"
            fullWidth
            required
            defaultValue={brand}
            error={errors.brand}
            InputProps={{ readOnly: !editing }}
          />
          <Typography variant="inherit" color="error" display="block" >
            {errors.brand}
          </Typography>
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            id="bottle_country"
            name="bottle[country]"
            label="Country"
            fullWidth
            required
            defaultValue={country}
            error={errors.country}
            InputProps={{ readOnly: !editing }}
          />
          <Typography variant="inherit" color="error" display="block" >
            {errors.country}
          </Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <TextField
            id="bottle_bottled"
            name="bottle[bottled]"
            label="Bottled"
            type="number"
            fullWidth
            defaultValue={bottled}
            error={errors.bottled}
            InputProps={{ readOnly: !editing }}
          />
          <Typography variant="inherit" color="error" display="block" >
            {errors.bottled}
          </Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <InputLabel id="bottle_type_label">Type</InputLabel>
          <Select
            id="bottle_type"
            labelId="bottle_type_label"
            name="bottle[bottle_type]"
            onChange={(e) => handleChange(e.target.value)}
            value={type}
            fullWidth
            disabled={!editing}
          >
            {selectOptions.map(item =>
              <MenuItem value={item.value}>
                {item.label}
              </MenuItem>
            )}
          </Select>
          <Typography variant="inherit" color="error" display="block" >
            {errors.bottle_type}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="bottle_coloring"
            name="bottle[coloring]"
            label="Coloring"
            fullWidth
            defaultValue={coloring}
            error={errors.coloring}
            InputProps={{ readOnly: !editing }}
          />
          <Typography variant="inherit" color="error" display="block" >
            {errors.coloring}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="bottle_description"
            name="bottle[description]"
            label="Description"
            fullWidth
            defaultValue={description}
            error={errors.description}
            InputProps={{readOnly: !editing}}
            multiline={3}
          />
          <Typography variant="inherit" color="error" display="block" >
            {errors.description}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button  variant="contained" color="default" href={bottlesPath}>
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

export default BottleForm;
