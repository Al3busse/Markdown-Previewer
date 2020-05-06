import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

const Editor = (props) => {
  return (
    <Col xs={12} sm={12} md={6}>
      <Row
        style={{
          position: "relative",
          border: "2px solid black",
          margin: "auto",
        }}
      >
        <h2 style={{ margin: "auto auto auto 5px" }}>Editor</h2>
        <button
          onClick={props.resetButton}
          style={{ margin: "auto 1px auto auto" }}
        >
          Reset
        </button>
        <button
          onClick={props.clearButton}
          style={{ margin: "auto 15px auto 1px" }}
        >
          Clear
        </button>
      </Row>

      <textarea
        style={{
          minHeight: "88vh",
          minWidth: "50%",
          overflowY: "visible",
          width: "100%",
        }}
        id='editor'
        onChange={props.onChange}
        value={props.placeHolder}
      ></textarea>
    </Col>
  );
};

export default Editor;
