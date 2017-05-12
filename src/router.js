import React from 'react';
import { Router, Route, IndexRedirect } from 'dva/router';

import App from './routes/App';

export default ({ history }) => (
  <Router history={history}>
    <Route path="/" component={App}>

    </Route>
  </Router>
);
