import { Box} from "@mui/material"
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import CardRow1 from "./CardRow1";
import { data1, data2, data3, data4 } from "./data";

const Row1 = () => {
  return (
  <Box sx={{display:'flex',gap:1,justifyContent:'space-between',flexWrap:'wrap'}}>
    <CardRow1 scheme={"nivo"} icon={<EmailIcon color="secondary"/>} title={'12,361'} subtitle={"Email Sent"}  data={data1} carttext={"+14%"}/>
    <CardRow1 scheme={"accent"} icon={<PointOfSaleIcon color="secondary"/>} title={'431,225'} subtitle={"Sales obtained"} data={data2} carttext={"+21%"}/>
    <CardRow1 scheme={"category10"} icon={<PersonAddIcon color="secondary"/>} title={'32,441'} subtitle={"New Clients"} data={data3} carttext={"+5%"}/>
    <CardRow1 scheme={"dark2"} icon={<TrafficIcon color="secondary"/>} title={'1,325,134'} subtitle={"Traffic Received"} data={data4} carttext={"+43%"}/>
  </Box>
  )
}

export default Row1
