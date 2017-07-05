import 'babel-polyfill';
import { browserHistory } from 'dva/router';
import { createLogger } from 'redux-logger';

import createApp from './createApp';
import router from './router';

const opts = {
  history: browserHistory,
  initialState: {},
  onError(err) {
    console.log(err);
  }
};

if (process.env.NODE_ENV !== 'production') {
  opts.onAction = createLogger();
}

const app = createApp(opts);
app.router(router);
app.start('#root');
