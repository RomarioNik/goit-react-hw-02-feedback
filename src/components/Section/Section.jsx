import { Component } from 'react';
import { SectionContainer, Title } from './Section.styled';

class Section extends Component {
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
