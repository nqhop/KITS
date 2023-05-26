// npm install styled-components@5.3.10

import { Route, Routes, Link } from 'react-router-dom';
import Login from 'containers/Login';
import Home from 'containers/Home';
import NotFoundPage from 'containers/NotFoundPage';
import Market from 'containers/Market';

// let allElements = [].slice.call(document.querySelectorAll('*'));
//     allElements.map(function(element) {
//     element.style.boxSizing = 'border-box';
// });

function App() {
    return (
        // <div className="App">
        //   <header className="App-header">
        //     <img src={logo} className="App-logo" alt="logo" />
        //     <p>
        //       Edit <code>src/App.js</code> and save to reload.
        //     </p>
        //     <a
        //       className="App-link"
        //       href="https://reactjs.org"
        //       target="_blank"
        //       rel="noopener noreferrer"
        //     >
        //       Learn React
        //     </a>
        //   </header>
        // </div>

        <>
            {/* <nav>
                <Link to='/'>Home</Link>
                <Link to='/login'>Login</Link>
            </nav> */}

            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/Market" element={<Market/>}/>
                <Route path='*' element={<NotFoundPage/>}/>
            </Routes>


        </>
    );
}

export default App;
