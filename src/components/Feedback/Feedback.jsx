import React from 'react';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  handleNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  handleBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  render() {
    const countTotalFeedback =
      this.state.good + this.state.neutral + this.state.bad;

    const countPositiveFeedbackPercentage = Math.round(
      (this.state.good * 100) / countTotalFeedback,
    );

    return (
      <div>
        <h1>Please leave feedback</h1>
        <div>
          <button type="button" onClick={this.handleGood}>
            Good
          </button>
          <button type="button" onClick={this.handleNeutral}>
            Neutral
          </button>
          <button type="button" onClick={this.handleBad}>
            Bad
          </button>
        </div>
        <h2>Statistics</h2>
        <div>
          <p>Good-{this.state.good}</p>

          <p>Neutral-{this.state.neutral}</p>

          <p>Bad-{this.state.bad}</p>

          <p>count-{countTotalFeedback}</p>

          {this.state.good !== 0 && (
            <p>positive-{countPositiveFeedbackPercentage}%</p>
          )}
        </div>
      </div>
    );
  }
}
export default Feedback;
