import styled from "styled-components";
import React from "react";

export const Wrapper = styled.div`
margin: 100px;

padding: 16px 0;

`

export const Header = styled.header`
    width: 100%;
    
    height: 60px;
    background: red;
    font-size: 30px;
    display:flex;
    justify-content: center;
    align-items: center;
    

`

export const PetGatoText = styled.h1`
   color: ${props=> `${props.color}`} ;
   font-size: ${props=> `${props.fontsize}px`};
   
   margin: 10px;
   
    
    
    `

export const PetGatoRef = styled.a`
color: ${props=> `${props.color}`} 
    
`

export const PetGatoColumn = styled.div`
display:grid;
grid-template-columns: ${props=> `${props.elementos}`};
grid-gap: 1rem;
justify-content: ${props=> `${props.position}`} 


`
export const PetGatoTd = styled.td`
   color: ${props=> `${props.color}`} 
    
    
    `
export const PetGatoGrid = styled.div`
display:grid;
grid-template-areas: 
"box box box"
"box box box"
"box box box";
flex-wrap: center;
`

