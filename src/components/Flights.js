import { useEffect } from 'react';
import updateRotation from '../utilities/updateRotation';
import calculatePercentages from '../utilities/calculatePercentages';
import findSelectedFlights from '../utilities/findSelectedFlights';
import Flight from './Flight';
import '../style/Flights.css';

function Flights(props) {
    const flights = props.flights;
    const setRotation = props.setRotation;
    const currentAircraft = props.currentAircraft;
    const rotation = props.rotation;
    const setAircrafts = props.setAircrafts;
    const aircrafts = props.aircrafts;
    const setFlights = props.setFlights;

    useEffect(() => {
      calculatePercentages(rotation,aircrafts,setAircrafts);
      findSelectedFlights(flights, rotation, setFlights);
    },[rotation]);

    flights.sort((a,b) => {
      return a.departuretime - b.departuretime;
    });

    return (
      <div className="flights">
        {
          flights.map(flight =>
            <Flight
              onClick={() => updateRotation(rotation, currentAircraft, flight, setRotation)} 
              updateRotation={updateRotation}
              rotation={rotation}
              currentAircraft={currentAircraft}
              setRotation={setRotation}
              flight={flight}>
            </Flight>
          )
        }
      </div>
    );
  }
  

export default Flights;
