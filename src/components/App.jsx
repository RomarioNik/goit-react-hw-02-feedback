import { Component } from 'react';
import {
  Container,
  Title,
  ButtonList,
  ButtonListItem,
  Button,
  FeedbackList,
  FeedbackItem,
  FeedbackCount,
  FeedbackCountList,
  FeedbackCountItem,
  TextTotalCount,
} from './App.styled';
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = nameButton => {
    this.setState(prevState => ({
      [nameButton]: prevState[nameButton] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, el) => {
      return (total = total + el);
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedbacks = this.countTotalFeedback();
    if (totalFeedbacks === 0) {
      return 0;
    }
    const percentageCount = (this.state.good * 100) / totalFeedbacks;
    return percentageCount.toFixed();
  };

  render() {
    return (
      <Container>
        <Title>Please, leave feedback</Title>

        <ButtonList>
          <ButtonListItem>
            <Button type="button" onClick={() => this.addFeedback('good')}>
              Good
            </Button>
          </ButtonListItem>
          <ButtonListItem>
            <Button type="button" onClick={() => this.addFeedback('neutral')}>
              Neutral
            </Button>
          </ButtonListItem>
          <ButtonListItem>
            <Button type="button" onClick={() => this.addFeedback('bad')}>
              Bad
            </Button>
          </ButtonListItem>
        </ButtonList>

        <FeedbackList>
          <FeedbackItem>
            <FeedbackCount>{this.state.good}</FeedbackCount>
          </FeedbackItem>
          <FeedbackItem>
            <FeedbackCount>{this.state.neutral}</FeedbackCount>
          </FeedbackItem>
          <FeedbackItem>
            <FeedbackCount>{this.state.bad}</FeedbackCount>
          </FeedbackItem>
        </FeedbackList>

        <FeedbackCountList>
          <FeedbackCountItem>
            <TextTotalCount>
              Total Feedback: {this.countTotalFeedback()}
            </TextTotalCount>
          </FeedbackCountItem>
          <FeedbackCountItem>
            <TextTotalCount>
              Positive Feedback Percentage:{' '}
              {this.countPositiveFeedbackPercentage()}%
            </TextTotalCount>
          </FeedbackCountItem>
        </FeedbackCountList>
      </Container>
    );
  }
}

export default App;
