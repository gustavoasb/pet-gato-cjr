import React, { Component } from "react";
import { navigate } from "@reach/router";

class LogOut extends Component {
  componentWillMount() {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    localStorage.removeItem("is_admin");
    navigate("/");
  }
  render() {
    return <>Deslogando</>;
  }
}

export default LogOut;
