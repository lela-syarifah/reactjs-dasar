import React from "react";
import { Table, Row, Button, Form, Col } from "react-bootstrap";
import "./tabel.css";

const producs = [
  {
    nama: "Scoopy",
    qty: 6,
    harga: 20000000,
  },
  {
    nama: "Beat",
    qty: 4,
    harga: 15000000,
  },
  {
    nama: "Mio",
    qty: 3,
    harga: 15000000,
  },
  {
    nama: "Mio J",
    qty: 7,
    harga: 15000000,
  },
  {
    nama: "Supra",
    qty: 4,
    harga: 15000000,
  },
  {
    nama: "Vario",
    qty: 8,
    harga: 20000000,
  },
  {
    nama: "Aerox",
    qty: 9,
    harga: 25000000,
  },
  {
    nama: "PCX",
    qty: 5,
    harga: 30000000,
  },
  {
    nama: "GTR",
    qty: 6,
    harga: 17000000,
  },
  {
    nama: " Lexi",
    qty: 9,
    harga: 21000000,
  },
];

//  const total bayar
const total_bayar = producs.reduce((total_harga, produc) => {
  return total_harga + produc.harga;
}, 0);

const tabel = () => {
  return (
    <div>
      <h1 align="center">Toko Motor ASTRI HONDA</h1>
      <br />
      <Table striped bordered hover className="all">
        <thead className="thead">
          <tr>
            <th>No.</th>
            <th>Merk</th>
            <th>QTY</th>
            <th>Harga</th>
            <th>Total Harga</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {producs.map((produc, index) => (
            <tr>
              <td>{index + 1}.</td>
              <td>{produc.nama}</td>
              <td>{produc.qty}</td>
              <td>{produc.harga}</td>
              <td>Rp. {produc.qty * produc.harga}</td>
              <td align="center">
                <button className="up">Ubah Pesanan</button> &nbsp;
                <button className="c">Cancel</button>
              </td>
            </tr>
          ))}
          <td colSpan="6" align="right">
            <h5 className="h5">Total Bayar : Rp. {total_bayar}</h5>
          </td>
        </tbody>
      </Table>
      <br />
      <h5>Promo Motor Harga kurang dari 20.000.000</h5>
      <Table striped bordered hover className="smua">
        <thead className="thead">
          <tr>
            <th>No.</th>
            <th>Merk</th>
            <th>Harga</th>
          </tr>
        </thead>
        <tbody>
          {producs
            .filter((produc) => produc.harga < 20000000)
            .map((produc, index) => (
              <tr>
                <td>{index + 1}.</td>
                <td>{produc.nama}</td>
                <td>Rp {produc.harga}</td>
              </tr>
            ))}
        </tbody>
      </Table>
      <br />
      <Row>
        <Col>
          <h4>Tambah Data</h4>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="nama">
              <Form.Label>Merk Motor</Form.Label>
              <Form.Control type="text" name="nama" />
            </Form.Group>
            <Form.Group className="fg">
              <Form.Label>Quantity</Form.Label>
              <Form.Control type="number" name="qty" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="harga">
              <Form.Label>Harga Motor</Form.Label>
              <Form.Control type="number" name="harga" />
            </Form.Group>
            <Button className="btn" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default tabel;
