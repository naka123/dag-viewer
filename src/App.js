import React, { useState, Component } from "react";
import fetch from 'node-fetch';
import "./styles.css";

//import { JsonEditor } from "jsoneditor-react";
//import "jsoneditor-react/es/editor.min.css";

import DAGViewer from "./DAGViewer";

class App extends Component {
  constructor() {
    super();
    this.state = { dot_txt: ""};
  }

  async componentDidMount() {
    const response = await fetch(`/deps-upd.dot?t=${new Date().getTime()}`);
    const dot_txt = await response.text();

    this.setState({dot_txt: dot_txt});
    console.log(dot_txt)
  }

  render() {
    // const [dag, setDag] = useState(this.state.dot_txt);

    return (
      <div className="App">
        {/*<textarea value={dag} onChange={(e) => setDag(e.target.value)}></textarea>*/}
        <DAGViewer dot={this.state.dot_txt} height="100vh" />
      </div>
    );
  }
}

export default App