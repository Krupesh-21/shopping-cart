import React from "react";
import { Button, Spinner } from "react-bootstrap";

const Loader = ({ label }) => {
  return (
    <Button variant="primary" disabled style={{ margin: "300px 550px" }}>
      <Spinner
        as="span"
        animation="grow"
        size="sm"
        role="status"
        aria-hidden="true"
      />
      {`Loading ${label}...`}
    </Button>
  );
};

export default Loader;
