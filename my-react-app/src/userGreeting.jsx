import PropTypes from 'prop-types';
function UserGreeting(props){


    const greetingMsg = <div className="greeting">Welcome {props.userName} </div>
    const loginPrompt = <div className="login">Login to Continue Guest </div>

    return props.isLoggedIn ? greetingMsg : loginPrompt; 
};

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    userName: PropTypes.string.isRequired,
  };

export default UserGreeting;