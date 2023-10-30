import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { columns, rows } from "./contactData";
import Header from './../../components/Header/Header';


export default function Contacts() {




  return (
    <>
    <Header Title={"CONTACTS"} subTitle={"List of Contacts for Future Reference"}/>
    <Box sx={{ height: 600, width: "99%", mx: "auto", maxWidth: "100%" }}>
      <DataGrid
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
