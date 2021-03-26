function updateRotation(rotation, currentAircraft, flight, setRotation) {
    //No plane selected
    if(!currentAircraft.ident) return;

    //Flight already selected
    if(rotation.some(value => value.flight.id === flight.id)) return;
    
    //Current airport empty if no flights yet
    let currentAirport = null;
    let latestFlight = null;

    //If there's flights for airplane, select latest flight.
    if(rotation.some(value => value.aircraft.ident === currentAircraft.ident)) {
      const flightsForCurrentCraft = rotation.filter(flight => flight.aircraft.ident === currentAircraft.ident);

      latestFlight = flightsForCurrentCraft.reduce((maxTimeFlight,flight) => {
        return maxTimeFlight = flight.flight.arrivaltime > maxTimeFlight.flight.arrivaltime ? flight : maxTimeFlight;
      },{flight: {arrivaltime: 0}});

      currentAirport = latestFlight.flight.destination;
    }

    //If not in same airport, do not add.
    if(currentAirport && flight.origin !== currentAirport) return;

    if(latestFlight && (flight.departuretime < latestFlight.flight.arrivaltime + 1200)) return;

    setRotation([...rotation,{
      flight: flight,
      aircraft: currentAircraft      
    }]);
};

export default updateRotation;