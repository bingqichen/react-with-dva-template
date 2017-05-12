import React, { Component } from 'react';
import { connect } from 'dva';

import './style.less';

class App extends Component {
  render() {
    return (
      <div className="app-wrap">
        hello world!
      </div>
    );
  }
}

const mapStateToProps = state => ({
  appState: state.app
});

export default connect(mapStateToProps)(App);
