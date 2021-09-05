import { Component } from 'react';
import './App.css';
import Section from './Section/Section.jsx';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import FeedbackOptions from './FeedBackOptions/FeedBackOptions';
import { Title } from '../components/Section/Section.styled';

export default class App extends Component {
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
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} updateState={this.updateState} />

        <Title>Statistics</Title>

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
    );
  }
}
