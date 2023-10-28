import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Greeting from './components/Greeting';
import StudentCard from './components/StudentCard';
import Badge from './components/Badge';
import StudentList from './components/StudentList';
import FlightList from './components/FlightList';

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Greeting firstName="Harper" />
      <Greeting nameTwo="Sterling" />
      <Greeting nameThree="Taco" />
      <Badge badgeText="important" />


      <StudentList>
      <StudentCard name="Eva" week={7} info={{ city: 'BCN', course: 'WEB'}} />
      <StudentCard name="Tuna" week={8} info={{ city: 'MIA', course: 'DATA'}} />
      </StudentList>
      <FlightList />

    </div>
  );
}

export default App;
