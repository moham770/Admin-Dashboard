import { Box, Button, Stack } from "@mui/material";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';

import Header from './../../components/Header/Header';
export default function Dashboard() {
  return (
    <>
   <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
   <Header isDashboard={true} Title={"DASHBOARD"} subTitle={"Welcome to your dashboar"}/>

<Box sx={{textAlign:'right',mb:2}}>
  <Button sx={{textTransform:'capitalize'}} startIcon={<DownloadOutlinedIcon/>} variant="contained">download reports</Button>
  </Box>  
   </Stack>
      <Row1 />
      <Row2 />


      
      <Row3 />
    </>
  );
}
