import React from 'react';
import { DashboardUser, DashboardProduct } from './containers/Dashboard';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<DashboardUser/>}/>
                <Route path='/DashboardUser' element={<DashboardUser/>}/>
                <Route path='/DashboardProduct' element={<DashboardProduct/>}/>
            </Routes>
            </Router>
    )
};
export default App;

