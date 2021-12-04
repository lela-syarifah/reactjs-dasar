import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./new.css";

const input = ({ nama, qty, harga, handleChange, handleSubmit }) => {
  return (
    <div className="mt-5">
      <Row>
        <Col>
          <h4>Tambah Data</h4>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="nama">
              <Form.Label>Merk</Form.Label>
              <Form.Control
                type="text"
                name="nama"
                value={nama}
                onChange={(event) => handleChange(event)}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>QTY</Form.Label>
              <Form.Control
                type="number"
                rows="3"
                name="qty"
                value={qty}
                onChange={(event) => handleChange(event)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="harga" id="hrg">
              <Form.Label>Harga</Form.Label>
              <Form.Control
                type="number"
                name="harga"
                value={harga}
                onChange={(event) => handleChange(event)}
                required
              />
            </Form.Group>
            <Button variant="danger" type="submit" className="btn">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default input;
