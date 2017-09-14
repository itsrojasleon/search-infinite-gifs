import React from 'react';
import Home from './pages/Home';
import Error404 from './pages/Error404';
import { Route, Switch } from 'react-router-dom';

function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="*" component={Error404} />
      </Switch>
    </div>
  )
}
export default Routes;
