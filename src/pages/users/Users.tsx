import { GridColDef } from '@mui/x-data-grid';
import DataTable from '../../components/dataTable/DataTable';
import './user.scss';
import { userRows } from '../../data';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'img',
    headerName: 'Avatar',
    width: 80,
    renderCell: (params) => {
      return <img src={params.row.img || '/noavatar.png'} alt='' />;
    },
  },
  {
    field: 'firstName',
    type: 'string',
    headerName: 'First name',
    width: 100,
  },
  {
    field: 'lastName',
    type: 'string',
    headerName: 'Last name',
    width: 100,
  },
  {
    field: 'email',
    type: 'string',
    headerName: 'Email',
    width: 200,
  },
  {
    field: 'phone',
    type: 'string',
    headerName: 'Phone',
    width: 100,
  },
  {
    field: 'createdAt',
    headerName: 'Created At',
    width: 100,
    type: 'string',
  },
  {
    field: 'verified',
    headerName: 'Verified',
    width: 100,
    type: 'boolean',
  },
];

const Users = () => {
  return (
    <div className='users'>
      <div className='info'>
        <h1>Users</h1>
        <button>Add new user</button>
      </div>
      <DataTable columns={columns} rows={userRows} slug='users' />
    </div>
  );
};
export default Users;
