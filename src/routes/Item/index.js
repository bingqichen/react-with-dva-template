import React, { Component } from 'react';
import { connect } from 'dva';

class Item extends Component {

  render() {
    return (
      <div className="item-wrap">
        this is a children item
      </div>
    );
  }
}

const mapStateToProps = state => ({
  appState: state.app
});

export default connect(mapStateToProps)(Item);
