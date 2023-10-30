import * as React from 'react';
import {Box,styled,CssBaseline} from '@mui/material';
import Topbar from '../../muiComponents/Topbar/Topbar';
import Sidebar from '../../muiComponents/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';



export default function MiniDrawer({setMode}) {

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));
  

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

    <Topbar setMode={setMode} handleDrawerOpen={handleDrawerOpen} open={open}/>

    <Sidebar handleDrawerClose={handleDrawerClose} open={open} DrawerHeader={DrawerHeader}/>



      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
    <Outlet/>
  
      </Box>
    </Box>
  );
}