import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

const PrivateLinkedAsideElement = styled.div`
	display: flex;
	width: ${props => props.width ? props.width : '100%'};
	max-height: ${props => props.maxHeight ? props.maxHeight : '12vw'};
	align-content: center;
	justify-content: center;
	flex-direction: column;
	position: relative;
	margin: ${props => props.margin ? props.margin : '1.2vw 0 0 0'};
	padding-bottom: 1.2vw;

	&::after {
		display: ${props => props.separate ? 'block' : 'none'};
		position: absolute;
		height: 1px;
		width: 80%;
		bottom: 0;
		left: 10%;
		background-color: #707070;
		content: \"\";
	}
`;

const TitleAsideElement = styled.h2`
	width: 100%;
	color: #BA66A3;
	font-size: ${props => props.fontSize ? props.fontSize : '1.1vw'};
	font-weight: bold;
	margin: -2% 0 0;
	max-height: 22%;
	overflow: hidden;
`;

const SinopseAsideElement = styled.p`
	width: 100%;
	font-size: ${props => props.fontSize ? props.fontSize : '1vw'};
	margin: 1.25% 0;
	max-height: 38%;
	color: black;
	overflow: hidden;
	height: auto;
	word-break: break-word;
`;

const DataAsideElement = styled.div`
	width: 100%;
	font-size: ${props => props.fontSize ? props.fontSize : '0.9vw'};
	color: #707070;
	max-height: 10%;
	overflow: hidden;
`;

const LinkedAsideElement = (props) => (
	<Link style={{textDecoration: 'none'}} to={props.link || '/'}>
		<PrivateLinkedAsideElement separate={props.separate || false} width={props.width || false} maxHeight={props.maxHeight || false}>
			{props.children}
		</PrivateLinkedAsideElement>
	</Link>
);

export {LinkedAsideElement, TitleAsideElement, SinopseAsideElement, DataAsideElement};