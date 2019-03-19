import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ComponentDescription extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    text: PropTypes.string,
  };

  render() {
    const { text } = this.props;
    return (
      <div
        style={{
          color: 'rgba(0, 0, 0, 0.57)',
          fontSize: 14,
          lineHeight: 1.5,
          marginBottom: 16,
        }}>
        {text}
      </div>
    );
  }
}

export default ComponentDescription;
