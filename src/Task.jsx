import React from "react";
import Card from "react-bootstrap/Card";

export default function Task(props) {
  const deleteClick = () => {
    props.delete(props.id);
  };
  return (
    <div className="col-md-4 mb-5">
      <Card bg="light" className="contentDiv" style={{ padding: "0px" }}>
        <Card.Header> {props.title} </Card.Header>
        <Card.Body className="">
          <Card.Text>{props.content}</Card.Text>
          <button className="btn btn-danger" onClick={deleteClick}>
            Sil
          </button>
        </Card.Body>
      </Card>
    </div>
  );
}
