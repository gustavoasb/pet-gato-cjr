import React from 'react';
import {Link, navigate} from '@reach/router';
import ImgEntrada from './../components/ImgEntrada';
import FormEntrada from './../components/FormEntrada';
import GridEntrada from './../components/GridEntrada';
import Btn from './../components/Btn';
import BottomMessage from './../components/BottomMessageEntrada';
import Logo from './../img/gatinho_petgato.svg';
import CadastroImg from './../img/Cadastro.jpg';
import LogoEntrada from './../components/LogoEntrada';
import {FormLabel, FormInput, LabelText} from '../components/InputEntrada';
import axios from 'axios'

class Cadastro extends React.Component {
	state={nome:"", email:"", senha:"", confirm_senha:""}
	handleChange = (e) => {
        this.setState({
		   [e.target.name]: e.target.value
        })
	}
	handleSubmit = (e) => {
        const user = {
            name: this.state.nome,
            email: this.state.email,
			password: this.state.senha,
			password_confirmation: this.state.confirm_senha
        }
        axios.post('http://localhost:3000/users', user).then(response =>  {
			const contacts = response.status;
			navigate('/login')
            this.setState({submitted: true})
        }).catch(error =>{
            this.setState({submitted: false})
        })
        e.preventDefault();
    }
	render() {
		return(<GridEntrada> 
			<ImgEntrada src={CadastroImg} />
			<FormEntrada>
				<LogoEntrada src={Logo} />
				<FormLabel>
					<LabelText>Nome</LabelText>
					<FormInput name="nome" type="name" value={this.state.nome} onChange={this.handleChange}/>
				</FormLabel>
				<FormLabel>
					<LabelText>Email</LabelText>
					<FormInput name="email" type="email" value={this.state.email} onChange={this.handleChange}/>
				</FormLabel>
				<FormLabel>
					<LabelText>Senha</LabelText>
					<FormInput name="senha" type="password" value={this.state.senha} onChange={this.handleChange}/>
				</FormLabel>
				<FormLabel>
					<LabelText>Confirme sua senha</LabelText>
					<FormInput name="confirm_senha" type="password" value={this.state.confirm_senha} onChange={this.handleChange}/>
				</FormLabel>
				<Btn onClick={this.handleSubmit}type='button' height='3.5vw' margin='7% 0 0 0'>CADASTRAR</Btn>
				<BottomMessage>Já possui conta?<Link to='/login' style={{textDecoration: 'none'}}><BottomMessage color='#BA66A3'> Entrar</BottomMessage></Link></BottomMessage>
			</FormEntrada>
		</GridEntrada>)
	}
}

export default Cadastro;