/* eslint-disable no-dupe-keys */
import ReactDOM from 'react-dom/client'
import { createBrowserRouter ,RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard/Dashboard';
import Team from './pages/Team/Team';
import LineChart from './pages/LineChart/LineChart';
import PieChart from './pages/PieChart/PieChart';
import Invoices from './pages/Invoices/Invoices';
import Form from './pages/Form/Form';
import Contacts from './pages/Contacts/Contacts';
import Geography from './pages/Geography/Geography';
import Faq from './pages/Faq/Faq';
import BarChart from './pages/BarChart/BarChart';
import Calender from './pages/Calender/Calender';
// import NotFound from './pages/NotFound/NotFound';
import NotFound from './pages/NotFound/NotFound'
import './index.css'


const router =  createBrowserRouter([
        // @ts-ignore
        {element:'/',element:<Layout/>,children:[
        {index:true,element:<Dashboard/>},
        {path:'/team',element:<Team/>},
        {path:'/linechart',element:<LineChart/>},
        {path:'/piechart',element:<PieChart/>},
        {path:'/invoices',element:<Invoices/>},
        {path:'/form',element:<Form/>},
        {path:'/contacts',element:<Contacts/>},
        {path:'/geography',element:<Geography/>},
        {path:'/faq',element:<Faq/>},
        {path:'/barChart',element:<BarChart/>},
        {path:'/calender',element:<Calender/>},
        {path:'/geography',element:<Geography/>},
        {path:'*',element:<NotFound/>},
    ]}
])

ReactDOM.createRoot(document.getElementById('root')).render(

    <RouterProvider router={router}/>

   

)
