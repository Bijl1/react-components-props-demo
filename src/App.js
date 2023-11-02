import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Greeting from './components/Greeting';
import StudentCard from './components/StudentCard';
import Badge from './components/Badge';
import StudentList from './components/StudentList';
import FlightList from './components/FlightList';
import ReactPlayer from 'react-player';

function App() {
  return (
    <div className="App">

      <hr />
      <ReactPlayer url="https://vimeo.com/channels/top/22439234" />
      <ReactPlayer
          url="https://www.youtube.com/watch?v=kJQP7kiw5Fk"
          playing
          controls
          volume="0.5"
        />

        <ReactPlayer
          url="https://www.youtube.com/watch?v=NcBjx_eyvxc"
          playing
          controls
          volume="0.5"
        />

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
