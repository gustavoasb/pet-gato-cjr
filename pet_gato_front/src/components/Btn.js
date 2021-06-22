import styled from 'styled-components';

const Btn = styled.button`
	height: ${props => props.height ? props.height : '20%'};
	width: ${props => props.width ? props.width : '50%'};
	margin: ${props => props.margin ? props.margin : '0'};
	border-radius: 5px;
	font-size: ${props => props.fontSize ? props.fontSize : '1vw'};
	font-family: "Montserrat", sans-serif;
	border: ${props => props.border ? props.border : '1px solid #BA66A3'};
	background-color: ${props => props.backgroundColor ? props.backgroundColor : '#BA66A3'};
	color: ${props => props.color ? props.color : '#FFFFFF'};
	transition: 0.25s;
	&:hover {
		border: ${props => props.hoverBorder ? props.hoverBorder : '1px solid #BA66A3'};
		color: ${props => props.hoverColor ? props.hoverColor : '#BA66A3'};
		background-color: ${props => props.hoverBackgroundColor ? props.hoverBackgroundColor : '#FFFFFF'};
	}
`;

export default Btn;