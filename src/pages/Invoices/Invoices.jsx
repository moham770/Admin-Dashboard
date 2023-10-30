import { Box } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { columns, rows } from './invoicesData';
import Header from './../../components/Header/Header';

export default function Invoices() {
  return (
    <>
    <Header Title={'INVOICES'} subTitle={'List of Invoice Balances'}/>
    
    <Box sx={{ height: 600, width: "99%", mx: "auto", maxWidth: "100%" }}>
    <DataGrid
    checkboxSelection
     slots={{
      toolbar: GridToolbar,
    }}
      rows={rows}
      // @ts-ignore
      columns={columns}
    />
  </Box>
    </>

  )
}
