import {Switch, Route, useHistory} from 'react-router-dom'
import './App.css';

function App() {
  const history = useHistory()
  // Use URL Search Params to parse the query parameters from the url
  const params = new URLSearchParams(history.location.search);
  const uid = params.get('uid')
  const token = params.get('token')
  function handleCreateUser() {
    userKit.register("Hassan", "Mian", "mian+test+4@willandskill.se", "hej123svejs43321", "Mitt företag AB", "0")
  }
  function handleActivateAccount() {
    userKit.activateUser(
      uid, token
    ).then(
      history.push('/login')
    )
  }
  return (
      <Switch>
        <Route path="/login">
          <h1>Activate account</h1>
          { uid && token && (
            <div>
              Your account is being activated
              {handleActivateAccount()}
            </div>
          )}
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
        <Route path="/">
          <h1>Register</h1>
          <button onClick={handleCreateUser}>Create User</button>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
