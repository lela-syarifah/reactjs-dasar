import React from "react";

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

const motor = () => {
  return (
    <div>
      <h5>Toko Motor ESTETOK</h5>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Merk</th>
            <th>QTY</th>
            <th>Harga</th>
            <th>Total Harga</th>
          </tr>
        </thead>
        <tbody>
          {producs.map((produc, index) => (
            <tr>
              <td>{index + 1}. </td>
              <td>{produc.nama}</td>
              <td>{produc.qty}</td>
              <td>{produc.harga}</td>
              <td>Rp.{produc.qty * produc.harga}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h5>motor promo Harga kurang dari 20.000.000</h5>
      <ul>
        {producs
          .filter((produc) => produc.harga < 20000000)
          .map((produc, index) => (
            <p>
              {index + 1}. {produc.nama} = Rp {produc.harga}
            </p>
          ))}
      </ul>

      <h5>Total Bayar : Rp. {total_bayar}</h5>
    </div>
  );
};

export default motor;
