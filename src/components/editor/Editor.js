import React from "react";
import "./Editor.css";

const Editor = (props) => {
  return (
    <div>
      <textarea id='editor'>{props.editorText}</textarea>
    </div>
  );
};

export default Editor;
