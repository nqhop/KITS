import logo from './logo.svg';
import './App.css';

import { HelloButton, RedButton } from './components/Button';
import { Hello } from './components/Hello';
import { Counter, Counter2 } from './components/Counter';

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
        
        <Counter2 />
        
      </header>
    </div>
  );
}

export default App;
