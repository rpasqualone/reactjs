'use strict';

import React from 'react';
import DashboardMessage from 'components/DashboardMessage';
require('styles/main.scss');

class DashboardMessages extends React.Component {
  render() {
    return (
      <div>
        <div>This is the Messages</div>
        <DashboardMessage />
      </div>
    );
  }
}

export default DashboardMessages;
