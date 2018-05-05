import 'babel-polyfill';
import { createLogger } from 'redux-logger';

import createApp from './createApp';
import router from './router';

const opts = {
  initialState: {},
  onError(err) {
    console.log(err);
  }
};

if (process.env.NODE_ENV === 'development') {
  opts.onAction = createLogger();
}

const app = createApp(opts);
app.router(router);
app.start('#root');
