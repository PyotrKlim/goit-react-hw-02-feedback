import { Component } from 'react';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback = () => {};
  countPositiveFeedbackPercentage = () => {};
  onLeaveFeedback = () => {};

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage();
    const options = Object.keys(this.state);
    console.log(options);

    return (
      <>
        <Section title="Please leave feedback">
          <button>good</button>
          <button>neutral</button>
          <button>bad</button>
        </Section>
        <Section title="Statistics">
          <ul>
            <li>
              <span>good:</span>
              <span>{good}</span>
            </li>
            <li>
              <span>neutral:</span>
              <span>{neutral}</span>
            </li>
            <li>
              <span>bad:</span>
              <span>{bad}</span>
            </li>
            <li>
              <span>total:</span>
              <span>{total}</span>
            </li>
            <li>
              <span>positive:</span>
              <span>{positive}</span>
            </li>
          </ul>
        </Section>
      </>
    );
  }
}
