import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa';
import ImgExemplo from './../img/exemplo.png';

const contentText = `
Sou veterinária há 5 anos,
apaixonada pelo mundo animal,
principalmente os que estão
sempre conosco no dia a dia.
Quando não estou no meu
consultório ou com meus pets,
estou aqui escrevendo conteúdo
para vocês. Espero que você
goste.
`;

const SobreAutoraBiggerDiv = styled.div`
	width: ${props => props.width ? props.width : '20vw'};
	height: ${props => props.height ? props.height : '32vw'};
	margin: ${props => props.margin ? props.margin : '0'};
	position: relative;
`;

const SobreAutoraDiv = styled.div`
	width: 100%;
	height: 90%;
	background-color: #FBE9F6;
	bottom: 0;
	position: absolute;
`;

const SobreAutoraTitle = styled.h1`
	width: 100%;
	text-align: center;
	line-height: 110%;
	font-size: ${props => props.fontSize ? props.fontSize : '1vw'};
	margin: 0;
`; 

const SobreAutoraNome = styled.div`
	width: 100%;
	text-align: center;
	line-height: 110%;
	font-size: ${props => props.fontSize ? props.fontSize : '1.6vw'};
	color: #C882B4;
`;

const SobreAutoraContent = styled.p`
	display: flex;
	height: 43%;
	width: 100%;
	text-align: center;
	padding: 0 1.6vw;
	margin-top: 0.4vw;
	margin-bottom: 0.75vw;
	overflow: hidden;
	font-size: ${props => props.fontSize ? props.fontSize : '1vw'};
	align-items: center;
`;

const SobreAutoraIconsGrid = styled.div`
	display: grid;
	width: 100%;
	grid-template-rows: 2.5vw;
	grid-template-columns: 2.5vw 2.5vw 2.5vw;
	grid-column-gap: 3%;
	justify-content: center;
	color: #C882B4;
`;

const SobreAutoraIconsDiv = styled.div`
	display: grid;
	width: 100%;
	height: 100%;
	border-radius: 6px;
	background-color: #FFFFFF;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr;
	align-items: center;
	justify-items: center;
	font-size: 1.8vw;
	line-height: 2vw;
`;

const RoundImg = styled.img`
	width: 50%;
	height 31.125%;
	overflow: hidden;
	position: absolute;
	left: 25%;
	border-radius: 12vw;
	z-index: 1;
`;

const Separador = styled.div`
	width: 100%;
	height: 28%;
`;

const SobreAutora = (props) => (
	<SobreAutoraBiggerDiv width={props.width || false} height={props.height || false} margin={props.margin || false}>
		<RoundImg src={props.imgSrc || ImgExemplo} />
		<SobreAutoraDiv>
			<Separador />
			<SobreAutoraTitle fontSize={props.titleFontSize || false}>{props.title || 'SOBRE A AUTORA'}</SobreAutoraTitle>
			<SobreAutoraNome fontSize={props.nomeFontSize || false}>{props.nome || 'Cíntia Lorenzzo'}</SobreAutoraNome>
			<SobreAutoraContent fontSize={props.contentFontSize || false}>{props.children || contentText}</SobreAutoraContent>

			<SobreAutoraIconsGrid>
				<SobreAutoraIconsDiv><FaFacebookSquare /></SobreAutoraIconsDiv>
				<SobreAutoraIconsDiv><FaInstagram /></SobreAutoraIconsDiv>
				<SobreAutoraIconsDiv><FaTwitterSquare /></SobreAutoraIconsDiv>
			</SobreAutoraIconsGrid>
		</SobreAutoraDiv>
	</SobreAutoraBiggerDiv>
);

export default SobreAutora;