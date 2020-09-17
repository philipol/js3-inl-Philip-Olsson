import {Switch, Route, useHistory} from 'react-router-dom'
import './App.css';

function App() {
  return (
      <Switch>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Route path="/">
          <h1>Register</h1>
          <button onClick={handleCreateUser}>Create User</button>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
