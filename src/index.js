import React from "react";
import ReactDOM from "react-dom";

import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { member: [] };
  }

  memberList = list => {
    const memberList = list.map((member, index) => {
      return (
        <li>
          {member.name} {member.age}
        </li>
      );
    });

    return <ul>{memberList}</ul>;
  };

  render() {
    return (
      <div>
        <button onClick={this.getJson}>Get JSON</button>
        {this.memberList(this.state.member)}
      </div>
    );
  }

  getJson = () => {
    console.log(this.state.member);
    const url = "https://api.myjson.com/bins/1fd0s0";

    axios.get(url).then(res => {
      console.log(res.data);
      this.setState(res.data);
    });
  };
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
