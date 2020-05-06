import React from "react";
import "./Editor.css";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

const Editor = (props) => {
  return (
    <Col sm={6} xs={12}>
      <Row
        style={{
          position: "relative",
          border: "2px solid black",
          margin: "auto",
        }}
      >
        <h2 style={{ margin: "auto auto auto 5px" }}>Editor</h2>
        <button style={{ margin: "auto 15px auto auto" }}>Clear</button>
      </Row>

      <textarea
        style={{ minHeight: "88vh", minWidth: "50%", overflowY: "visible" }}
        id='editor'
        onChange={props.onChange}
      >
        {props.editorText}
      </textarea>
    </Col>
  );
};

export default Editor;
