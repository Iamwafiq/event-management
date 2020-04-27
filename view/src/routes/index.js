import React from 'react';
import './index.css';
import Login from "./login";
import FormData from "./Form";
import EventList from './EventList'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="main-body">
    <Router>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>   
            <Route exact path="/createEvent">
              <FormData />
            </Route>   
            <Route exact path="/getEvents">
              <EventList />
            </Route>
            <Route path="/*">
              <div style={{'height':'55em'}}>
                <h1>Page Not Found</h1>
                <h3>EVENT MANAGEMENT</h3>
              </div>
            </Route>  
          </Switch>
    </Router>
    </div>
  );
}

export default App;
