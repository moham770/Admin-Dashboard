
import { Typography, useTheme } from '@mui/material';
const NotFound = () => {
const theme= useTheme()

  return <>
   <Typography variant='h2' component={"h3"} align='center' color={theme.palette.error.dark}>Error 4O4</Typography>
   <Typography variant='h2' component={"h3"} align='center' color={theme.palette.error.dark}>Please Check The Path</Typography>
  </>

 
}

export default NotFound
