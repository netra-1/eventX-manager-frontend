import { Routes, Route } from 'react-router-dom'
import AdminDashboard from './manager/dashbord/dashboard';
import AddEventType from './manager/eventTypes/add_event_type';
import { cakeColumns, decorationColumns, eventTypeColumns, themeColumns, venueColumns } from './datatable/datatablesource';

const Body = () =>{
    return(
        <>
        <Routes>
            <Route path = '/' element={<AdminDashboard/>}/>

            <Route path="/event-type" element={ <AddList columns={eventTypeColumns} /> } />
            <Route path="/event-type/new" element={ <AddEventType /> } />
        </Routes>
        </>
    )
}

export default Body;