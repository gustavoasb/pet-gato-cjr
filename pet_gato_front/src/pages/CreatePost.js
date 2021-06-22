import styled from "styled-components";
import React from "react";
import { Component } from 'react';
import { Wrapper, PetGatoText, PetGatoRef, PetGatoTd, PetGatoColumn,PetGatoGrid } from '../components/styles'
import { Table, Button, Form } from 'react-bootstrap'
import { Link } from '@reach/router'
import Editor from '../components/Editor'
class CreatePost extends Component {
    render() {
        return (
            <Wrapper>
                <div>

                    <h3>BACKOFFICE</h3>
                    <PetGatoText color={"#BA66A3"}>Nova Publicação</PetGatoText>



                    <form>
                        <div class="form-group">
                            <label for="exampleFormControlInput1"><PetGatoText color={"#C882B4"} fontsize={14}>Título da Publicação</PetGatoText></label>
                            <input type="title" class="form-control" id="exampleFormControlInput1" placeholder="título" />
                        </div>

                        <div class="form-group">
                            <Editor></Editor>
                        </div>

                        <div class="form-group">
                            <label for="exampleFormControlFile1"><PetGatoText color={"#C882B4"} fontsize={14}>Escolha uma imagem de capa</PetGatoText></label>
                            <input type="file" class="form-control-file" id="exampleFormControlFile1" />

                            <PetGatoText color={"#C882B4"} fontsize={14}>Escolha pelo menos uma tag</PetGatoText>


                            <PetGatoGrid>

                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                <label class="form-check-label" for="defaultCheck1">
                                    Adestramento </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                <label class="form-check-label" for="defaultCheck1">
                                    Adestramento </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                <label class="form-check-label" for="defaultCheck1">
                                    Adestramento </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                <label class="form-check-label" for="defaultCheck1">
                                    Adestramento </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                <label class="form-check-label" for="defaultCheck1">
                                    Adestramento </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                <label class="form-check-label" for="defaultCheck1">
                                    Adestramento </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                <label class="form-check-label" for="defaultCheck1">
                                    Estética </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                <label class="form-check-label" for="defaultCheck1">
                                   Peixes </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                <label class="form-check-label" for="defaultCheck1">
                                    Guias </label>
                            </div>
                            </PetGatoGrid>

                            <Link to="/tags" style={{ textDecoration: "none" }}>
                            <Button variant={"outline-danger"}>Gerenciar Tags</Button>
                        </Link>
                        </div>

                    </form>




                    <PetGatoColumn elementos={"elem elem"}>





                        <Link to="/posts" style={{ textDecoration: "none" }}>
                            <Button variant={"danger"}>Publicar</Button>
                        </Link>

                        <Link to="/" style={{ textDecoration: "none" }}>
                            <Button variant={"outline-danger"}>Menu</Button>
                        </Link>

                    </PetGatoColumn>

                </div>








            </Wrapper>


        );
    }
}

export default CreatePost;