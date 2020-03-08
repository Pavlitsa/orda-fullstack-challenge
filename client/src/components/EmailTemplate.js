import React, { Component } from "react";
import axios from "axios";

class EmailTemplate extends Component {
  state = {
    orders: []
  };

  getData = () => {
    axios.get("/api/orders")
    .then(response => {
      this.setState({ orders: response.data })
      .catch(err => {
        console.log(err);
      });
    });
  };
  

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div>
        <h1>Hi</h1>
        {this.state.orders.map(order => <h1>{order.venueName.venue}</h1>)}
      </div>
    );
  }
}

export default EmailTemplate;
