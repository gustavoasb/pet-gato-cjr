import styled from 'styled-components';

const ImgEntrada = styled.img`
	width: ${props => props.width? props.width : '50%'};
	height: ${props => props.height? props.height : '100%'};
	position: absolute;
	left: 0;
	z-index: 0;
`;

export default ImgEntrada;