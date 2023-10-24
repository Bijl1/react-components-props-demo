import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Greeting from './components/Greeting';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Greeting />
      <hr />
      <Greeting />
      <hr />
      <Greeting />
    </div>
  );
}

export default App;
