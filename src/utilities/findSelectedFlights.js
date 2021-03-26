export default function findSelectedFlights(flights, rotation, setFlights) {
    let newFlights = [...flights];
    for(let flight of newFlights) {
        if(rotation.some(rotationFlight => rotationFlight.flight.id === flight.id)) {
            flight.selected = true;
        }
    }

    setFlights(newFlights);
}