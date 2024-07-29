import React, { useState, useCallback } from 'react';
import './LoginPopOut.css';

const LoginPopOut = (props) => {
    const handleLogin = useCallback(
        (event) => {
        props.onLogin(event.target.value);
    }, [props.onLogin]);

    return (
        <div className="Popout">
            <form className="Popout-Inner" onSubmit={props.onSubmitLogin}>
                        <label className="Input-Label">username</label>
                        <input className="Login-Input" value={props.username} onChange={handleLogin} />
                        <label className="Input-Label">password</label>
                        <input className="Login-Input" value={props.password} onChange={handleLogin} />
                        <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginPopOut;