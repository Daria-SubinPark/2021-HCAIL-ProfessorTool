import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Typography from "@material-ui/core/Typography";

const Table = ({columns, rows, subQuestion}) =>
{
    return (
        <div>
            <div style={{ height: 400, width: '100%', marginTop: '5vh' }}>
                <Typography variant="caption" gutterBottom>
                    {subQuestion}
                </Typography>
                <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
            </div>
        </div>
    );
}

export default Table;