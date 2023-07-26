import { useState } from 'react';
import './products.scss';
import DataTable from '../../components/dataTable/DataTable';
import { GridColDef } from '@mui/x-data-grid';
import Add from '../../components/add/Add';
import { products } from '../../data';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'img',
    headerName: 'Image',
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || 'noavatar.png'} alt='' />;
    },
  },
  {
    field: 'title',
    type: 'string',
    headerName: 'Title',
    width: 150,
  },
  {
    field: 'color',
    type: 'string',
    headerName: 'Color',
    width: 80,
  },
  {
    field: 'price',
    type: 'string',
    headerName: 'Price',
    width: 100,
  },
  {
    field: 'producer',
    headerName: 'Producer',
    type: 'string',
    width: 150,
  },
  {
    field: 'createdAt',
    headerName: 'Created At',
    width: 100,
    type: 'string',
  },
  {
    field: 'inStock',
    headerName: 'In Stock',
    width: 80,
    type: 'boolean',
  },
];
const Products = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className='products'>
      <div className='info'>
        <h1>Products</h1>
        <button onClick={() => setOpen(true)}>Add new product</button>
      </div>
      <DataTable columns={columns} rows={products} slug='products' />
      {open && <Add setOpen={setOpen} columns={columns} slug='product' />}
    </div>
  );
};
export default Products;
