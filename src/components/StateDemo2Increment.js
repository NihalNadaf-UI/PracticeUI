import React, { Component } from "react";

// state is an reserved keyword in react
class Message2 extends Component {
  constructor() {
    super(); // call should be made to base class constructor i.e Component
    this.state = {
      count: 0,
    };
  }

  increment() {
    // this.setState(
    //   // setState has 2 parameter
    //   {
    //     // this is 1st para i.e Object which set value
    //     count: this.state.count + 1,
    //   },
    //   // this is 2nd para i.e arrow function where we update value in callback func
    //   () => {
    //     console.log("Callback value:-", this.state.count);
    //   }
    // );

    this.setState(
      (prevCount) => ({
        count: prevCount.count + 1,
      }),
      () => {
        console.log("Callback value:-", this.state.count);
      }
    );
  }

  incrementByFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div>
        <h2>count {this.state.count}</h2>
        <button onClick={() => this.incrementByFive()}> Increment</button>
      </div>
    );
  }
}

export default Message2;
