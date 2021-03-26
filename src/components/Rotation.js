import '../style/Rotation.css';

import RotationGraph from './RotationGraph';

function Rotation(props) {
  const currentAircraft = props.currentAircraft;
  let rotation = props.rotation;

  rotation = rotation.filter(flight => 
    flight.aircraft.ident === currentAircraft.ident
  )
  
  rotation.sort((a,b) => 
    a.flight.departuretime - b.flight.departuretime
  );

  return ( 
    <div className="rotation">
      <RotationGraph rotation={rotation}></RotationGraph>
      <div className="rotationFlights">
        {
          rotation.map(flight => (
            <div className="rotationFlight" key={flight.flight.ident + flight.flight.destination + flight.flight.arrivaltime}>
              <div>Flight: {flight.flight.ident}</div>
              <div className="from-to">
                <div>From: {flight.flight.origin} {flight.flight.readable_departure}</div>
                <div>To: {flight.flight.destination} {flight.flight.readable_arrival}</div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Rotation;
