import dva from 'dva';
import createLoading from 'dva-loading';

export default (opts) => {
  const app = dva(opts);

  app.use(createLoading());

  return app;
};
