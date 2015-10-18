'use strict';

import React from 'react';

class Button extends React.Component {
  render() {
    let btnClass = this.props.btnClass ? this.props.btnClass : 'btn-default';

    return (
      <button type="button" className={"btn " + btnClass} onClick={this.props.handleClick}>
        {this.props.title}
        <span className="caret"></span>
      </button>
    );
  }
}

export default Button;
