export default function findSelectedFlights(flights, rotation, setFlights) {
    let newFlights = [...flights];
    for(let flight of newFlights) {
        if(rotation.some(rotationFlight => rotationFlight.flight.ident === flight.ident)) {
            flight.selected = true;
        }
    }

    setFlights(newFlights);
}