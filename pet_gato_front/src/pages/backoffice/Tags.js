import styled from "styled-components";
import React from "react";
import { Component } from 'react';
import { Wrapper, PetGatoText,PetGatoRef,PetGatoTd } from '../../components/styles.js'
import { Table,Button } from 'react-bootstrap'
import {Link} from '@reach/router'
import api from "../../services/api.js";
import Header from "../../components/header"

class Tags extends Component {
  state = {
    tags: []
  };

  componentDidMount() {
    this.loadtags();
  }
  loadtags = async () => {
    const apiResponse = await api.get('/tags');
    console.log(apiResponse.data);
    this.setState({ tags: apiResponse.data });
  };
  render() {
    return (
      <>
        <Header num="4" />
        <Wrapper>
          <PetGatoText>
            Contagem de tags: {this.state.tags.length}
          </PetGatoText>

          <h3>BACKOFFICE</h3>
          <PetGatoText color={"#BA66A3"}>Tags</PetGatoText>
          <div>
            {this.state.tags.map(tag => (
              <Table key={tag._id} hover striped>
                <thead>
                  <tr>
                    <th>#id</th>
                    <th>Nº de Publicações</th>
                    <th>Nome</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{tag.id}</td>
                    <td>5</td>
                    <PetGatoTd color={"#C882B4"}>{tag.name}</PetGatoTd>
                    <td>
                      {" "}
                      <PetGatoRef color={"#C882B4"} href="createtag">
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

export default Tags;