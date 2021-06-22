import React from 'react';
import styled from 'styled-components';
import {FaSearch} from 'react-icons/fa';

const Div = styled.div`
	display: grid;
	width: ${props => props.width ? props.width : '20vw'};
	height: ${props => props.height ? props.height : '3vw'};
	border: 1px solid #BA66A3;
	border-radius: 5px;
	grid-template-rows: 1fr;
	grid-template-columns: 1fr 3vw;
	align-items: center;
	justify-items: center;
`;

const Input = styled.input`
	height: 50%;
	width: 100%;
	border: none;
	font-size: 1.2vw;
	line-height: 110%;
	text-indent: 10px;
	color: black;
`;

const SearchIcon = styled.span`
	display: flex;
	color: #BA66A3;
	height: 100%;
	font-size: 1.5vw;
	cursor: pointer;
	align-items: center;
`;

const InputSearch = (props) => (
	<Div width={props.width || false} height={props.height || false}><Input type='search' name='search' /><SearchIcon><FaSearch/></SearchIcon></Div>
);

export default InputSearch;