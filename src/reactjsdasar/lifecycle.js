import React from "react";
import Sublifecycle from "./Sublifecycle";

export default class lifecycle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      makanan: "Bakso",
      data: {},
      tampilHalamanSub: false,
    };
  }

  //   componenDidMount() {
  //     fetch("https://jsonplaceholder.typicode.com/todos/1")
  //       .then((response) => response.json())
  //       .then((json) => console.log(json));
  //   }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          data: json,
        });
      });
  }

  ubahMakanan(value) {
    this.setState({
      makanan: value,
    });
  }

  render() {
    // console.log("Data : ", this.state.data);
    return (
      <div>
        {/* <h2>{this.state.data.title}</h2> */}
        <h2>{this.state.makanan}</h2>

        {this.state.tampilHalamanSub && (
          <Sublifecycle ubahMakanan={(value) => this.ubahMakanan(value)} />
        )}

        <button
          onClick={() =>
            this.setState({ tampilHalamanSub: !this.state.tampilHalamanSub })
          }
        >
          Tampilkan Halaman Sub
        </button>
      </div>
    );
  }
}
