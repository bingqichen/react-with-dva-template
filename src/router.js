import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic';

import appModel from './models/app';

export default ({ history, app }) => {
  const App = dynamic({
    app,
    models: () => [appModel],
    component: () => import('./routes/App'),
  });

  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={App}>
        </Route>
      </Switch>
    </Router>
  );
};
