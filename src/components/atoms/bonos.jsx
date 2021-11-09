import React from 'react';
import styled from 'styled-components';

const Bono = ({ number, img, T = '0px', title1, title2, text}) =>{
    return(
        <C>
            <Number>BONO #{number}</Number>
            <ImgC>
                <Img T={T} src={img} alt="hamburguesa" />
            </ImgC>
            <P>{title1}</P>
            <P2>{title2}</P2>
            <Text>{text}</Text>
        </C>
    );
}
const C = styled.div`
    margin: 50px auto 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Number = styled.div`
    color: #f1911c;
    max-width: 300px;
    font-size: 3rem;
    font-weight: 700;
    padding: 20px 40px;
    background-color: black;
    text-shadow: 1px 1px 5px black, 2px 2px 3px #f1911c;
`;
const ImgC = styled.div`
`;
const Img = styled.img`
    width: 100%;
    transform: translateY(${props=>props.T});
`;
const P = styled.p`
    color: grey;
    font-size: 1rem;
    font-weight: 700;
`;
const P2 = styled.p`
    color: black;
    font-size: 1.15rem;
    font-weight: 700;
    background-color: #f1911c;
    padding: 3px 8px;
    border-radius: 5px;
`;
const Text = styled.p`
    color: darkslategray;
    font-size: 1.2rem;
    max-width: 320px;
    text-align: center;
    margin-top: 20px;
`;
export default Bono;