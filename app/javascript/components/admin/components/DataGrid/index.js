import React from 'react';
import { DataGrid } from "@material-ui/data-grid";

const DataPresenter = ({columns, rows}) => {
  return (
    <div style={{ width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns.map((column) => ({
          ...column,
          sortable: false,
        }))}
        autoHeight
        hideFooterPagination
        disableColumnFilter
        localeText={{
          toolbarDensity: 'Size',
          toolbarDensityLabel: 'Size',
          toolbarDensityCompact: 'Small',
          toolbarDensityStandard: 'Medium',
          toolbarDensityComfortable: 'Large',
        }}
      />
    </div>
  );
}

export default DataPresenter;


