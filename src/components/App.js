import '../style/App.css';
import { useEffect, useState } from 'react';

import Flights from './Flights';
import Rotation from './Rotation';
import Aircrafts from './Aircrafts';
import Header from './Header';

function App() {
  const [aircrafts,setAircrafts] = useState([]);
  const [flights,setFlights] = useState([]);
  const [currentAircraft,setCurrentAircraft] = useState({});
  const [rotation,setRotation] = useState([]);

  useEffect(() => {
    fetch('https://infinite-dawn-93085.herokuapp.com/aircrafts').then(res => res.json())
    .then(aircrafts => {
      setCurrentAircraft(aircrafts.data[0]);
      for(let aircraft of aircrafts.data) {
        aircraft.percentage = Number(0).toFixed(2);
      }
      setAircrafts(aircrafts.data);
    });

    fetch('https://infinite-dawn-93085.herokuapp.com/flights').then(res => res.json())
    .then(flights => {
      for(let flight of flights.data) {
        flight.selected = false;
      }
      setFlights(flights.data);
    });
  },[]);

  return (
      <div className="dashboard">
        <Header currentAircraft={currentAircraft}></Header>
        <div className="columns">
          <Aircrafts 
            aircrafts={aircrafts} 
            currentAircraft={currentAircraft}
            setCurrentAircraft={setCurrentAircraft}>
          </Aircrafts>
          <Rotation 
            currentAircraft={currentAircraft} 
            rotation={rotation}>
          </Rotation>
          <Flights 
            flights={flights} 
            setFlights={setFlights}
            rotation={rotation} 
            setRotation={setRotation}
            aircrafts={aircrafts}
            setAircrafts={setAircrafts}
            currentAircraft={currentAircraft}>
          </Flights>
        </div>
      </div>
  );
}

export default App;
