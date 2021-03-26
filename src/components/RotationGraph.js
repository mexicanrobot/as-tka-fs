import '../style/RotationGraph.css'

function RotationGraph(props) {
    const rotation = props.rotation;

    let hours = new Array(24);
    hours.fill(false);

    for(let hour=0; hour < hours.length; hour++) {
        let startTime = (hour + 1) * 3600;

        hours[hour] = rotation.some(rotationFlight => {
            return rotationFlight.flight.departuretime <= startTime && rotationFlight.flight.arrivaltime >= startTime;
        });
    }

    return (
        <div className="hours-container">
            <div className="hours">
            {
                hours.map((hour,index) => 
                    <div className="hour" key={getRandomInt(9999)}>
                        {index + 1}
                    </div>
                )
            }
            </div>
            <div className="occupation">
            { 
                hours.map(hour => 
                    <div key={getRandomInt(9999)} className={`hour ${hour ? "occupied" : "not-occupied"}`}></div>
                )
            }
            </div>
        </div>
    );
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

export default RotationGraph;