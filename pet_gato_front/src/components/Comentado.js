import React from 'react';
import styled from 'styled-components';
import Comentario from './Comentario';

const ComentadoGrid = styled.div`
	display: grid;
	width: 100%;
	grid-template-columns: 6vw 1fr;
	grid-column-gap: 3%;
	margin: ${props => props.margin ? props.margin : '0'};
`;

const ComentadoImg = styled.img`
	width: 6vw;
	height: 6vw;
	border-radius: 6vw;
`;

const ComentadoInfo = styled.div`
	width: 100%;
`;

const ComentadoNome = styled.div`
	font-size: 1.2vw;
	font-weight: bold;
`;

const ComentadoData = styled.div`
	font-size: 0.9vw;
	color: #707070;
`;

const ComentadoContent = styled.div`
	width: 100%;
	font-size: 1.2vw;
`;

const ComentadoCompleto = styled.div`
	width: ${props => props.width ? props.width : '50vw'};
	margin: ${props => props.margin ? props.margin : '0'};
`;

const ComentadoButton = styled.button`
	border: 1px solid #BA66A3;
	font-size: 0.95vw;
	height: 2.5vw;
	width: 8vw;
	margin-top: 2vw;
	background-color: #FFFFFF;
	border-radius: 5px;
	transition: 0.7s;
	margin-left: 9vw;

	&:hover{
		background-color: #BA66A3;
		color: #FFFFFF;
	}
`;

class Comentado extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;

		this.state = {
			respondendo: false
		};

		this.comentar = this.comentar.bind(this);
		this.showComentarios = this.showComentarios.bind(this);
	}

	render() {
		return (
			<ComentadoCompleto margin={this.props.margin || false} width={this.props.width || false}>
				<ComentadoGrid>
					<ComentadoImg />

					<ComentadoInfo>
						{this.props.children}
					</ComentadoInfo>

				</ComentadoGrid>

				{this.state.respondendo ? 
					<Comentario onClick={this.showComentarios} margin='1.5vw 0 0 0' width='100%' /> 

					:
					<>
						<ComentadoGrid margin='1vw 0 0 9vw'>
							<ComentadoImg />

							<ComentadoInfo>
								<ComentadoNome>Resposta ao comentario</ComentadoNome>
								<ComentadoData>Data da resposta</ComentadoData>
								<ComentadoContent>iausgdkfrasgkdufgakjsdgafkshgdkfuygaskduf</ComentadoContent>
							</ComentadoInfo>

						</ComentadoGrid>

						<ComentadoButton onClick={this.comentar}>RESPONDER</ComentadoButton>
					</>
				}

			</ComentadoCompleto>
		);
	}

	comentar(event) {
		this.setState({respondendo: true});
	}

	showComentarios(event) {
		this.setState({respondendo: false});
	}
}

export { Comentado, ComentadoNome, ComentadoData, ComentadoContent };