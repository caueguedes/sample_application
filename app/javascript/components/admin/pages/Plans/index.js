import * as React from 'react';

import { Typography } from "@material-ui/core";

import DataGrid from "../../components/DataGrid";
import ShowButton from "../../components/DataGrid/ShowButton";
import DeleteButton from "../../components/DataGrid/DeleteButton";

const columns = [
  { field: 'title', headerName: 'Title', width: 120 },
  { field: 'subtitle', headerName: 'Subtitle', width: 120 },
  { field: 'price', headerName: 'Price', width: 120 },
  { field: 'description', headerName: 'Description', flex: 1 },
  { field: 'show', renderCell: (params) => <ShowButton showPath={`/admin/plans/${params.row.id}`} /> },
  { field: 'delete', renderCell: (params) => <DeleteButton deletePath={`/admin/plans/${params.row.id}`} /> },
];


function Plans({rows}) {
  return (
    <div style={{ width: '100%' }}>
      <Typography component="h1" variant="h4" >
        Plans
      </Typography>
      <DataGrid
        columns={columns}
        rows={rows}
      />
    </div>
  );
}

export default Plans;