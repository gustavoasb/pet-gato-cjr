import styled from 'styled-components';

const BottomMessage = styled.span`
	font-size: ${props => props.fontSize ? props.fontSize : '1.3vw'};
	color: ${props => props.color ? props.color : '#707070'};
	margin: ${props => props.margin ? props.margin : '7% 0 0 0'};
	font-family: "Montserrat", sans-serif;
`;

export default BottomMessage;