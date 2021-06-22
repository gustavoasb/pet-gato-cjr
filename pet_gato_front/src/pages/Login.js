import React from "react";
import { Link, navigate } from "@reach/router";
import ImgEntrada from "./../components/ImgEntrada";
import FormEntrada from "./../components/FormEntrada";
import GridEntrada from "./../components/GridEntrada";
import Btn from "./../components/Btn";
import BottomMessage from "./../components/BottomMessageEntrada";
import Logo from "./../img/gatinho_petgato.svg";
import LoginImg from "./../img/Login.jpg";
import LogoEntrada from "./../components/LogoEntrada";
import axios from "axios";
import { FormLabel, FormInput, LabelText } from "../components/InputEntrada";

class Login extends React.Component {
  state = { email: "", senha: "" };
  handleChangePassword = e => {
    this.setState({
      senha: e.target.value
    });
  };
  handleChangeEmail = e => {
    this.setState({
      email: e.target.value
    });
  };
  handleSubmit = e => {
    const user = {
      email: this.state.email,
      password: this.state.senha
    };
    axios
      .post("http://localhost:3000/auth/login", user)
      .then(response => {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user_id", response.data.user_id);
        localStorage.setItem("is_admin", response.data.is_admin);
        navigate("/");
      })
      .catch(error => {
        console.log(error.response);
      });
    e.preventDefault();
  };
  render() {
    return (
      <GridEntrada>
        <ImgEntrada src={LoginImg} />
        <FormEntrada>
          <LogoEntrada src={Logo} />
          <FormLabel>
            <LabelText>Email</LabelText>
            <FormInput
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleChangeEmail}
            />
          </FormLabel>
          <FormLabel>
            <LabelText>Senha</LabelText>
            <FormInput
              name="senha"
              type="password"
              value={this.state.senha}
              onChange={this.handleChangePassword}
            />
          </FormLabel>
          <Btn
            type="button"
            height="3.5vw"
            margin="7% 0 0 0"
            onClick={this.handleSubmit}
          >
            ENTRAR
          </Btn>
          <Link
            style={{ textDecoration: "none", marginTop: "7%" }}
            to="/esqueci"
          >
            <BottomMessage color="#BA66A3" style={{ fontWeight: "600" }}>
              Esqueci minha senha
            </BottomMessage>
          </Link>
          <BottomMessage style={{ marginTop: "0" }}>
            Ainda não tem conta?{" "}
            <Link to="/cadastro" style={{ textDecoration: "none" }}>
              <BottomMessage color="#BA66A3" style={{ fontWeight: "600" }}>
                Crie sua conta
              </BottomMessage>
            </Link>
          </BottomMessage>
        </FormEntrada>
      </GridEntrada>
    );
  }
}

export default Login;
