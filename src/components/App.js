import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Error404 from '../pages/Error404';
import Header from './Header';

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: 'rgb(250,250,250)' }}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="*" component={Error404} />
        </Switch>
      </div>
    </Router>
  )
}
export default App;
