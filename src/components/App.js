import React, { useState } from 'react';

import Section from './Section/Section.jsx';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedBackOptions/FeedBackOptions';
import Notification from './Notification/Notification';

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const handleIncrement = feedback => {
    switch (feedback) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        console.log('Ooops');
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return `${Math.floor((good / countTotalFeedback()) * 100)}%`;
  };

  const options = Object.keys({ good, neutral, bad });

  const isOpenStatisticsDate = countTotalFeedback() > 0;

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} updateState={handleIncrement} />
      </Section>

      <Section title="Statistics">
        {isOpenStatisticsDate && (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}

        {!isOpenStatisticsDate && <Notification message="No feedback given" />}
      </Section>
    </div>
  );
}
/*export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return `${Math.floor((good / this.countTotalFeedback()) * 100)}%`;
  };

  updateState = option => {
    this.setState(prevState => {
      return { [option]: prevState[option] + 1 };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions options={options} updateState={this.updateState} />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}
*/
