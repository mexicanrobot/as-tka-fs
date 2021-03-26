export default function calculatePercentages(rotation,aircrafts,setAircrafts) {
    let newAircrafts = [...aircrafts];

    //Calculate percentages
    for(let aircraft of newAircrafts) {
    const aircraftFlights = rotation.filter(flight => flight.aircraft.ident === aircraft.ident);
    const percentage = aircraftFlights.reduce((acc,val) => {
        return acc + (val.flight.arrivaltime - val.flight.departuretime);
    },0);
    aircraft.percentage = ((percentage / 86400) * 100).toFixed(2);
    }
    setAircrafts(newAircrafts);
}