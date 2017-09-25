import React, { Component } from 'react';
import { connect } from 'dva';
import { Button } from 'antd';

import Avatar from '~/avatar';

import './style.less';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    const { dispatch, appState } = this.props;
    const { show } = appState;
    dispatch({
      type: 'app/changeShow',
      show: !show
    });
  }

  render() {
    const { show } = this.props.appState;

    return (
      <div className="app-wrap">
        {
          show ?
            <Avatar
              src="//camo.githubusercontent.com/7c73f8cfbb808b9a451dac7d9ff5cbc2b4883419/68747470733a2f2f7a6f732e616c697061796f626a656374732e636f6d2f726d73706f7274616c2f70736167534356484f4b515671714e6a6a4d64662e6a7067"
            /> : null
        }
        hello dva!
        <br />
        <Button onClick={this.handleChange}>点击{ show ? '隐藏' : '显示' }图像</Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  appState: state.app
});

export default connect(mapStateToProps)(App);
