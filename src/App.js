import React from 'react';
import logo from './logo.svg';
import './App.css';
import ChangeCount from './components/ChangeCount'
import ShowCount from './components/ShowCount';
import storesContext from './contexts/storesContext'
import { CounterStore } from './stores/CounterStore';

function App() {
  const counterStore = new CounterStore();
  return (
    <div className="App">
      <header className="App-header">
        <storesContext.Provider value={counterStore}>
          <ShowCount />
          <ChangeCount />
        </storesContext.Provider>
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
