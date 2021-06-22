import {
  ContentWrapper,
  Form,
  FormText,
  FormPage,
  FormTitle,
  FormSubdivision,
  FormLabel
} from "./form";
import { FormLabelTitle, FormInput, FormInputSubmit } from "./form";
import React, { Component } from "react";
import foto from "../img/Cíntia Lorenzzo.jpg";
import axios from "axios";
import Confirmed from "./confirmed";
import styled from "styled-components";
import camera from "../img/Icon awesome-camera.svg";
import { userInfo } from "os";

const ResponsiveImg = styled.img`
  width: 100%;
  height: 100%;
  object-position: center;
  object-fit: cover;
  border-radius: 50%;
`;
const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  margin-right: 2rem;
`;

const Image = styled.div`
  height: 15vw;
  width: 15vw;
`;

const ImageText = styled.div`
  &:hover {
    cursor: pointer;
  }
  width: 100%;
  margin-top: 2rem;
  height: 1rem;
  display: flex;
  flex-direction: row;
  color: #ba66a3;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  text-align: center;
  justify-content: center;
  align-items: center;
`;
class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      email: "",
      novasenha: "",
      confirmasenha: "",
      senhaatual: "",
      correct: false,
      submitted: false
    };
  }
  handleChange = e => {
    this.setState({ submitted: false });
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleCurrentPassword = async e => {
    this.setState({ submitted: false });
    await this.setState({
      senhaatual: e.target.value
    });
    console.log(this.state.senhaatual);
    const user = {
      email: this.state.email,
      password: this.state.senhaatual
    };
    axios
      .post("http://localhost:3000/auth/login", user)
      .then(response => {
        this.setState({ correct: true });
      })
      .catch(error => {
        this.setState({ correct: false });
      });
  };
  componentWillMount() {
    console.log(window.location.pathname);
    axios
      .get("http://localhost:3000" + window.location.pathname, {
        headers: { Authorization: localStorage.getItem("token") }
      })
      .then(response => {
        this.setState({
          email: response.data.email,
          nome: response.data.name
        });
      });
  }

  handleSubmit = e => {
    let send = {
      password: this.state.novasenha,
      password_confirmation: this.state.confirmasenha,
      name: this.state.nome
    };
    if (this.state.correct)
      axios
        .put("http://localhost:3000" + window.location.pathname, send, {
          headers: { Authorization: localStorage.getItem("token") }
        })
        .then(response => {
          this.setState({ submitted: true });
        })
        .catch(error => {
          this.setState({ submitted: false });
        });
    e.preventDefault();
  };

  render() {
    return (
      <>
        <ContentWrapper>
          <ImageContainer>
            <Image>
              <ResponsiveImg src={foto} alt="Sua Foto" />
            </Image>
            <ImageText>
              <img
                height="100%"
                src={camera}
                alt="Icone Foto"
                style={{ marginRight: "0.5rem" }}
              />
              Alterar foto de perfil
            </ImageText>
          </ImageContainer>
          <Form>
            <FormText>
              <FormPage>SUA CONTA</FormPage>
              <FormTitle>Edite seu perfil</FormTitle>
            </FormText>
            <FormSubdivision>
              <FormLabel>
                <FormLabelTitle>Nome</FormLabelTitle>
                <FormInput
                  type="text"
                  name="nome"
                  value={this.state.nome}
                  onChange={this.handleChange}
                />
              </FormLabel>
              <FormLabel>
                <FormLabelTitle>Email</FormLabelTitle>
                <FormInput
                  type="text"
                  name="email"
                  defaultValue={this.state.email}
                  style={{ backgroundColor: "lightgrey" }}
                />
              </FormLabel>
            </FormSubdivision>
            <FormSubdivision>
              <FormLabel>
                <FormLabelTitle>Nova Senha</FormLabelTitle>
                <FormInput
                  type="password"
                  name="novasenha"
                  value={this.state.novasenha}
                  onChange={this.handleChange}
                />
              </FormLabel>
              <FormLabel>
                <FormLabelTitle>Confirme sua senha</FormLabelTitle>
                <FormInput
                  type="password"
                  name="confirmasenha"
                  value={this.state.confirmasenha}
                  onChange={this.handleChange}
                />
              </FormLabel>
            </FormSubdivision>
            <FormLabel style={{ width: "50%" }}>
              <FormLabelTitle>Senha atual</FormLabelTitle>
              <FormInput
                type="password"
                name="senhaatual"
                value={this.state.senhaatual}
                onChange={this.handleCurrentPassword}
              />
            </FormLabel>
            <FormSubdivision
              style={{
                justifyContent: "flex-start",
                alignItems: "center",
                marginTop: "1.5rem"
              }}
            >
              <FormInputSubmit
                type="submit"
                value="Salvar"
                onClick={this.handleSubmit}
              />
              <div style={{ marginRight: "1rem" }}>
                {this.state.submitted ? (
                  <Confirmed value="Salvo" />
                ) : (
                  <div style={{ height: "1rem" }}></div>
                )}
              </div>
            </FormSubdivision>
          </Form>
        </ContentWrapper>
      </>
    );
  }
}

export default Content;
