import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import './dataTable.scss';
import { Link } from 'react-router-dom';

type Props = {
  columns: GridColDef[];
  rows: object[];
  slug: string;
};

const DataTable = ({ columns, rows, slug }: Props) => {
  const handleDelete = (id: number) => {
    console.log(id, 'has been deleted');
  };
  const actionColumn: GridColDef = {
    field: 'action',
    headerName: 'Action',
    width: 130,
    renderCell: (params) => {
      return (
        <div className='action'>
          <Link to={`${slug}/${params.row.id}`}>
            <img src='/view.svg' alt='action' />
          </Link>
          <div className='delete' onClick={() => handleDelete(params.row.id)}>
            <img src='./delete.svg' alt='delete' />
          </div>
        </div>
      );
    },
  };
  return (
    <div className='dataTable'>
      <DataGrid
        className='dataGrid'
        rows={rows}
        columns={[...columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 1000 },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  );
};
export default DataTable;
