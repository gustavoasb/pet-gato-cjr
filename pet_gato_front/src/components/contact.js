import {ContentWrapper, Img, Form, FormText, FormPage, FormTitle, FormSubdivision, FormLabel} from './form'
import {FormLabelTitle, FormInput, FormInputBigger, FormInputSubmit} from './form'
import React, {Component} from 'react'
import cachorreo from '../img/Imagem de Contato.jpg'
import axios from 'axios'
import Confirmed from './confirmed';

class Content extends Component{
    state = {nome: "", email: "", mensagem: "", submitted: false};
    handleChange = (e) => {
        this.setState({submitted: false})
        this.setState({
           [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        const contact = {
            name: this.state.nome,
            email: this.state.email,
            description: this.state.mensagem
        }
        axios.post('http://localhost:3000/contacts', contact).then(response =>  {
            const contacts = response.status;
            this.setState({submitted: true})
        }).catch(error =>{
            this.setState({submitted: false})
        })
        e.preventDefault();
    }
    render(){
        return(
            <>  
            <ContentWrapper>
                <Img src={cachorreo} alt="Logo Pet Gatô"  width="25%"></Img>
                <Form>
                    <FormText>
                        <FormPage>FALE CONOSCO</FormPage>
                        <FormTitle>Envie-nos uma mensagem de cão-tato</FormTitle>
                    </FormText>
                    <FormSubdivision>
                        <FormLabel>
                            <FormLabelTitle>Nome</FormLabelTitle>
                            <FormInput type="text" name="nome" value={this.state.name} onChange={this.handleChange}/>
                        </FormLabel>
                        <FormLabel>
                            <FormLabelTitle>Email</FormLabelTitle>
                            <FormInput type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
                        </FormLabel>
                    </FormSubdivision>
                    <FormLabel>
                        <FormLabelTitle>Mensagem</FormLabelTitle>
                        <FormInputBigger name="mensagem" placeholder="Digite aqui sua meow-sagem..." value={this.state.mensagem} onChange={this.handleChange}/>
                    </FormLabel>
                    <FormSubdivision style={{justifyContent: 'flex-end', alignItems: 'center', marginTop:"1.5rem"}}>
                        <div style={{marginRight: '1rem'}}>
                        { this.state.submitted 
                        ? <Confirmed value="Enviado"/>
                        : <div style={{height: '1rem'}}></div>
                        }
                        </div>
                        <FormInputSubmit type="submit" value="Enviar" onClick={this.handleSubmit}/>
                    </FormSubdivision>
                </Form>
            </ContentWrapper>
            </>
        )
    }
};

export default Content