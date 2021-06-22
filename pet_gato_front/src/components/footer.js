import React from 'react';
import styled from 'styled-components';
import { FaRegCopyright } from 'react-icons/fa';

const FooterDiv = styled.footer`
	display: flex;
	width: 100%;
	height: 3.5vw;
	font-size: 1vw;
	color: #FFFFFF;
	align-items: center;
	justify-content: center;
	background-color: #C882B4;
`;

const Content = ({texto}) => (
	texto ? <><FaRegCopyright /><span>{texto}</span></> : <><FaRegCopyright /><span>&nbsp;- Todos os direitos reservados. Desenvolvido por Trainee fofinho</span></>
);

const Footer = (props) => (
	<FooterDiv><Content texto={props.texto || false} /></FooterDiv>
);

export default Footer;