import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, word: 'tick'};
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({count: this.state.count + 1})
      if (this.state.count >= 8) {
          this.setState({word: 'BOOM!'});
          this.componentWillUnmount();
      }
      else if (this.state.count % 2 === 0) {
        this.setState({ word: "tick" });
      }
      else {
          this.setState({ word: "tock" });
      }
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return <div>{this.state.word}</div>;
  }
}

export default Bomb;