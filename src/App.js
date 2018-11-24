import React from 'react';
import Home from './pages/Home';
import Error404 from './pages/Error404';
import { Route, Switch } from 'react-router-dom';

import SearchBar from './components/SearchBar';

function Routes() {
  return (
    <div>
      <div>
        <SearchBar />
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="*" component={Error404} />
      </Switch>
    </div>
  )
}
export default Routes;
