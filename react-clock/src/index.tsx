import * as React from 'react';
import * as ReactDOM from 'react-dom';

const FormattedDate = (props: { date: Date }) => (
  <h2>It is {props.date.toLocaleTimeString()}</h2>
)

interface IHelloProps { message: string; }
interface IHelloState { date: Date; }

class Clock extends React.Component<IHelloProps, IHelloState> {

  public timerID: any;

  constructor(props: any) {
    super(props);
    this.state = {
      date: new Date()
    }
  }
  public componentWillUnmount() {
    console.log('will unmount');
    clearInterval(this.timerID)
  }
  public componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  public render() {
    return (
      <div>
        <h1>{this.props.message}</h1>
        <FormattedDate date={this.state.date} />
        <hr />
      </div>
    )
  }
  private tick() {
    this.setState({ date: new Date() });
  }
}

const App = () => (
  <div>
    <Clock message="Clock 1" />
    <Clock message="Clock 2" />
    <Clock message="Clock 3" />
  </div>
)

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
