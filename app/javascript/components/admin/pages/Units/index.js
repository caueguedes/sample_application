import * as React from 'react';

import { Typography } from "@material-ui/core";

import DataGrid from "../../components/DataGrid";
import Pagination from "../../components/Pagination";
import ShowButton from "../../components/DataGrid/ShowButton";
import DeleteButton from "../../components/DataGrid/DeleteButton";

const columns = [
  { field: 'name', headerName: 'Name', width: 120 },
  { field: 'address', headerName: 'Address', flex: 1 },
  { field: 'city', headerName: 'City', width: 120 },
  { field: 'neighborhood', headerName: 'Neighborhood', width: 120 },
  { field: 'phone', headerName: 'Phone', width: 120 },
  { field: 'show', renderCell: (params) => <ShowButton showPath={`/admin/units/${params.row.id}`} /> },
  { field: 'delete', renderCell: (params) => <DeleteButton deletePath={`/admin/units/${params.row.id}`} /> },
];


function Units({rows, ...props}) {
  return (
    <div style={{ width: '100%', height: '600px' }}>
      <Typography component="h1" variant="h4" >
        Units
      </Typography>
      <DataGrid
        columns={columns}
        rows={rows}
      />
      <Pagination {...props} />
    </div>
  );
}

export default Units;