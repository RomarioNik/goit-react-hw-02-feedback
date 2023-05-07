import { Component } from 'react';
import PropTypes from 'prop-types';

import { Title } from './Notification.styled';

class Notification extends Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
  };

  render() {
    const { message } = this.props;

    return <Title>{message}</Title>;
  }
}

export default Notification;
