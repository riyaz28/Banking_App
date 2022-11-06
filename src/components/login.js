import React, { useState } from 'react';

const Notify = (props) => {
    return <div className={`notif ${props.style}`}>{props.message}</div>
}

export const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    
    const onChangeUsername = (event) => {
      setUsername(event.target.value);
    }
  
    const onChangePassword = (event) => {
      setPassword(event.target.value);
    }
    
    const onSubmitHandler = (event) => {
        event.preventDefault();
        props.loginHandler(username, password);
      }
    
    return (
      <div id="login-page">
        <div id="login">
        <h1 id="logo"><i className='bx bxs-paper-plane' ></i> Avion Bank</h1>
          <Notify message={props.notif.message} style={props.notif.style} />
          <form onSubmit={onSubmitHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" autoComplete="off" onChange={onChangeUsername}  value={username} type="text" />
            <label htmlFor="password">Password</label>
            <input id="password" autoComplete="off" onChange={onChangePassword} value={password} type="password" />
            <button type="submit" className="btn">Login</button>
          </form>
        </div>
      </div>
    )
}
