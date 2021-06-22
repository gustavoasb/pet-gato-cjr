import styled from "styled-components";
import React from "react";
import gatinho_petgato_branco from "../img/gatinho_petgato_branco.svg";
import { Link } from "@reach/router";

const HeaderWrapper = styled.header`
  width: 100%;
  min-height: 6rem;
  background-color: #ba66a3;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem 0 3rem;
  box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.12),
    0 0.2rem 0.5rem rgba(0, 0, 0, 0.24);
  overflow: hidden;
`;

const HeaderDiv = styled.header`
  &:hover {
    cursor: pointer;
  }
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: nowrap;
  color: #ffffff;
`;

const HeaderItem = styled.header`
  &:hover {
    color: #fbe9f6;
    cursor: pointer;
  }
  margin: 1rem;
  font-family: "Montserrat", sans-serif;
  font-size: 1.2rem;
  font-weight: 300;
  color: #ffffff;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

function StyleHeaderPage(props, logged, admin) {
  return (
    <>
      {admin ? (
        <StyledLink to="/backoffice">
          <HeaderItem style={props.num === "0" ? { fontWeight: "600" } : {}}>
            Backoffice
          </HeaderItem>
        </StyledLink>
      ) : null}
      <StyledLink to="/">
        <HeaderItem style={props.num === "1" ? { fontWeight: "600" } : {}}>
          Página Inicial
        </HeaderItem>
      </StyledLink>
      <StyledLink to="/sobre">
        <HeaderItem style={props.num === "2" ? { fontWeight: "600" } : {}}>
          Sobre Nós
        </HeaderItem>
      </StyledLink>
      <StyledLink to="/fale-conosco">
        <HeaderItem style={props.num === "3" ? { fontWeight: "600" } : {}}>
          Fale Conosco
        </HeaderItem>
      </StyledLink>
      {logged ? (
        <>
          <StyledLink to={`/users/${localStorage.getItem("user_id")}`}>
            <HeaderItem style={props.num === "4" ? { fontWeight: "600" } : {}}>
              {" "}
              Minha conta
            </HeaderItem>
          </StyledLink>
          <StyledLink to="/logout">
            <HeaderItem style={props.num === "5" ? { fontWeight: "600" } : {}}>
              {" "}
              Deslogar
            </HeaderItem>
          </StyledLink>
        </>
      ) : (
        <StyledLink to="/login">
          <HeaderItem style={props.num === "4" ? { fontWeight: "600" } : {}}>
            {" "}
            Entrar
          </HeaderItem>
        </StyledLink>
      )}
    </>
  );
}

class Header extends React.Component {
    state = {logged: false, admin: false}
    componentWillMount(){
        if(localStorage.getItem("token") != null) 
            this.setState({logged: true})
        else
            this.setState({logged: false})
        if(localStorage.getItem("is_admin") === "true")
            this.setState({admin: true})
        else
            this.setState({admin: false})
    }
  render() {
    return (
      <HeaderWrapper>
        <img
          src={gatinho_petgato_branco}
          alt="Logo Pet Gatô"
          height="50rem"
        ></img>
        <HeaderDiv>{StyleHeaderPage(this.props,this.state.logged,this.state.admin)}</HeaderDiv>
      </HeaderWrapper>
    );
  }
}

export default Header;
