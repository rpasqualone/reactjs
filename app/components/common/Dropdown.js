'use strict';

import React from 'react';
import Button from 'components/common/Button';
import UnorderedList from 'components/common/UnorderedList';

require('styles/main.scss')

class Dropdown extends React.Component {
  constructor() {
    super();
    this.state = {open: false};
  }

  hideDropDown = () => {
    this.setState({open: false});
    document.removeEventListener('click', this.hideDropDown);
  }

  handleDropItemClick = (component) => {
    this.setState({
        open: false,
        itemTitle: component.props.item
    });
    document.removeEventListener('click', this.hideDropDown);
  }

  handleButtonClick = () => {
    this.setState({open: !this.state.open});
    document.addEventListener('click', this.hideDropDown);
  }

  render() {

    var tempProp = this.props.dropMenuClass.slice();
    console.log(tempProp.push('Hi'))

    return (
      <div className='dropdown'>
        <Button title={this.state.itemTitle || this.props.title} btnClass={this.props.btnClass} handleClick={this.handleButtonClick} />
        <UnorderedList
          items={this.props.items}
          ulClass={tempProp.push(" " + (this.state.open ? "show" : ""))}
          handleDropItemClick={this.handleDropItemClick}
          activeClass={this.state.itemTitle}
        />
      </div>
    );
  }
}

export default Dropdown;
