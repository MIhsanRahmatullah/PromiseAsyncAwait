import React, { Component } from "react";
import ReactDom from "react-dom";

class App extends Component {
  state = {
    textP: "this is text using Promise",
    textP1: "this is text using Promise",
    textA: "this is text using Async Await",
    textA1: "this is text using Async Await"
  };

  pertama = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("gudang garam");
      }, 1000);
    });
  };

  kedua = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(" asin pisan");
      }, 2000);
    });
  };

  ketiga = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(" jadi haus");
      }, 3000);
    });
  };

  keempat = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(" minum heula atuh");
      }, 4000);
    });
  };

  login = async () => {
    //ini promise
    Promise.all([this.ketiga(), this.keempat()]).then(([res1, res2]) => {
      this.setState({ textP1: res1 + res2 });
    });
    Promise.all([this.pertama(), this.kedua()]).then(([res1, res2]) => {
      this.setState({ textP: res1 + res2 });
    });
    //ini Async Await
    const one = await this.pertama();
    const two = await this.kedua();
    const pertama = one + two;
    this.setState({
      textA: pertama
    });
    const three = await this.ketiga();
    const four = await this.keempat();
    const kedua = three + four;
    this.setState({
      textA1: kedua
    });
  };

  render() {
    const { textP, textA, textP1, textA1 } = this.state;
    const { login } = this;

    return (
      <div>
        <button onClick={login}>Login</button>
        <p>Ini Promise</p>
        <h2>{textP}</h2>
        <h2>{textP1}</h2>
        <p>Ini Async Await</p>
        <h2>{textA}</h2>
        <h2>{textA1}</h2>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDom.render(<App />, rootElement);
