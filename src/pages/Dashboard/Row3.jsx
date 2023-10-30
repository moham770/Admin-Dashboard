// @ts-nocheck
import { Paper, Stack, Typography, useTheme } from '@mui/material'
import Pai from '../PieChart/Pai'
import Bar from '../BarChart/Bar'
import GeoCmponent from '../Geography/GeoCmponent'


const Row3 = () => {
  const theme = useTheme()
  return (
    <><Stack gap={0.5} flexWrap={"wrap"} direction="row" mt={2}>
      <Paper  sx={{ width:'33%',minWidth:"400px" ,flexGrow:1}} isDashboard={true}>
        <Typography
        fontWeight={"bold"}
          color={theme.palette.secondary.main}
          padding={ "30px 30px 30px"}
         >Campaign
      </Typography>
      <Pai isDashboard={true} />

  <Typography sx={{mt:'15px'}} variant='h6' textAlign={"center"}>$48,352 revenue generated</Typography>
  <Typography align='center'  px={0.7} pb={2}>Includes extra misc expenditures and costs</Typography>

    </Paper>
    





    <Paper  sx={{ width: '33%',minWidth:"400px" ,flexGrow:1}}>
    <Typography
    fontWeight={"bold"}
          color={theme.palette.secondary.main}
          padding={ "30px 30px 30px"}
         >Campaign
      </Typography>
      <Bar  isDashboard={true} />
      </Paper>
      
      
      <Paper  sx={{ width: '33%',minWidth:"400px" ,flexGrow:1}}>
      <Typography
    fontWeight={"bold"}
          color={theme.palette.secondary.main}
          padding={ "30px 30px 30px"}
         >Geography Based Traffic
      </Typography>


      <GeoCmponent  isDashboard={true}/>

      </Paper>
      





    </Stack>
      </>
  )
}

export default Row3
