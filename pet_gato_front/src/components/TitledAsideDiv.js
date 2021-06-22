import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
	width: ${props => props.width ? props.width : '20vw'};
	height: ${props => props.height ? props.height : 'auto'};
	margin: ${props => props.margin ? props.margin : '0'};
`;

const Title = styled.h1`
	width: 80%;
	line-height: 110%;
	font-size: 1.7vw;
	margin: ${props => props.margin ? props.margin : '1vw 0 1.8vw'};
`;

const TitledAsideDiv = (props) => (
	<Div height={props.height || false} width={props.width || false}>
		<Title>{props.title || 'Exemplo: '}</Title>
		{props.children}
	</Div>
);

export default TitledAsideDiv;