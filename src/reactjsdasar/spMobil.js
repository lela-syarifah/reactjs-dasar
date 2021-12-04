import React from "react";

export default class spMobil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobil: "Hyundai," + " Ferari," + " Alpard",
    };
  }

  gantiMobil = (mobil_baru) => {
    this.setState({
      mobil: mobil_baru,
    });
  };

  render() {
    return (
      <div>
        <h3>{this.state.mobil}</h3>
        <button onClick={() => this.gantiMobil("Hyundai," + " Alpard")}>
          Ganti Mobil
        </button>
      </div>
    );
  }
}
