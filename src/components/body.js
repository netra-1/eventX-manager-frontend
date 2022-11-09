import { Routes, Route } from 'react-router-dom'
import AdminDashboard from './manager/dashbord/dashboard';

const Body = () =>{
    return(
        <>
        <Routes>
            <Route path = '/' element={<AdminDashboard/>}/>
        </Routes>
        </>
    )
}

export default Body;