import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./data";
import { Box, Typography } from "@mui/material";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
import { useTheme } from "@emotion/react";

import Header from './../../components/Header/Header';
Header
export default function Team() {
  const theme = useTheme();

  const columns = [
    {
      field: "id",
      headerName: "ID",
      align: "center",
      headerAlign: "center",
      width: 33,
    },
    {
      field: "name",
      headerName: "Name",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    { field: "age", headerName: "Age", align: "center", headerAlign: "center" },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "Access",
      flex: {xs:1,sm:0},
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              p:{xs:'5px',sm:'5px'},
              width: { xs: "60px", sm: "99px" },
              borderRadius: "3px",
              textAlign: "center",
              display: "flex",
              justifyContent: "space-evenly",
              backgroundColor:
                access === "Admin"
                  ? theme.palette.primary.dark
                  : access === "Manager"
                  ? theme.palette.secondary.dark
                  : "#3da58a",
            }}>
            {access === "Admin" ? (
              <AdminPanelSettingsOutlined
                sx={{ color: "#fff",fontSize:{xs:"15px",sm:"20px"} }}
                
              />
            ) : access === "User" ? (
              <LockOpenOutlined sx={{ color: "#fff",fontSize:{xs:"15px",sm:"20px"} }}  />
            ) : (
              <SecurityOutlined sx={{ color: "#fff",fontSize:{xs:"15px",sm:"20px"} }}  />
            )}

            <Typography sx={{ fontSize:{xs:'14px',sm: "15px"}, color: "#fff" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <>
   
    <Header Title={"Team"} subTitle={"Managing the Team Members"}/>
    <Box sx={{ height: 600, width: "99%", mx: "auto", maxWidth: "100%" }}>
      <DataGrid
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </Box>
     </>
  );
}
