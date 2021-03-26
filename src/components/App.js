import '../style/App.css';
import { useEffect, useState } from 'react';

import Flights from './Flights';
import Rotation from './Rotation';
import Aircrafts from './Aircrafts';
import Header from './Header';

import aircraftData from '../data/aircrafts.json';
import flightsData from '../data/flights.json';

function App() {
  const [aircrafts,setAircrafts] = useState([]);
  const [flights,setFlights] = useState([]);
  const [currentAircraft,setCurrentAircraft] = useState({});
  const [rotation,setRotation] = useState([]);

  useEffect(() => {
    for(let aircraft of aircraftData) {
      aircraft.percentage = Number(0).toFixed(2);
    }

    for(let flight of flights) {
      flight.selected = false;
    }

    setAircrafts(aircraftData);
    setFlights(flightsData);
    setCurrentAircraft(aircraftData[0]);
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
