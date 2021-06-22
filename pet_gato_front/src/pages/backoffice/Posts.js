import styled from "styled-components";
import React from "react";
import Header from '../../components/header';
import { Component } from 'react';
import { Wrapper, PetGatoText, PetGatoRef, PetGatoTd, PetGatoColumn } from '../../components/styles.js'
import { Table, Button } from 'react-bootstrap'
import { Link } from '@reach/router'
import api from "../../services/api.js";
import { string } from "prop-types";
class Posts extends Component {
    state = {
        posts: []

    };

    componentDidMount(){
        this.loadPosts();
    }
    loadPosts = async ()=> {
        const apiResponse = await api.get("/posts");
        console.log(apiResponse.data);
        this.setState({posts: apiResponse.data});
    }
    render() {

        return (
            <>
            <Header num='4'/>
            <Wrapper>
               

                    <PetGatoText>Contagem de Posts: {this.state.posts.length}</PetGatoText>

                    <h3>BACKOFFICE</h3>
                    <PetGatoText color={"#BA66A3"}>Posts</PetGatoText>
                    <div>
                        {this.state.posts.map(post=>(

                    
                    <Table key={post._id} hover striped borderless>
                        <thead>
                            <tr>
                                <th>#id</th>
                                <th>Data</th>
                                <th>Título</th>
                                <th>Tags</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            
                                <td>{post.id}</td>
                                <td>{post.created_at}</td>
                                <PetGatoTd color={"#C882B4"}>{post.name}</PetGatoTd>
                                <td>Cuidados,Nutrição,Curiosidades</td>
                                <td> <PetGatoRef color={"#C882B4"} href="createpost">
                                    Editar


                                </PetGatoRef></td>
                                <td> <PetGatoRef color={"#C882B4"} href="test">
                                    Excluir


                                </PetGatoRef></td>
                            </tr>
                            
                        </tbody>
                    </Table>
                        ))}
                    </div>

                    <PetGatoColumn>


                    <Link to="/createpost" style={{ textDecoration: "none" }}>
                        <Button variant={"outline-danger"}>Criar Postagem</Button>
                    </Link>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <Button variant={"danger"}>Menu</Button>
                    </Link>

                    </PetGatoColumn>

              

                




            </Wrapper>
            </>

        );
    }
}

export default Posts;