import { Component } from "react";
import Section from "./Section/Section";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";

export class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

  onLeaveFeedback = event => {
    const option = event.target.id;
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    }

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const positiveFeedback = this.state.good;

    if (total > 0) {
      return Math.round((positiveFeedback / total) * 100) + "%";
    }}
   
    render() {
      const options = Object.keys(this.state);
    const onLeaveFeedback = this.onLeaveFeedback;
      const { good, neutral, bad } = this.state;
      const countTotalFeedback = this.countTotalFeedback();
      const countPositiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
        return (
          <div>
            <div>
              <Section title="Please leave feedback">
              <FeedbackOptions
              options={options}
              onLeaveFeedback={onLeaveFeedback} />
            </Section>
            
            <Section title="Statistics">
            {countTotalFeedback > 0 ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={countTotalFeedback}
                countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
              />
            ) : (
              <Notification message="There is no feedback" />
            )}
          </Section>
              </div>
            </div>    
      );
    }
}

export default App;

