import React, { useState } from 'react';
import './UserLogin.css';
import {ReactComponent as Icon} from '../../style-resources/img/User-Login.svg';
import LoginPopOut  from '../LoginPopOut/LoginPopOut';

const UserLogin = (props) => {
    const [seen, setSeen] = useState(false);

    const togglePop = () => {
        setSeen(!seen);
    };

    return (
        <div className="User-Login">
                {seen ? <LoginPopOut toggle={togglePop} username={props.username} password={props.password} onLogin={props.onLogin} onSubmitLogin={props.submitLogin} /> : null}
                <button className="Login-Icon" onClick={togglePop}><Icon /></button>
        </div>
    );
}

export default UserLogin;