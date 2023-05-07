import { Component } from 'react';
import {
  FeedbackList,
  FeedbackItem,
  FeedbackCount,
  FeedbackCountList,
  FeedbackCountItem,
  TextTotalCount,
} from './Statistics.styled';

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <>
        <FeedbackList>
          <FeedbackItem>
            <FeedbackCount>{good}</FeedbackCount>
          </FeedbackItem>
          <FeedbackItem>
            <FeedbackCount>{neutral}</FeedbackCount>
          </FeedbackItem>
          <FeedbackItem>
            <FeedbackCount>{bad}</FeedbackCount>
          </FeedbackItem>
        </FeedbackList>

        <FeedbackCountList>
          <FeedbackCountItem>
            <TextTotalCount>Total Feedback: {total}</TextTotalCount>
          </FeedbackCountItem>
          <FeedbackCountItem>
            <TextTotalCount>
              Positive Feedback Percentage: {positivePercentage}%
            </TextTotalCount>
          </FeedbackCountItem>
        </FeedbackCountList>
      </>
    );
  }
}

export default Statistics;
