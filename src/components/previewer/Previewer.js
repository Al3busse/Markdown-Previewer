import React from "react";
import "./Previewer.scss";
import marked from "marked";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

marked.setOptions({
  renderer: new marked.Renderer(),
  breaks: true,
});

const Previewer = (props) => {
  return (
    <Col sm={6} xs={12} style={{ border: "2px solid black", padding: "0px" }}>
      <Row
        style={{
          position: "relative",
          borderBottom: "2px solid black",
          margin: "auto",
        }}
      >
        <h2 style={{ margin: "auto auto auto 5px" }}>Preview</h2>
      </Row>
      <div
        style={{ overflowX: "scroll", padding: "0px 15px 0px 15px" }}
        id='preview'
        dangerouslySetInnerHTML={{
          __html: marked(props.previewText),
        }}
      />
    </Col>
  );
};

export default Previewer;
