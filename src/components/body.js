import { Routes, Route } from 'react-router-dom'
import AdminDashboard from './manager/dashbord/dashboard';
import AddEventType from './manager/eventTypes/add_event_type';
import { cakeColumns, decorationColumns, eventTypeColumns, themeColumns, venueColumns } from './datatable/datatablesource';
import UpdateEventType from './manager/eventTypes/update_event_type';
import AddVenue from './manager/venue/add_venue';

const Body = () =>{
    return(
        <>
        <Routes>
            <Route path = '/' element={<AdminDashboard/>}/>

            <Route path="/event-type" element={ <AddList columns={eventTypeColumns} /> } />
            <Route path="/event-type/new" element={ <AddEventType /> } />
            <Route path="/event-type/update/:eventTypeId" element={ <UpdateEventType /> } />

            <Route path="/venue" element={ <AddList columns={venueColumns} /> } />
            <Route path="/venue/new" element={ <AddVenue /> } />
            
        </Routes>
        </>
    )
}

export default Body;