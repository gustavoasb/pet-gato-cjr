import React from 'react';
import styled from 'styled-components';
import Btn from './Btn';
import { IoIosHeartEmpty } from 'react-icons/io';
import { GoComment } from 'react-icons/go';
import { FaRegEye } from 'react-icons/fa';
import Tag from './Tag';

const PostCardGrid = styled.div`
	display: grid;
	width: ${props => props.width ? props.width : '55vw'};
	height: ${props => props.height ? props.height : '17vw'};
	grid-template-rows: 1fr;
	grid-template-columns: ${props => props.height ? props.height : '17vw'} 1fr;
	grid-column-gap: 2%;
	overflow: hidden;
	margin: ${props => props.margin ? props.margin : '0'};
`;

const PostCardImg = styled.img`
	width: 100%;
	height: 100%;
`;

const PostCardGridDiv = styled.div`
	width: 100%;
	height: 100%;
	padding: 0.2vw 0;
`;

const PostCardGridFlex = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const PostCardTags = styled.div`
	width: 100%;
	max-height: 10%;
	font-size: 1.2vw;
`;

const PostCardTitle = styled.h1`
	width: 90%;
	max-height: 24%;
	font-size: 1.5vw;
	color: #BA66A3;
	overflow: hidden;
	margin: 0;
`;

const PostCardSinopse = styled.p`
	width: 100%;
	max-height: 40%;
	font-size 1vw;
	color: black;
	overflow: hidden;
	word-break: break-word;
	margin: 0;
`;

const PostCardOptions = styled.div`
	width: 100%;
	height: 15%;
`;

const PostCardIconSpan = styled.span`
	font-size: 1.5vw;
	color: black;
	margin-left: 5%;
	line-height: 100%;
	color: #707070;
	cursor: pointer;
`;

const PostCardIconLike = (props) => (
	<PostCardIconSpan>
		<IoIosHeartEmpty /> {props.num}
	</PostCardIconSpan>
);

const PostCardIconComment = (props) => (
	<PostCardIconSpan>
		<GoComment /> {props.num}
	</PostCardIconSpan>
);

const PostCardIconView = (props) => (
	<PostCardIconSpan>
		<FaRegEye /> {props.num}
	</PostCardIconSpan>
);

const RenderTags = (props) => {

	const tags = props.tags.map(element => <Tag tag={element} margin='0 0 0 2%'/>)

	return tags;
}

const PostCard = (props) => {

	return (
		<PostCardGrid width={props.width || false} height={props.height || false} margin={props.margin || false}>
			<PostCardImg src={props.src} />

			<PostCardGridDiv>
				<PostCardGridFlex>
					<PostCardTags>Tags:<RenderTags tags={props.tags} /></PostCardTags>
					{props.children}

					<PostCardOptions>
						<Btn height='100%' width='18%' backgroundColor='#FFFFFF' color='black' hoverColor='#FFFFFF' hoverBackgroundColor='#BA66A3'>LEIA MAIS</Btn>
						<PostCardIconLike num={props.numLikes || '0'} />
						<PostCardIconComment num ={props.numComments || '0'} />
						<PostCardIconView num={props.numViews || '0'} />
					</PostCardOptions>
				</PostCardGridFlex>
			</PostCardGridDiv>
		</PostCardGrid>
	)
};

export { PostCard, PostCardTitle, PostCardSinopse };