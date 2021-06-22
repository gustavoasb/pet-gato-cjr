import React from 'react';
import styled from 'styled-components';
import NavBar from './../components/NavBar';
import Header from './../components/header';
import Footer from './../components/footer';
import InputSearch from './../components/InputSearch';
import SobreAutora from './../components/SobreAutora';
import TitledAsideDiv from './../components/TitledAsideDiv';
import {LinkedAsideElement, TitleAsideElement, SinopseAsideElement, DataAsideElement} from './../components/LinkedAsideElement';
import { PostCard, PostCardTitle, PostCardSinopse } from './../components/PostCard';
import Btn from './../components/Btn';
import ExemploGato from './../img/gato_exemplo.jpg';

const Aside = styled.aside`
	display: inline-block;
	width: 22vw;
	margin-left: 3vw;
	position: relative;
	padding-top: 0.5vw;
	border-right: 1px solid #707070;
`;

const AsideSeparator = styled.div`
	height: 1px;
	width: 16vw;
	margin-left: 2vw;
	background-color: #707070;
`;

const Main = styled.main`
	display: inline-block;
	width: 72vw;
	padding-top: 0.5vw;
`;

const Miau = styled.h1`
	font-size: 2vw;
	margin-left: 3vw;
	color: #BA66A3;
`;

const BoasVindas = styled.div`
	font-size: 1.5vw;
	margin-left: 3vw;
	color: #707070;
`;

const MainDiv = styled.div`
	display: flex;
	width: 100%;
	min-height: 38vw;
	margin-bottom: 3vw;
	align-items: flex-start;
`;

class Home extends React.Component {

	render() {

		return (
			<>
				<Header num='1'/>
				
				<MainDiv>
					<Aside>
						<InputSearch />
						<SobreAutora width='19.5vw' height='31.2vw' margin='1.5vw 0 1.8vw 0' />
						<AsideSeparator />

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

					<Main>
						<Miau>Miau!</Miau>
						<BoasVindas>Seja bem-vinda(o) ao blog PetGatô! Confira nosso conteúdo mais recente:</BoasVindas>
						<PostCard tags={['Exemplo 1', 'Exemplo 2']} margin='2vw 0 0 5vw' width='65vw' src={ExemploGato}>
							<PostCardTitle>Um Título para Uma Publlicação que Irá Aparecer Logo na Primeira Página, Também Conhecida Como Home</PostCardTitle>
							<PostCardSinopse>asdfghjkjhgfdsdfghjklkjhfsdfghjklkjhgoisjhdofgjpodijfgoipahdfghapsçigfjskdmfgpoisjdijslkmboipsinmfigohjsdjghiopsjdpoijsiopdjfpoihgjspoidfjgpoisdjfoigpjnspoiidfjgopsijdfpoigjçksjdçklhnsuoindghosndopigjpsiodfjgoijpoidfjugophpoidfhgoandfuihgpouahddfpoighapoidhgoi</PostCardSinopse>
						</PostCard>

						<PostCard tags={['Exemplo 1', 'Exemplo 2']} margin='2vw 0 0 5vw' width='65vw' src={ExemploGato}>
							<PostCardTitle>Um Título para Uma Publlicação que Irá Aparecer Logo na Primeira Página, Também Conhecida Como Home</PostCardTitle>
							<PostCardSinopse>asdfghjkjhgfdsdfghjklkjhfsdfghjklkjhgoisjhdofgjpodijfgoipahdfghapsçigfjskdmfgpoisjdijslkmboipsinmfigohjsdjghiopsjdpoijsiopdjfpoihgjspoidfjgpoisdjfoigpjnspoiidfjgopsijdfpoigjçksjdçklhnsuoindghosndopigjpsiodfjgoijpoidfjugophpoidfhgoandfuihgpouahddfpoighapoidhgoi</PostCardSinopse>
						</PostCard>

						<PostCard tags={['Exemplo 1', 'Exemplo 2']} margin='2vw 0 0 5vw' width='65vw' src={ExemploGato}>
							<PostCardTitle>Um Título para Uma Publlicação que Irá Aparecer Logo na Primeira Página, Também Conhecida Como Home</PostCardTitle>
							<PostCardSinopse>asdfghjkjhgfdsdfghjklkjhfsdfghjklkjhgoisjhdofgjpodijfgoipahdfghapsçigfjskdmfgpoisjdijslkmboipsinmfigohjsdjghiopsjdpoijsiopdjfpoihgjspoidfjgpoisdjfoigpjnspoiidfjgopsijdfpoigjçksjdçklhnsuoindghosndopigjpsiodfjgoijpoidfjugophpoidfhgoandfuihgpouahddfpoighapoidhgoi</PostCardSinopse>
						</PostCard>

						<PostCard tags={['Exemplo 1', 'Exemplo 2']} margin='2vw 0 0 5vw' width='65vw' src={ExemploGato}>
							<PostCardTitle>Um Título para Uma Publlicação que Irá Aparecer Logo na Primeira Página, Também Conhecida Como Home</PostCardTitle>
							<PostCardSinopse>asdfghjkjhgfdsdfghjklkjhfsdfghjklkjhgoisjhdofgjpodijfgoipahdfghapsçigfjskdmfgpoisjdijslkmboipsinmfigohjsdjghiopsjdpoijsiopdjfpoihgjspoidfjgpoisdjfoigpjnspoiidfjgopsijdfpoigjçksjdçklhnsuoindghosndopigjpsiodfjgoijpoidfjugophpoidfhgoandfuihgpouahddfpoighapoidhgoi</PostCardSinopse>
						</PostCard>
					</Main>
				</MainDiv>

				<Footer/>
			</>
		);
	}
}

export default Home;