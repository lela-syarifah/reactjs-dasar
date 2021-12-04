import React from "react";
import { Table } from "react-bootstrap";
import "./new.css";

const tabel = ({ motors, editData, hapusData, totalBayar, motor }) => {
  return (
    <Table striped bordered hover className="tabel">
      <thead>
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
        {motors.map((motor, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}.</td>
              <td>{motor.nama}</td>
              <td>{motor.qty}</td>
              <td>{motor.harga}</td>
              <td>{motor.qty * motor.harga}</td>
              <td>
                <button
                  className="btn btn-warning mr-1"
                  onClick={() => editData(motor.id)}
                >
                  Edit
                </button>
                &nbsp;
                <button
                  className="btn btn-danger mr-1"
                  onClick={() => hapusData(motor.id)}
                >
                  Hapus
                </button>
              </td>
            </tr>
          );
        })}
        <td colSpan="6" align="right">
          <h5>Total Bayar : Rp. {() => totalBayar(motor.harga)}</h5>
        </td>
      </tbody>
    </Table>
  );
};

export default tabel;
