import '../style/Aircrafts.css';

function Aircrafts(props) {
  const aircrafts = props.aircrafts;
  const setCurrentAircraft = props.setCurrentAircraft;
  const currentAircraft = props.currentAircraft;

  return (
    <div className="aircrafts">
      {
        aircrafts.map(aircraft =>
          <div className={`aircraft ${aircraft.ident === currentAircraft.ident ? "selected":""}`} key={aircraft.ident} onClick={() => setCurrentAircraft(aircraft)}>
            <div>{aircraft.ident}</div>
            <div>{aircraft.percentage}%</div>
          </div>
        )
      }
    </div>
  );
}

export default Aircrafts;
