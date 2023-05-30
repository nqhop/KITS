import React from 'react';
import { DashboardUser, DashboardProduct } from './containers/Dashboard';
import Users from './containers/Users';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<DashboardUser/>}/>
                <Route path='/dashboard/user' element={<DashboardUser/>}/>
                <Route path='/ashboard/roduct' element={<DashboardProduct/>}/>
                <Route path='/users' element={<Users/>}/>
            </Routes>
            </Router>
    )
};
export default App;

