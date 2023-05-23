import logo from './logo.svg';
import './App.css';

import { HelloButton, RedButton } from './components/Button';
import { Hello } from './components/Hello';
import { Counter, Counter2, Counter3 } from './components/Counter';
import styled from 'styled-components';

import ClassComponent from './components/ClassComponent';

const BlackCounter = styled(Counter3)`
  .count-number{
    color: black;
  }
`;
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Hello name="Hop" age="18"></Hello>

                <ClassComponent myProp = "This is passed as a prop"/>
                {/* <Counter /> */}

                {/* <Counter2 /> */}
                {/* <Counter3 /> */}
                <br />
                {/* <BlackCounter /> */}

            </header>
        </div>
    );
}

export default App;
