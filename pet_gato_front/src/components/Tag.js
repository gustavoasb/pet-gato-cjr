import React from 'react';
import styled from 'styled-components';

const PrivateTag = styled.span`
	display: inline-block;
	line-height: ${props => props.lineHeight ? props.lineHeight : '1.8vw'};
	font-size: ${props => props.fontSize ? props.fontSize : '1vw'};
	padding: 0 0.5vw;
	background-color: #FBE9F6;
	color: #BA66A3;
	margin: ${props => props.margin ? props.margin : '0'};
`;

const Tag = (props) => (
	<PrivateTag lineHeight={props.lineHeight || false} fontSize={props.fontSize || false} margin={props.margin || false}>{props.tag || 'Exemplo'}</PrivateTag>
);

export default Tag;