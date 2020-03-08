import React, { Component } from "react";
import axios from "axios";
import "./EmailTemplate.css";

class EmailTemplate extends Component {
  state = {
    orders: []
  };

  getData = () => {
    axios
      .get("/orders")
      .then(response => {
        this.setState({
          orders: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getData();
  }

  renderTableData() {
    return this.state.orders.map((order, index) => {
      const { sumTotal, time, tipSum, currency } = order; //destructuring
      const a = new Date(time * 1000);
      var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      const year = a.getFullYear();
      const month = months[a.getMonth()];
      const date = a.getDate();
      return (
        <tr key={index}>
          <td>
            Total daily sum: {sumTotal} {currency}
          </td>
          <td>Timestamp: {date} {month} {year}</td>
          <td>
            Sum of tips: {tipSum} {currency}
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <h1 id="title">Email Template Table</h1>
        <table id="orders">
          <tbody>{this.renderTableData()}</tbody>
        </table>
      </div>
    );
  }
}

export default EmailTemplate;
