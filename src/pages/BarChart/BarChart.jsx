import Bar from "./Bar"
import Header from './../../components/Header/Header';





const BarChart = () => {
  return (
    <>
     <Header
        Title="Bar Chart"
        subTitle="The minimum wage in Germany, France and Spain (EUR/month)"
      />
    <Bar  isDashboard={false}/>
    </>
  )
}

export default BarChart
