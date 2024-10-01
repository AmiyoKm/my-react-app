import profilePic from './assets/my dp.jpg';
import PropTypes from 'prop-types';

function Card(props){
    return (
        <div className="card">
            <img className="card-image"alt="profile pic" src={profilePic}/>
            <h2 className="card-title">Name={props.name}</h2>
            <p className="card-text">University={props.university}</p>
            <p className="card-text">Address={props.location}</p>
            <p className="card-text">Age={props.age}</p>

        </div>
    );
};
Card.propTypes = {
    name: PropTypes.string,
    university:PropTypes.string,
    location: PropTypes.string,
    age:PropTypes.number
}

Card.defaultProps={
    name :"Unknown",
    age:0,
    university:"Unknown",
    location:"Bangladesh"
 
}
export default Card;