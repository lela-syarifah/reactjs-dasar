import React from "react";
import Tabel from "./tabel";
import Input from "./input";

export default class New extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      motors: [],
      nama: "",
      qty: "",
      harga: "",
      id: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.id === "") {
      this.setState({
        motors: [
          ...this.state.motors,
          {
            id: this.state.motors.length + 1,
            nama: this.state.nama,
            qty: this.state.qty,
            harga: this.state.harga,
          },
        ],
      });
    } else {
      const motorYangTidakDiPilih = this.state.motors
        .filter((motor) => motor.id !== this.state.id)
        .map((filterMotor) => {
          return filterMotor;
        });

      this.setState({
        motors: [
          ...motorYangTidakDiPilih,
          {
            id: this.state.motors.length + 1,
            nama: this.state.nama,
            qty: this.state.qty,
            harga: this.state.harga,
          },
        ],
      });
    }

    this.setState({
      nama: "",
      qty: "",
      harga: "",
      id: "",
    });
  };

  editData = (id) => {
    const motorYangDiPilih = this.state.motors
      .filter((motor) => motor.id === id)
      .map((filterMotor) => {
        return filterMotor;
      });

    this.setState({
      nama: motorYangDiPilih[0].nama,
      qty: motorYangDiPilih[0].qty,
      harga: motorYangDiPilih[0].harga,
      id: motorYangDiPilih[0].id,
    });
  };

  hapusData = (id) => {
    const motorBaru = this.state.motors
      .filter((motor) => motor.id !== id)
      .map((filterMotor) => {
        return filterMotor;
      });

    this.setState({
      motors: motorBaru,
    });
  };

  totalBayar = (id) => {
    const totalBayar = this.state.motors.reduce((total_harga, motor) => {
      return total_harga + motor.harga === id;
    }, 0);

    this.setState({
      motors: totalBayar,
    });
  };

  render() {
    return (
      <div className="mt-4">
        <div className="row">
          <div className="col">
            <Tabel
              motors={this.state.motors}
              editData={this.editData}
              hapusData={this.hapusData}
            />
          </div>
          <div className="col" id="ip">
            <Input
              {...this.state}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
          </div>
        </div>
      </div>
    );
  }
}
