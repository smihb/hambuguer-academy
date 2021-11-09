import React from 'react';
import styled from 'styled-components';

const Promocion = () =>{
    return(
        <Container>
            <Promo>PROMOCIÓN</Promo>
            <C>
                <P>DESDE <R>$99</R></P>
                <P>por solo <G>$29.90</G></P>
                <Disc>77% de DESCUENTO</Disc>
            </C>
        </Container>
    );
}
const Container = styled.div`
    margin: 0px auto;
    padding: 0 10px;
    max-width: 400px;
`;
const Promo = styled.h2`
    color: black;
    font-size: 2.2rem;
    margin: 0 auto;
    width: 250px;
    padding: 10px;
    text-align: center;
    border-radius: 10px;
    background-color: #f1911c;
    transform: translateY(50%);
`;
const C = styled.div`
    border: 5px solid #f1911c;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 0 20px
`;
const P = styled.p`
    color: black;
    font-size: 1.8rem;
`;
const R = styled.b`
    color: red;
    font-size: 3rem;
    position: relative;

    &:before,
    &:after{
        content: '';
        position: absolute;
        width: 110%;
        height: 4px;
        top:40%;
        left: -5%;
        background-color: black;
    }
    &:after{
        top: 60%;
    }
`;
const G = styled.b`
    color: lime;
    font-size: 3rem;
    text-shadow: 1px 1px 0 green,
                 2px 2px 0 green,
                 3px 3px 0 green,
                 4px 4px 0 green,
                 5px 5px 5px white,
                 6px 6px 5px black;
`;
const Disc = styled.div`
    margin: 15px auto 0;
    padding: 10px;
    max-width: 300px;
    background-color: red;
    font-size: 1.6rem;
    font-weight: 700;
    border-radius: 10px;
`;

export default Promocion;