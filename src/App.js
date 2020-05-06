import React, { Component } from "react";
import marked from "marked";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Editor from "./components/editor/Editor";
import Previewer from "./components/previewer/Previewer";
import { Container } from "react-bootstrap";

marked.setOptions({
  breaks: true,
});

const placeholder = `# This is a heading

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: placeholder,
    };
  }

  render() {
    return (
      <Container
        style={{
          display: "flex",
          flexWrap: "wrap",
          margin: "auto",
          justifyContent: "space-around",
        }}
      >
        <h1 style={{ width: "100%", textAlign: "center" }}>
          Welcome to my React Markdown Previewer!
        </h1>
        <Editor editorText={this.state.text} />
        <Previewer previewText={this.state.text} />
      </Container>
    );
  }
}

export default App;
