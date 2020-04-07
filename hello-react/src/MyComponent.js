import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
  static defaultProps = {
    name: '기본 이름',
  };

  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };

  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        안녕. 내이름은 {name}이야 <br />
        children값은 {children}
        이다. 내가 좋아하는 숫자는 {favoriteNumber}야.
      </div>
    );
  }
}

export default MyComponent;
