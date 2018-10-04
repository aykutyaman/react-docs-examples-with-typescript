import * as React from 'react';
import * as ReactDOM from 'react-dom';

class Toggle extends React.Component<any, { isToggleOn: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }
  public handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }
  public render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    )
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root') as HTMLElement
);
