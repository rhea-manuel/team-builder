import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';



function App() {

  const [team, updateTeam] = useState([])
  // const [memberToEdit, editMembder]

  return (
    <div className="App">
      <Form team={team} updateTeam={updateTeam}></Form>
      {
        team.map(item => {
          return (<div>{item.name}, {item.email}, {item.role}</div>)
        })
      }
    </div>
  );
}

export default App;
