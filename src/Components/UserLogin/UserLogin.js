import React from 'react';
import './UserLogin.css';
import {ReactComponent as Icon} from '../../style-resources/img/User-Login.svg';


const UserLogin = (props) => {
    const {submitLogin} = props;

    // Will possibly add login function directly in web app with login credentials
    // added in pop out login box
    /*
    const [seen, setSeen] = useState(false);

    const togglePop = () => {
        setSeen(!seen);
    };
    */
    return (
        <div className="User-Login">
                {/*seen ? <LoginPopOut 
                            toggle={togglePop} 
                            username={props.username} 
                            password={props.password} 
                            onLogin={props.onLogin} 
                            onSubmitLogin={props.submitLogin} /> : null*/}
                <button className="Login-Icon" onClick={submitLogin} /*onClick={togglePop}*/><Icon /></button>
        </div>
    );
}

export default UserLogin;