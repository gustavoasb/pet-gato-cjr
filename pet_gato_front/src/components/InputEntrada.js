import React from 'react';
import styled from 'styled-components';

export const FormLabel = styled.label`
	display: inline-grid;
	width: 100%;
	height: 4.7877013vw;
	grid-template-columns: 1fr;
	grid-template-rows: 2vw 2.78877013vw;
	margin: 0;
`;

export const FormInput = styled.input`
	width: 100%;
	height: 100%;
	border: 1px solid #C882B4;
	text-indent: 5px;
	color: '#C882B4';
`;

export const LabelText = styled.span`
	height: 2;
	line-height: 2;
	font-size: 1vw;
	color: #C882B4;
`;

const InputEntrada = function(props) {
	return (
		<FormLabel>
			<LabelText>{props.label || 'exemplo'}</LabelText>
			<FormInput name={props.name || 'exemplo'} type={props.type || 'text'} />
		</FormLabel>
	)
}

export default InputEntrada;