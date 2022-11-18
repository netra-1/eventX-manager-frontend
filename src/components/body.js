import { Routes, Route } from 'react-router-dom'
import AdminDashboard from './manager/dashbord/dashboard';
import AddEventType from './manager/eventTypes/add_event_type';
import { cakeColumns, decorationColumns, eventTypeColumns, themeColumns, venueColumns } from './datatable/datatablesource';
import UpdateEventType from './manager/eventTypes/update_event_type';
import AddVenue from './manager/venue/add_venue';
import UpdateVenue from './manager/venue/update_venue';
import AddTheme from './manager/theme/add_theme';
import UpdateTheme from './manager/theme/update_theme';
import AddCake from './manager/cake/add_cake';
import UpdateCake from './manager/cake/update_cake';
import AddDecoration from './manager/decoration/add_decoration';
import UpdateDecoration from './manager/decoration/update_decoration';

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
            <Route path="/venue/update/:venueId" element={ <UpdateVenue /> } />

            <Route path="/theme" element={ <AddList columns={themeColumns} /> } />
            <Route path="/theme/new" element={ <AddTheme /> } />
            <Route path="/theme/update/:themeId" element={ <UpdateTheme /> } />

            <Route path="/cake" element={ <AddList columns={cakeColumns} /> } />
            <Route path="/cake/new" element={ <AddCake /> } />
            <Route path="/cake/update/:cakeId" element={ <UpdateCake /> } />

            <Route path="/decoration" element={ <AddList columns={decorationColumns} /> } />
            <Route path="/decoration/new" element={ <AddDecoration /> } />
            <Route path="/decoration/update/:decorationId" element={ <UpdateDecoration /> } />
            
        </Routes>
        </>
    )
}

export default Body;