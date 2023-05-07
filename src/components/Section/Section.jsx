import { Component } from 'react';
import PropTypes from 'prop-types';

import { SectionContainer, Title } from './Section.styled';

class Section extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
  };

  render() {
    const { title, children } = this.props;
    return (
      <SectionContainer>
        <Title>{title}</Title>
        {children}
      </SectionContainer>
    );
  }
}

export default Section;
