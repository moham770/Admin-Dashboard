import { Box, IconButton, Paper, Stack, Typography, useTheme } from "@mui/material"
import Line from "../../pages/LineChart/Line"
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import { Transactions } from "./data";



const Row2 = () => {

  const theme = useTheme()
  return (
   <Stack direction="row" flexWrap={"wrap"} gap={2} mt={2}>
    <Paper sx={{maxWidth:'800px',flexGrow:1}}>
    <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} mr={3} ml={4} mt={2}>
      <Box>
        <Typography variant="h6" color={theme.palette.secondary.main} fontWeight="bold">Revenue Generated</Typography>
        <Typography>$59,342.32</Typography>
        
      </Box>
      <Box>
        <IconButton>
    <DownloadOutlinedIcon/>
        </IconButton>
        
      </Box>
        

    </Stack>

    <Line isDashboard={true} />
    </Paper>


    <Box sx={{height:420,flexGrow:1,overflow:'auto'}}>
      <Paper  sx={{p:1.5,mb:1}}>
        <Typography variant="h6" sx={{color:theme.palette.secondary.main,fontWeight:"bold"}}>Recent Transactions</Typography>
      </Paper>

      {Transactions.map((item,index)=>{
      return   <Paper    key={index} sx={{mb:1,p:1.5}} >
        <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography fontWeight={"bold"}>{item.txId}</Typography>
          <Typography>{item.user}</Typography>
        </Box>
        <Typography>{item.date}</Typography>
        <Typography width={"90px"} textAlign={"center"} p={0.5} borderRadius={"3px"} color={"white"} bgcolor={theme.palette.error.main}> ${item.cost}</Typography>

        </Stack>
      </Paper>
      



      })}
     

    </Box>

   </Stack>
  )
}

export default Row2
