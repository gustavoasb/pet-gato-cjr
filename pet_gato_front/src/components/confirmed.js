import styled from 'styled-components'
import React from 'react'

const ConfirmedDiv = styled.div`
    content: "\f007";
    color: lightgreen;
    font-family: 'Font Awesome\ 5 Free';
    font-size: 1rem;
    text-align: center;
`;

const ConfirmedText = styled.span`
    color: #707070;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
`;

const Confirmed = (props) => (
    <>  
        <ConfirmedDiv><i className="fas fa-check-circle"></i><ConfirmedText> {props.value}</ConfirmedText></ConfirmedDiv>
    </>
);

export default Confirmed