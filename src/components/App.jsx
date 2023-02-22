import { Component } from 'react';
import { Statistic } from './Statistic/Statistic';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  clickOnGood = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };
  clickOnNeutral = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };
  clickOnbad = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };
  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <button type="button" onClick={this.clickOnGood}>
          Good
        </button>
        <button type="button" onClick={this.clickOnNeutral}>
          Neutral
        </button>
        <button type="button" onClick={this.clickOnbad}>
          bad
        </button>
        <Statistic
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
        />
      </div>
    );
  }
}
