import React from 'react';

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = { who: "world" };
  }
  sayHello = () => {
    this.setState({ who: "world" });
  }
  sayFriend = () => {
    this.setState({ who: "friend" });
  }
  sayReact = () => {
    this.setState({ who: "React" });
  }
  render() {
    return (
      <div>
        <p>Hello, {this.state.who}</p>
        <button onClick={this.sayHello}>World</button>
        <button onClick={this.sayFriend}>Friend</button>
        <button onClick={this.sayReact}>React</button>
      </div>
    );
  }
}

export default HelloWorld;