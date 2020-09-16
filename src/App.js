import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';



function App() {

  const [team, updateTeam] = useState([])
  // const [memberToEdit, editMembder]

  return (
    <div className="App">
      <h1>Join our team!</h1>
      <Form team={team} updateTeam={updateTeam}></Form>
      <h2>Our Awesome Team</h2>
      {
        team.map(item => {
          return (<div>{item.name}, {item.email}, {item.role}</div>)
        })
      }

      <footer>
        <small>
          Copyright © Rhea Manuel</small>
      </footer>

     
    </div>
  );
}

export default App;
