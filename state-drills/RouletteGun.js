import React from "react";

class RouletteGun extends React.Component {
  constructor(props) {
    super(props);
    this.state = { chamber: null, spinningTheChamber: false };
  }
  componentWillUnmount() {
    clearTimeout(this.timeout);
  }
  settimeout = () => {
    let chamberPick = Math.ceil(Math.random() * 8);
    this.setState({ chamber: chamberPick });
    this.setState({ spinningTheChamber: false });
  };
  handleTrigger = () => {
    this.setState({ spinningTheChamber: true });
    this.timeout = setTimeout(this.settimeout, 2000);
  };
  renderContent() {
    const { chamber, spinningTheChamber } = this.state;
    const { bulletInChamber } = this.props;
    if (spinningTheChamber) {
      return "spinning the chamber and pulling the trigger! ...";
    } else if (chamber === bulletInChamber) {
      return "BANG!!!!!";
    } else {
      return "you're safe!";
    }
  }
  render() {
    return (
      <div>
        <p>{this.renderContent()}</p>
        <button onClick={this.handleTrigger}>Pull the trigger!</button>
      </div>
    );
  }
}

export default RouletteGun;
