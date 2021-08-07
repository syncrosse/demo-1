import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { Syncrosse } from '@syncrosse/client'

function App() {
  useEffect(() => {
    const syncrosse = new Syncrosse();
    syncrosse.onEvent('pong', () => {console.log("pong")});
    setInterval(() => {
      syncrosse.performAction('ping', "yoyoyo");
    }, 1000);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
