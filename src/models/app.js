// app全局性状态管理
// import * as appApis from '../services/app';

export default {
  namespace: 'app',

  state: {
    show: true
  },

  reducers: {
    changeShow(state, { show }) {
      return { ...state, show };
    }
  },

  effects: {

  },

  subscriptions: {}
};
