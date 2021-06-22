import styled from "styled-components";
import React from "react";
import { Component } from 'react';
import { Wrapper, PetGatoText,PetGatoRef ,PetGatoTd} from '../../components/styles.js'
import { Table,Button } from 'react-bootstrap'
import {Link} from '@reach/router'
import api from "../../services/api.js";
import Header from "../../components/header";
class Users extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    this.loadusers();
  }
  loadusers = async () => {
    const apiResponse = await api.get("/users");
    console.log(apiResponse.data);
    this.setState({ users: apiResponse.data });
  };
  render() {
    return (
      <>
        <Header num="4" />
        <Wrapper>
          <PetGatoText>
            Contagem de users: {this.state.users.length}
          </PetGatoText>

          <h3>BACKOFFICE</h3>
          <PetGatoText color={"#BA66A3"}>Users</PetGatoText>
          <div>
            {this.state.users.map(user => (
              <Table key={user._id} hover striped>
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Admin?</th>
                    <th>Data de Ingresso</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{user.name}</td>
                    <td>{user.is_admin? "Admin" : "Usuário"} </td>
                    <PetGatoTd color={"#C882B4"}>{user.created_at}</PetGatoTd>
                    
                    <td>
                      {" "}
                      <PetGatoRef color={"#C882B4"} href="createuser">
                        Editar
                      </PetGatoRef>
                    </td>
                    <td>
                      {" "}
                      <PetGatoRef color={"#C882B4"} href="test">
                        Excluir
                      </PetGatoRef>
                    </td>
                  </tr>
                </tbody>
              </Table>
            ))}
          </div>

          <Link to="/" style={{ textDecoration: "none" }}>
            <Button variant={"danger"}>Menu</Button>
          </Link>
        </Wrapper>
      </>
    );
  }
}

export default Users;