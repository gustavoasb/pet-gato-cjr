import styled from "styled-components";
import React from "react";
import { Component } from 'react';
import { Wrapper, PetGatoText,PetGatoRef,PetGatoTd } from '../../components/styles.js'
import { Table,Button } from 'react-bootstrap'
import {Link} from '@reach/router'
import api from "../../services/api.js";
import Header from "../../components/header"
class Reports extends Component {
  state = {
    reports: []
  };

  componentDidMount() {
    this.loadreports();
  }
  loadreports = async () => {
    const apiResponse = await api.get('/reports');
    console.log(apiResponse.data);
    this.setState({ reports: apiResponse.data });
  };
  render() {
    return (
      <>
        <Header num="4" />
        <Wrapper>
          <PetGatoText>
            Contagem de reports: {this.state.reports.length}
          </PetGatoText>

          <h3>BACKOFFICE</h3>
          <PetGatoText color={"#BA66A3"}>Reports</PetGatoText>
          <div>
            {this.state.reports.map(report => (
              <Table key={report._id} hover striped borderless>
                <thead>
                  <tr>
                    <th>id</th>
                    <th>Data</th>
                    <th>Publicação</th>
                    <th>Autor do Comentário</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{report.id}</td>
                    <td>{report.created_at}</td>
                    <PetGatoTd color={"#C882B4"}>{report.title}</PetGatoTd>
                    <td>{report.name}</td>
                    <td>
                      {" "}
                      <PetGatoRef color={"#C882B4"} href="createreport">
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

export default Reports;