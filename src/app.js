import 'babel-polyfill';
import { browserHistory } from 'dva/router';
import { createLogger } from 'redux-logger';

import createApp from './createApp';
import router from './router';

const opts = {
  history: browserHistory,
  initialState: {},
  onAction: createLogger(),
  onError(err) {
    console.log(err);
  }
};

const app = createApp(opts);
app.router(router);
app.start('#root');
