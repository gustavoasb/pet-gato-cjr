import styled from 'styled-components'

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 3% 4vw 3% 4vw;
  overflow: auto;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 70%;
`;

export const FormText = styled.div`
    margin-bottom: 1.5rem;
`;

export const FormInput = styled.input`
    border: 1px solid #C882B4;
    width: 100%;
    height: 3rem;
    color: #707070;
    font-family: 'Montserrat', sans-serif;
    padding-left: 0.5rem;
`;

export const FormInputBigger = styled.textarea`
    &::placeholder{
        color: lightgray;
    }
    padding: 0.5rem;
    font-family: 'Montserrat', sans-serif;
    align-self: start;
    border: 1px solid #C882B4;
    width: 100%; 
    height: 12rem;
    color: #707070;
    font-size: 1.2rem;
`;

export const FormInputSubmit = styled.input`
    &:hover{
        background-color: #FBE9F6;
        transition-duration: 0.25s;
    }
    border: 1px solid #C882B4;
    background-color: #FFFFFF;
    width: 10%;
    height: 3rem;
    width: 8rem;
    font-size: 1.2rem;
    font-family: 'Montserrat', sans-serif;
    border-radius: 0.2rem;
    margin-right: 1.5rem;
    outline: none;
`;

export const FormTitle = styled.div`
    color: #C882B4;
    font-family: 'Montserrat', sans-serif;
    font-size: 2rem;
    font-weight: 700;
    margin-top: -0.5rem;
`;

export const FormPage = styled.div`
    font-family: 'Montserrat', sans-serif;
    color: #707070;
    font-size: 1.5rem;
    font-weight: 300;
`;

export const FormSubdivision = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 1.5rem;
`;

export const FormLabelTitle = styled.div`
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    font-weight: 600;
    color: #BA66A3;
`;

export const FormLabel = styled.div`
    width: 100%;
    padding-right: 1.5rem;
`;

export const Img = styled.img`
    vertical-align: middle;
    margin-right: 2rem;
`;
