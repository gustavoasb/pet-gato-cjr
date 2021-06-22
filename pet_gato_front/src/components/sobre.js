import React, {Component} from 'react'
import {ContentWrapper, FormPage, FormTitle, FormText} from './form'
import floquinho from '../img/Floquinho.jpg'
import mandragora from '../img/Mandrágora.jpg'
import cintia from '../img/Cíntia Lorenzzo.jpg'
import styled from 'styled-components'
import ig from '../img/Icon awesome-instagram.svg'
import fb from '../img/Icon awesome-facebook-square.svg'
import tt from '../img/Icon awesome-twitter-square.svg'

const Text = styled.div`
    color: #707070;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
`;

const Images = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    width: 100%;
    margin-right: 2rem;
`;

const ImagesSubdivision = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: nowrap;
    width: 100%;
`;

const Img = styled.div`
    width: 100%;
    overflow: hidden;
    height: 10rem;
`;

const ResponsiveImg = styled.img`
    width: 100%;
    height: 100%;
    object-position: center;
    object-fit: cover;
`
const Icons = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
`;

const Icon = styled.img`
    &:hover{
        cursor: pointer;
    }
    margin-top: 1rem;
    margin-right: 1.5rem;
`

class Content extends Component{
    render(){
        return(
            <>  
            <ContentWrapper>
                <Images>
                    <Img style={{marginBottom: "1rem", height: "12rem"}}><ResponsiveImg src={cintia} alt="Cíntia e Floquinho"/></Img>
                    <ImagesSubdivision>
                        <Img style={{marginRight: "0.5rem"}}>
                            <ResponsiveImg src={mandragora} alt="Mandrágora"/>
                        </Img>
                        <Img style={{marginLeft: "0.5rem"}}>
                            <ResponsiveImg src={floquinho} alt="Floquinho"/>
                        </Img>
                    </ImagesSubdivision>
                </Images>
                <FormText>
                    <FormPage>SOBRE NÓS</FormPage>
                    <FormTitle>O que é o Pet Gatô?</FormTitle>
                    <Text style={{marginTop: '1.5rem'}}><p>O Pet Gatô surgiu em 2013, como um trabalho da faculdade. Estava cursando
                    Medicina Veterinária e resolvi pegar uma disciplina de jornalismo, em que tive que 
                    escrever para um blog fictício. Dei o nome de <span style={{fontWeight: "600"}}>Pet Gatô</span>, como um trocadilho infame que 
                    minha professora adorou. Foi quando descobri minha paixão por escrever e resolvi 
                    unir o útil ao agradável e criar este blog.</p>
                    <p>Desde então, utilizei deste meio para informar pais de pets do Brasil inteiro, 
                    estendendo os cuidados da minha profissão através da Internet. Além disso, compartilho 
                    histórias engraçadas, descobertas do meu cotidiano e fotos dos meus dois amores, o 
                    Floquinho, meu cão samoieda e a Mandrágora, minha cacatua.</p>
                    <p>Meu nome é Cíntia Lorenzzo e sou veterinária há 5 anos, apaixonada pelo 
                    mundo animal, principalmente os que estão sempre presentes no nosso dia a dia. Além de 
                    escrever, gosto de correr no Parque do Ibirapuera com o Floquinho e cantar com a Mands, 
                    uma berradora nata.</p> 
                    <p>Quer conhecer mais sobre mim? Me siga nas minhas redes sociais:</p></Text>
                    <Icons>
                        <Icon src={fb} alt="Facebook"/>
                        <Icon src={ig} alt="Instagram"/>
                        <Icon src={tt} alt="Twitter"/>
                    </Icons>
                </FormText>
            </ContentWrapper>
            </>
        )
    }
};

export default Content