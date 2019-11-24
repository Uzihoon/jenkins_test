import React from 'react';
import './App.css';
import jenkins from "./jenkins.png"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={jenkins}/> 
        Congratulation! You successed Jenkins test.
      </header>
    </div>
  );
}

export default App;
