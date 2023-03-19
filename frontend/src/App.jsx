import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';


function App() {
  const [activePage, setActivePage] = useState("form");
  return (
    <div className="App">
      <div className="App-header">
       Simple React App
       {activePage === "form" && <Form/>}
       {activePage === "list" && <List/>}
      </div>
      <div className="footer">
        <button onClick={() => setActivePage("form")}>Form</button>
        <button onClick={() => setActivePage("list")}>List</button>
      </div>
    </div>
  );
}

export default App;
