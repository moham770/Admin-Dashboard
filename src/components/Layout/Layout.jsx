
import {Outlet} from 'react-router-dom'
import Navbar from './../Navbar/Navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from 'react';
import { useMemo } from 'react';
import { getDesignTokens } from '../../theme';




const Layout = () => {
const [mode, setMode] = useState(localStorage.getItem('theme') || 'dark');


 const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);


  return <>

      <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar setMode={setMode}/>
      </ThemeProvider>
  
   
  
  </>
}

export default Layout
