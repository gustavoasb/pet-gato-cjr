import styled from "styled-components";
import React from "react";
import Header from "../../components/header";
import { Component } from 'react';
import { Wrapper, PetGatoText,PetGatoRef,PetGatoTd } from '../../components/styles.js'
import { Table,Button } from 'react-bootstrap'
import {Link} from '@reach/router'
import api from "../../services/api.js";
class Messages extends Component {
  state = {
    contacts: []
  };

  componentDidMount() {
    this.loadcontacts();
  }
  loadcontacts = async () => {
    const apiResponse = await api.get("/contacts");
    console.log(apiResponse.data);
    this.setState({ contacts: apiResponse.data });
  };
  render() {
    return (
      <>
        <Header num="4" />
        <Wrapper>
          <PetGatoText>
            Contagem de contacts: {this.state.contacts.length}
          </PetGatoText>

          <h3>BACKOFFICE</h3>
          <PetGatoText color={"#BA66A3"}>Contacts</PetGatoText>
          <div>
            {this.state.contacts.map(contact => (
              <Table key={contact._id} hover striped borderless>
                <thead>
                  <tr>
                    <th>Remetente</th>
                    <th>Descrição</th>
                    <th>Data de Envio</th>
                  </tr>
                </thead>
                <tbody>
                  
                  <tr>
                    <td>{contact.name}</td>
                    <td>{contact.description}</td>
                    <PetGatoTd color={"#C882B4"}>{contact.created_at}</PetGatoTd>
                   
                    <td>
                      {" "}
                      <PetGatoRef color={"#C882B4"} href="createcontact">
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

export default Messages;