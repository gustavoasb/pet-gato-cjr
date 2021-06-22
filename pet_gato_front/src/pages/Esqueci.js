import React from 'react';
import {Link, navigate} from '@reach/router';
import styled from 'styled-components';
import ImgEntrada from './../components/ImgEntrada';
import FormEntrada from './../components/FormEntrada';
import GridEntrada from './../components/GridEntrada';
import Btn from './../components/Btn';
import BottomMessage from './../components/BottomMessageEntrada';
import Logo from './../img/gatinho_petgato.svg';
import EsqueciImg from './../img/Esqueci.jpg';
import LogoEntrada from './../components/LogoEntrada';
import {FormLabel, FormInput, LabelText} from '../components/InputEntrada';
import axios from 'axios'

const Explicacao = styled.span`
	display: inline-block;
	color: #707070;
	font-size: 1vw;
	width: 100%;
	text-align: center;
`;

class Esqueci extends React.Component {
	state={email:"", password:"12345678"}
	handleChange = (e) => {
        this.setState({
		   [e.target.name]: e.target.value
        })
	}
	handleSubmit = (e) => {
        const user = {
			email: this.state.email
        }
        axios.put('http://localhost:3000/recover', user).then(response =>  {
			navigate('/login')
        }).catch(error =>{
        })
        e.preventDefault();
    }
	render() {
		return(
				<>
					<GridEntrada> 
					<ImgEntrada src={EsqueciImg} />
					<FormEntrada>
					<LogoEntrada src={Logo} />
					<FormLabel>
						<LabelText>Nome</LabelText>
						<FormInput name="email" type="email" value={this.state.email} onChange={this.handleChange}/>
					</FormLabel>
					<Explicacao>Insira seu email para recuperar a senha</Explicacao>
					<Btn type='button' height='3.5vw' margin='7% 0 0 0' onClick={this.handleSubmit}>RECUPERAR SENHA</Btn>
					<BottomMessage>Lembrou a senha? <Link style={{textDecoration: 'none', marginTop: '7% 0 0'}} to='/login'><BottomMessage color='#BA66A3' style={{fontWeight:600}}>Faça login</BottomMessage></Link></BottomMessage>
					<BottomMessage margin='0'>Ainda não tem conta?
					<Link to='/cadastro' style={{textDecoration: 'none'}}>
						<BottomMessage color='#BA66A3' style={{fontWeight:600, marginTop: '7% 0 0'}}> Cadastre-se aqui</BottomMessage>
					</Link></BottomMessage>
					</FormEntrada>
					</GridEntrada>
				</>
		)
	}
}

export default Esqueci;