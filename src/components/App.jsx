import { Component } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import { Container } from './App.styled';
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
    const { good, neutral, bad } = this.state;

    return (
      <Container>
        <Section title="Please, leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.addFeedback}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          ></Statistics>
        </Section>
      </Container>
    );
  }
}

export default App;
