'use strict';

import React from 'react';

class ListItem extends React.Component {
  handleClick = () => {
    this.props.handleDropItemClick(this);
  }

  render() {
    return (
      <li className={this.props.className} key={this.props.key} onClick={this.handleClick}><a>{this.props.item}</a></li>
    );
  }
}

export default ListItem;
