import React from "react";
import marked from "marked";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

marked.setOptions({
  breaks: true,
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <div></div>;
  }
}

export default App;
