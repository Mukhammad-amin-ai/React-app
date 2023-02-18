import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";

class Stopwatch extends React.Component {
  state = {
    hour: 0,
    minute: 0,
    second: 0,
    setInter: ""
  };

  startBtn = () => {
     let a =  setInterval(() => {
      let { second } = this.state;
      second++;
      if (second === 59) {
        let { minute } = this.state;
        minute++;
        second = 0;
        this.setState({
          minute,
        });
        if (minute === 59) {
          let { hour, minute } = this.state;
          hour++;
          minute = 0;
          if (hour === 59) {
            let { hour, minute, second } = this.state;
            hour = 0;
            minute = 0;
            second = 0;
            this.setState({
              hour,
              minute,
              second,
            });
          }
          this.setState({
            hour,
            minute,
          });
        }
      }
      this.setState({
        second,
      });
    }, 1000);
    this.setState({
        setInter: a
    })
  };

  stopBtn = () => {
    clearInterval(this.state.setInter)
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="center">
            <p>{this.state.hour}:</p>
            <p>{this.state.minute}:</p>
            <p>{this.state.second}</p>
          </div>
          <div className="buttons">
            <button onClick={this.startBtn}>Start</button>
            <button onClick={this.stopBtn}>Stop</button>
            <button>Delete</button>
          </div>
        </div>
      </>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Stopwatch />
  </>
);
