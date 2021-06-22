import React from 'react';
import styled from 'styled-components';

const ComentarioForm = styled.form`
	display: grid;
	width: ${props => props.width ? props.width : '50vw'};
	margin: ${props => props.margin ? props.margin : '0'};
	height: auto;
	grid-template-rows: auto auto;
	grid-template-columns: 1fr;
	justify-items: right;
`;

const ComentarioText = styled.textarea`
	display: block;
	border: 1px solid #BA66A3;
	font-size: 1vw;
	width: 100%;
	border-radius: 0.5vw;
`;

const ComentarioButton = styled.button`
	border: 1px solid #BA66A3;
	font-size: 1.2vw;
	height: 3vw;
	width: 7vw;
	margin-top: 2vw;
	background-color: #FFFFFF;
	border-radius: 5px;
	float: right;
	transition: 0.7s;

	&:hover{
		background-color: #BA66A3;
		color: #FFFFFF;
	}
`;

const Comentario = (props) => (
	<>
		<ComentarioForm width={props.width || false} margin={props.margin || false}>
			<ComentarioText rows='5' />
			<ComentarioButton onClick={props.onClick || function(){}}>ENVIAR</ComentarioButton>
		</ComentarioForm>
	</>
);

export default Comentario;