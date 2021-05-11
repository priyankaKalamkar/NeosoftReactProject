import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import Login from './Login'
import Signup from './Signup';
import Search from './Search'
import { useState } from 'react';

function App() {
  var [user, setUser] = useState()
  var [loginStatus, setLoginStatus] = useState(false)
  function LoginDone(data){
    setUser(data)
    setLoginStatus(true)
    alert("Login Conponent called the parent")
  }
  return (
    <div className="App">
      <Navbar loginStatus={loginStatus} user={user} />
      <Login informLogin={LoginDone} />
      <Signup />
      <Home />
      <Search />
    </div>
  );
}

export default App;
