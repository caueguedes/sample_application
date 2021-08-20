import * as React from 'react';

import { Typography } from "@material-ui/core";

import DataGrid from "../../components/DataGrid";
import DeleteButton from "../../components/DataGrid/DeleteButton";
import Pagination from "../../components/Pagination";
import ShowButton from "../../components/DataGrid/ShowButton";
import AddButton from "../../components/DataGrid/AddButton";

const columns = [
  { field: 'name', headerName: 'Name', width: 120 },
  { field: 'brand', headerName: 'Brand', width: 120 },
  { field: 'country', headerName: 'Country', width: 120 },
  { field: 'description', headerName: 'Description', flex: 1 },
  { field: 'show', renderCell: (params) => <ShowButton showPath={`/admin/bottles/${params.row.id}`} /> },
  { field: 'delete', renderCell: (params) => <DeleteButton deletePath={`/admin/bottles/${params.row.id}`} /> }
];


function Bottles({rows, ...props}) {
  return (
    <div style={{ width: '100%' }}>
      <Typography component="h1" variant="h4" >
        Bottles
      </Typography>
      <AddButton href="/admin/bottles/new" />
      <DataGrid
        columns={columns}
        rows={rows}
      />
      <Pagination {...props} />
    </div>
  );
}

export default Bottles;