import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router'
import Logo from './../img/gatinho_petgato_branco.svg';

const Grid = styled.div`
	display: grid;
	grid-template-rows: 1fr;
	grid-template-columns: 1fr auto auto auto auto;
	height: 5vw;
	width: 100%;
	padding-right: 4%;
	padding-left: 3%;
	justify-items: left;
	align-items: center;
	background-color: #BA66A3;
	grid-column-gap: 1%;
	box-shadow: 0px 5px 20px -10px;
	margin: ${props => props.margin ? props.margin : '0 0 3vw'};
`;

const NavButton = styled.div`
	display: inline-block;
	font-size: 1.25vw;
	color: #FFFFFF;
	padding: 0 0.8vw;
	white-space: nowrap;
	width: auto;
	cursor: pointer;
	line-height: 5vw;
	font-weight: ${props => props.fontWeight ? props.fontWeight : 'normal'};
	transition: background-color 0.7s, color 0.7s;

	&:hover {
		background-color: white;
		color: #BA66A3;
	}
`;

const NavLogo = styled.img`
	height: 4vw;
	width: 6vw;
`;

const NavBar = () => (
	<Grid>
		<NavLogo src={Logo} />
		<Link to='/' style={{textDecoration: 'none'}}><NavButton fontWeight='bold'>Página Inicial</NavButton></Link>
		<Link to='/backoffice' style={{textDecoration: 'none'}}><NavButton>BackOffice</NavButton></Link>
		<Link to='/sobre' style={{textDecoration: 'none'}}><NavButton>Sobre Nós</NavButton></Link>
		<Link to='/fale-conosco' style={{textDecoration: 'none'}}><NavButton>Fale Conosco</NavButton></Link>
		<Link to='/login' style={{textDecoration: 'none'}}><NavButton>Entrar</NavButton></Link>
		
	</Grid>
);

export default NavBar;