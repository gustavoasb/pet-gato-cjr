import React from 'react';
import styled from 'styled-components';
import NavBar from './../components/NavBar';
import Footer from './../components/footer';
import InputSearch from './../components/InputSearch';
import TitledAsideDiv from './../components/TitledAsideDiv';
import {LinkedAsideElement, TitleAsideElement, SinopseAsideElement, DataAsideElement} from './../components/LinkedAsideElement';
import Btn from './../components/Btn';
import Tag from './../components/Tag';
import { IoIosArrowBack, IoIosHeartEmpty } from 'react-icons/io';
import { Link } from '@reach/router';
import { FaRegEye } from 'react-icons/fa';
import MainImg from './../img/cachorro_exemplo.jpg';
import Comentario from './../components/Comentario';
import { Comentado, ComentadoNome, ComentadoData, ComentadoContent } from './../components/Comentado';

const Aside = styled.aside`
	display: inline-block;
	width: 22vw;
	position: relative;
	padding-top: 1vw;
	margin-left: 2vw;
	padding-left: 2vw;

	&::before {
		display: block;
		content: "";
		width: 1px;
		height: 95%;
		position: absolute;
		left: 0;
		top: 3%;
		background-color: #707070;
	}
`;

const Main = styled.main`
	display: inline-block;
	width: 72vw;
	padding-top: 0.5vw;
	padding-left: 4vw;
`;

const Voltar = styled.div`
	display: flex;
	font-size: 1.3vw;
	color: #707070;
	line-height: 2vw;
	align-items: center;
	margin-left: -0.5vw;
`;

const Titulo = styled.h1`
	font-size: 2vw;
	color: #BA66A3;
	line-height: 2.1vw;
	max-height: 4.2vw;
	overflow: hidden;
	margin-top: 1vw;
`;

const MainDiv = styled.div`
	display: flex;
	width: 100%;
	min-height: 38vw;
	margin-bottom: 3vw;
	align-items: flex-start;
`;

const DataViewFlex = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	font-size: 1.2vw;
	color: #707070;
`;

const Data = styled.div`
	font-size: 1vw;
	color: #707070;
`;

const PostIconView = (props) => (
		<span><FaRegEye /> {props.num}</span>
);

const PostImg = styled.img`
	width: 68vw;
	height: 22.67vw;
	overflow: hidden;
	margin-top: 2vw;
`;

const PostContent = styled.p`
	width: 100%;
	font-size: 1.2vw;
	position: relative;
	white-space: pre-line;
	margin-top: 3vw;
	padding-bottom: 2vw;
	margin-bottom: 2vw;
	&::after{
		display: block;
		content: "";
		height: 1px;
		width: 70%;
		position: absolute;
		bottom: 0;
		left: 15%;
		background-color: #707070;
	}
`;

const Curtidas = styled.div`
	font-size: 1vw;
	color: #707070;
`;

const DivCurtidas = (props) => (
	<Curtidas><IoIosHeartEmpty style={{color: '#BA66A3', fontSize: '1.5vw'}} /> {props.userLiked ? 'Você e outras' : ''} {props.num} pessoas curtiram essa publicação </Curtidas>
);

const textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor tincidunt dolor, nec venenatis neque pharetra sed. Etiam luctus ultricies maximus. Nulla et elit in nibh ultricies facilisis. Curabitur scelerisque lacinia dictum. Phasellus ut elit ac magna porta feugiat in et lacus. Ut in pulvinar sapien. Nam sit amet odio scelerisque, ultricies ipsum gravida, mattis nisi. Mauris quis dolor eu arcu dignissim commodo vel at tortor.

Vestibulum et erat eu ipsum laoreet faucibus. Vivamus ullamcorper nisi sit amet dapibus sollicitudin. Vestibulum quis mi tristique, mattis enim a, pharetra purus. Vestibulum condimentum consequat leo. Etiam commodo tempus neque at pulvinar. Aliquam egestas, enim a gravida mattis, nisl nunc consectetur dui, vitae ultricies dui nisl eu justo. Curabitur et euismod elit. Integer sollicitudin est ac volutpat sodales. Suspendisse potenti. Maecenas scelerisque at dui eget facilisis. Pellentesque dapibus dui non felis convallis cursus. Donec pellentesque, lectus vitae pellentesque scelerisque, nibh urna dignissim libero, vel dictum sem turpis id orci. Nunc at eleifend tortor, sed eleifend urna.

Duis a tellus a lectus pretium cursus. Vivamus elit leo, maximus vitae euismod vitae, sagittis ac turpis. Nullam euismod leo et lacus pulvinar malesuada. Vivamus lobortis interdum posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In sagittis libero metus, non vulputate lorem sagittis non. Nulla id urna libero. Mauris ac orci dictum, rhoncus orci id, fringilla massa. Phasellus ullamcorper odio non justo aliquet viverra. Vestibulum rhoncus non nisl eu lobortis. In lacinia a leo sed mollis.

Aenean sagittis suscipit bibendum. Phasellus egestas ante ut tempus pulvinar. Nam maximus, ligula nec consequat vehicula, nisl erat accumsan massa, a scelerisque mi nulla ullamcorper magna. Pellentesque scelerisque ultrices eros ac tempus. Pellentesque elit purus, elementum sit amet lorem non, tincidunt ultricies enim. Etiam et nisi sit amet erat euismod congue. Mauris non tortor mauris. Phasellus ornare ante arcu, congue pulvinar tortor tempus sit amet. Aenean eu orci a augue tincidunt ullamcorper in eu mi. Nulla blandit laoreet risus. Nulla vel nisl sodales, scelerisque lacus et, suscipit nibh. Nullam vestibulum sapien sapien, ut efficitur eros imperdiet in. Phasellus condimentum augue quis purus volutpat, id convallis nibh fringilla. Nam vel dignissim tellus.

Ut vehicula massa non erat tristique tincidunt. Duis metus augue, molestie vitae accumsan sit amet, semper ac mauris. In congue tempus mauris at scelerisque. Suspendisse potenti. Nulla sit amet gravida metus. In nec nibh in ipsum semper cursus nec id tortor. Vestibulum aliquet hendrerit ante, quis semper arcu vehicula vel. Nam dapibus velit ut massa lobortis fermentum. `;

