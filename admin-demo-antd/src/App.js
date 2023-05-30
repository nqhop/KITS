import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyLayout from './components/MyLayout';
import User from './containers/User';
function App() {
    return (
        <Router>
            <Routes>

                {/* <Route path='/' element={<MyLayout/>} /> */}
                <Route path='/' element={<User/>} />
            </Routes>
        </Router>
    );
}

export default App;
