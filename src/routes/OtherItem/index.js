import React, { Component } from 'react';
import { connect } from 'dva';
import { withRouter } from 'dva/router';

class OtherItem extends Component {

  render() {
    return (
      <div className="other-item-wrap">
        this is a other children item
      </div>
    );
  }
}

const mapStateToProps = state => ({
  appState: state.app
});

export default connect(mapStateToProps)(withRouter(OtherItem));