class Post extends React.Component {

	render() {

		return (
			<>
				<NavBar />
				
				<MainDiv>
					<Main>
						<Link style={{textDecoration: 'none'}} to='/'><Voltar><IoIosArrowBack style={{fontSize: '2vw', color: '#BA66A3', height:'2vw', lineHeight: '2vw'}} /> &nbsp;VOLTAR</Voltar></Link>
						<Titulo>Titulo para o Texto Correspondente ao Post de ID numero {this.props.id} e Só Pode Ter No Máximo Duas Linhas</Titulo>
						<DataViewFlex><Data>Publicados em 08 de Dezembro de 2019</Data><PostIconView num='0' /></DataViewFlex>
						<PostImg src={MainImg} />
						<PostContent>{textContent}</PostContent>
						<DivCurtidas num='0' />
						<Comentario width='100%' margin='2vw 0 0' />
						<Comentado margin='2vw 0 0 0' width='100%'>
							<ComentadoNome>Meu Nome</ComentadoNome>
							<ComentadoData>09 de dezembro de 2019></ComentadoData>
							<ComentadoContent>alusdglfkajdshflansljdjfnalkjjsdnflkjansdlkjfbashdbflajbsdlkjfbaljksdflkajnsdlkjfnaljkdsnfljanasdlf</ComentadoContent>
						</Comentado>
					</Main>

					<Aside>
						<InputSearch/>
						<TitledAsideDiv>

							<LinkedAsideElement separate={true}>
								<TitleAsideElement><Tag /></TitleAsideElement>
								<SinopseAsideElement>aludshflaijsdhflkjgdlkajljdsbfhabsdlhfbalhsdblkabsdlkfblasdbfasçldjfnalskjdbfalksjdfalkjsdfhlakjsdflajbsndlkfjabsdlkjadbf</SinopseAsideElement>
							</LinkedAsideElement>

							<LinkedAsideElement separate={true}>
								<TitleAsideElement><Tag tag='Exemplo 2' /></TitleAsideElement>
								<SinopseAsideElement>aludshflaijsdhflkjgdlkajljdsbfhabsdlhfbalhsdblkabsdlkfblasdbfasçldjfnalskjdbfalksjdfalkjsdfhlakjsdflajbsndlkfjabsdlkjadbf</SinopseAsideElement>
							</LinkedAsideElement>

							<LinkedAsideElement separate={false}>
								<TitleAsideElement><Tag tag='Exemplo 3' /></TitleAsideElement>
								<SinopseAsideElement>aludshflaijsdhflkjgdlkajljdsbfhabsdlhfbalhsdblkabsdlkfblasdbfasçldjfnalskjdbfalksjdfalkjsdfhlakjsdflajbsndlkfjabsdlkjadbf</SinopseAsideElement>
							</LinkedAsideElement>
						</TitledAsideDiv>

						<TitledAsideDiv>

							<LinkedAsideElement separate={true}>
								<TitleAsideElement>Example Linked Aside Element, A Little Longer for Test Purposes</TitleAsideElement>
								<SinopseAsideElement>aludshflaijsdhflkjgdlkajljdsbfhabsdlhfbalhsdblkabsdlkfblasdbfasçldjfnalskjdbfalksjdfalkjsdfhlakjsdflajbsndlkfjabsdlkjadbf</SinopseAsideElement>
								<DataAsideElement>Publicado em 07 de dezembro de 2019</DataAsideElement>
							</LinkedAsideElement>

							<LinkedAsideElement separate={true}>
								<TitleAsideElement>Example Linked Aside Element, A Little Longer for Test Purposes</TitleAsideElement>
								<SinopseAsideElement>aludshflaijsdhflkjgdlkajljdsbfhabsdlhfbalhsdblkabsdlkfblasdbfasçldjfnalskjdbfalksjdfalkjsdfhlakjsdflajbsndlkfjabsdlkjadbf</SinopseAsideElement>
								<DataAsideElement>Publicado em 07 de dezembro de 2019</DataAsideElement>
							</LinkedAsideElement>

							<LinkedAsideElement separate={false}>
								<TitleAsideElement>Example Linked Aside Element, A Little Longer for Test Purposes</TitleAsideElement>
								<SinopseAsideElement>aludshflaijsdhflkjgdlkajljdsbfhabsdlhfbalhsdblkabsdlkfblasdbfasçldjfnalskjdbfalksjdfalkjsdfhlakjsdflajbsndlkfjabsdlkjadbf</SinopseAsideElement>
								<DataAsideElement>Publicado em 07 de dezembro de 2019</DataAsideElement>
							</LinkedAsideElement>

							<Btn height='3.5vw' width='50%' margin='1vw 25% 0' backgroundColor='#FFFFFF' color='black' hoverColor='#FFFFFF' hoverBackgroundColor='#BA66A3'>VER TODAS</Btn>
						</TitledAsideDiv>
					</Aside>
				</MainDiv>

				<Footer />
			</>
		);
	}
}

export default Post;