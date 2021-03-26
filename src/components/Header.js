import '../style/Header.css';
import getDate from '../utilities/getDate';

function Header(props) {
    const currentAircraft = props.currentAircraft;

    return (
        <div className="header">
            <div className="date">{getDate()}</div>
            <div className="column-headers">
                <div className="section-header">Aircrafts</div>
                <div className="section-header">Rotation for: {currentAircraft.ident}</div>
                <div className="section-header">Flights</div>
            </div>
        </div>
    )
}

export default Header;