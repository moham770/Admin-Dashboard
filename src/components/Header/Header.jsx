import { Box, Typography,useTheme } from '@mui/material'
import React from 'react'

const Header = ({Title,subTitle ,isDashboard = false}) => {
    const theme = useTheme()
  return <Box mb={isDashboard ?3 :4}>
    <Typography fontWeight={"bold"}  variant='h5' color={theme.palette.primary.main}> {Title}</Typography>
    <Typography variant='body1' >{subTitle}</Typography>
  </Box>
}

export default Header
