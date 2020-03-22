import React from 'react';
import ViewUsers from './components/view-users';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import AddUser from './components/add-user';

function App() {
  return (
    <div className="container-fluid">
      <Router>
        <header className="App-header">
          <div className="container-fluid" id="form-notice">
            <div className="row">
              <div className="col-md-12 text-center">
                <h5>Filling the form may take 15-20 min. Stay calm and fill the form</h5>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="breadcrumb">
              <div className="breadcrumb-item"><b>Financial Planning</b> > Users > View</div>
            </div>
          </div>
        </header>
        <Switch>
          <Route exact path="/view" component={ViewUsers} />
          <Route exact path="/add-edit-user/" component={AddUser} />
          <Route exact path="/add-edit-user/:handle" component={AddUser} />
          <Route path="/" component={ViewUsers} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
