import logo from './logo.svg';
import './App.css';

import { HelloButton, RedButton } from './components/Button';
import { Hello } from './components/Hello';
import { Counter, Counter2, Counter3 } from './components/Counter';
import styled from 'styled-components';

const BlackCounter = styled(Counter3)`
  .count-number{
    color: black;
  }
`;
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Hello name="Hop" age="18"></Hello>
        <p>Hello world</p>
        <HelloButton text="Hi"></HelloButton>
        <RedButton></RedButton>
        <Counter /> */}
        
        {/* <Counter2 /> */}
        <Counter3 />
        <br/>
        <BlackCounter />
        
      </header>
    </div>
  );
}

export default App;
