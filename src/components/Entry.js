import React, {useState} from 'react';
import { Login } from './login';
import DATA from '../data';


export const Entry = () => {
    const [client, setClient] = useState(null);
    const localUsers = localStorage.getItem('users');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [notif, setNotif] = useState({message: '', style: ''});
   
    
    if(localUsers === null) {
      localStorage.setItem('users', JSON.stringify(DATA));
    }

    const clients = JSON.parse(localStorage.getItem('users'));

    const isLoginSuccess = (email, password) => {
      let isFound = false;

      clients.forEach(user => {
        if(user.email === email && user.password === password) {
          if(user.isAdmin) {
            setIsAdmin(true);
            setClient(user);
            isFound = true;
          }
          else {
            setIsAdmin(false);
            setClient(user)
            isFound = true;
          }
          setNotif('');
        }
      });
  
      if(!isFound) setNotif({message: 'Wrong username and password.', style: 'danger'});
      return isFound;
    }
  
    const login = (username, password) => {
      // if the user is found in the web browser DB
        if(isLoginSuccess(username, password)) {
            setIsLoggedIn(true);
        }
    }
  
    const logout = () => {
        setIsLoggedIn(false);
        setIsAdmin(false);
        localStorage.removeItem('client')
        setNotif({message: 'You have logged out.', style: 'success'});
    }
  
      return <Login loginHandler={login} notif={notif} isLoggedIn={isLoggedIn} />

    }
