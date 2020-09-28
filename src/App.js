import React, {useState, useEffect} from 'react';
import {Switch, Route, useHistory, Link} from 'react-router-dom'
import './App.css';
import UserKit from './data/UserKit';
import Home from './pages/Home';
import Customer from './components/Customer'
import CreateUser from './components/CreateUser';

function App() {

  const userKit = new UserKit()
  const history = useHistory()
  
  // Use URL Search Params to parse the query parameters from the url
  const params = new URLSearchParams(history.location.search);
  const uid = params.get('uid')
  const token = params.get('token')  

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleActivateAccount() {
    userKit.activateUser(
      uid, token
    ).then(
      history.push('/login')
    )
  }

  function handleLogin() {
    userKit.login(email, password)
    .then(res => res.json())
    .then(data => {
      userKit.setToken(data.token)
      history.push('/home')
    })
  }

 

 
/*{customer.email}
{customer.website}
{customer.reference}
{customer.organisationNr}
{customer.vatNr}
{customer.paymentTerm}*/
  return (
    <div>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/login">
          <h1>Activate account</h1>
          {/* Only show that account is beeing activated if uid and token exists in URL */}
          { uid && token && (
            <div>
              Your account is being activated
              {handleActivateAccount()}
            </div>
          )}
          {/* If uid and token doesn't exist in url, render login form */}
          { !uid && !token && (
            <div>
              <p>
                Your account is now active. Please Login
              </p>
              <input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
              <input placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
              <button onClick={handleLogin}>Login</button>
            </div>
          )}
        </Route>
        <Route  path="/customer/:id" component={Customer} />
        <Route exact path="/">
            <CreateUser/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;



/*
email: nackademin@willandskill.se
password: js-fend-19
*/