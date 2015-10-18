'use strict';

import React from 'react';
import ListItem from 'components/common/ListItem';

class UnorderedList extends React.Component {
  render() {
    console.log(this.props)
    return (
      <ul className={this.props.ulClass.join(' ')}>
        {this.props.items.map((item, idx) => {
          return (
            <ListItem
              key={idx}
              item={item}
              handleDropItemClick={this.props.handleDropItemClick}
              className={this.props.activeClass === item ? 'active' : ''}
            />
          );
        })}
      </ul>
    );
  }
}

export default UnorderedList;
