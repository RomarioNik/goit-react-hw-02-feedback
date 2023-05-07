import { Component } from 'react';
import PropTypes from 'prop-types';

import { ButtonList, ButtonListItem, Button } from './FeedbackOptions.styled';
import { firstLetterToUpperCase } from '../../utils';

class FeedbackOptions extends Component {
  static protoTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <ButtonList>
        {options.map(nameButton => (
          <ButtonListItem key={nameButton}>
            <Button type="button" onClick={() => onLeaveFeedback(nameButton)}>
              {firstLetterToUpperCase(nameButton)}
            </Button>
          </ButtonListItem>
        ))}
      </ButtonList>
    );
  }
}

export default FeedbackOptions;
