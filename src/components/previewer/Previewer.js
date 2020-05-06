import React from "react";
import "./Previewer.scss";
import marked from "marked";

marked.setOptions({
  renderer: new marked.Renderer(),
  breaks: true,
});

const Previewer = (props) => {
  return (
    <div
      id='preview'
      dangerouslySetInnerHTML={{
        __html: marked(props.previewText),
      }}
    ></div>
  );
};

export default Previewer;
