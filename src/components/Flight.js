import '../style/Flight.css';

function Flight(props) {
    const flight = props.flight;
    const updateRotation= props.updateRotation;
    const rotation= props.rotation;
    const currentAircraft= props.currentAircraft;
    const setRotation= props.setRotation;
    
    return (
        <div 
            onClick={() => updateRotation(rotation, currentAircraft, flight, setRotation)}
            className={`flight ${flight.selected ? "selected" : ""}`}
            key={flight.ident}>
            <div>Flight: {flight.ident}</div>
            <div className="from-to">
                <div>Departure:{flight.origin} {flight.readable_departure}</div>
                <div>Arrival: {flight.destination} {flight.readable_arrival}</div>
            </div>
        </div>
    )
}

export default Flight;
