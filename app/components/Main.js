'use strict';

import React from 'react';
import Dropdown from 'components/common/Dropdown';
import Header from 'components/Header';

class Main extends React.Component {
  render() {
    var options = {
      title: 'Open',
      items: [
        'Option 1',
        'Option 2',
        'Option 3'
      ],
      btnClass: 'btn-primary',
      dropMenuClass: ['dropdown-menu']
    };

    return (
      <div className="app">
        <Header />
        <Dropdown title={options.title} items={options.items} btnClass={options.btnClass} dropMenuClass={options.dropMenuClass} />
        <Dropdown title={options.title} items={options.items} btnClass={options.btnClass} dropMenuClass={options.dropMenuClass} />
        <Dropdown title={options.title} items={options.items} btnClass={options.btnClass} dropMenuClass={options.dropMenuClass} />
        <Dropdown title={options.title} items={options.items} btnClass={options.btnClass} dropMenuClass={options.dropMenuClass} />
      </div>
    );
  }
}

export default Main;
