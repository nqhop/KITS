// npm install styled-components@5.3.10
import logo from './logo.svg';
import './App.css';
import { Button } from 'components/Button';
import { Card } from 'components/Card/Card';

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

        <div className="App">
            <header className="App-header">

                <Button percent={10}>8.1%</Button>
                <Button textColor="red" percent={-10}>3.2%</Button>
                <Button width={77} height={32} textColor="white" bgColor="#5429FF">Following</Button>
                <Button width={77} height={32}  bgColor="rgba(84, 41, 255, 0.1)">Follow</Button>

                <Card title="Revenue" amount="5.00" percent={12.3}></Card>
                <Card title="Spending" amount="2.00" percent={8.1}></Card>
                <Card title="ROI" content="+14.02" percent={-5.1}></Card>
            </header>
        </div>

    );
}

export default App;
