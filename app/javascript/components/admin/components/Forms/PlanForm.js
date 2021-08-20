import React, { useState } from 'react';

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'


function UnitForm({isEditing, title: pageTitle, plan, errors, plansPath}){
  const [editing, setEditing] = useState(isEditing)
  const [descriptionList, setDescriptionList] = useState(plan.description)
  const {
    price = '',
    subtitle = '',
    title = '',
  } = plan;

  const handleAdd = () => {
    const temporaryList =  [...descriptionList, `description ${descriptionList.length + 1}`];
    setDescriptionList(temporaryList);
  }

  const handleEdit = () => {
    editing && document.forms[0].submit()
    setEditing(true)
  }

  const handleRemove = (index) => {
    const temporaryList = descriptionList.filter((item, idx) => (idx !== index));
    setDescriptionList(temporaryList);
  }

  return (
    <>
      <Typography variant="h6" gutterBottom>
        {pageTitle}
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            id="plan_title"
            name="plan[title]"
            label="Title"
            fullWidth
            required
            defaultValue={title}
            error={errors.title}
            InputProps={{ readOnly: !editing }}
          />
          <Typography variant="inherit" color="error" display="block" >
            {errors.title}
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            id="plan_subtitle"
            name="plan[subtitle]"
            label="Subtitle"
            fullWidth
            defaultValue={subtitle}
            error={errors.subtitle}
            InputProps={{ readOnly: !editing }}
          />
          <Typography variant="inherit" color="error" display="block" >
            {errors.subtitle}
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            id="plan_price"
            name="plan[price]"
            label="Price"
            type="number"
            fullWidth
            required
            defaultValue={price}
            error={errors.price}
            InputProps={{ readOnly: !editing }}
          />
          <Typography variant="inherit" color="error" display="block" >
            {errors.price}
          </Typography>
        </Grid>

        {descriptionList.map((item, index) =>
          <Grid key={item} item xs={12} md={6} lg={4}>
            <TextField
              id={`plan_description_${index}`}
              name={`plan[description][]`}
              label="Description"
              required
              defaultValue={item}
              error={errors.description}
              InputProps={{ readOnly: !editing }}
            />
            <Button
              onClick={() => handleRemove(index)}
              disabled={!editing}
              variant="contained"
              color="secondary"
              size="small"
            >
              Remove
            </Button>
          </Grid>
        )}
        <Typography variant="inherit" color="error" display="block" >
          {errors.description}
        </Typography>

        <Grid item xs={12} >
          <Button
            onClick={handleAdd}
            disabled={!editing}
            variant="contained"
            color="primary"
            size="small"
          >
            Add Description
          </Button>
        </Grid>


        <Grid item xs={12}>
          <Button  variant="contained" color="default" href={plansPath}>
            Return
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleEdit}
          >
            {editing? 'Save' : 'Edit'}
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default UnitForm;
