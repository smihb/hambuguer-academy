import React from 'react';
import styled from 'styled-components';

const Number = ({ title, text, step, color= '#f1911c' }) =>{
    return(
        <C>
            <Text>
                <Span>{title}</Span>
                {text}
                <Circle color={color}>
                    <NumberC>{step}</NumberC>
                </Circle>
            </Text>
        </C>
    );
}
const C = styled.div`
    max-width: 300px;
    margin: 0 auto;
    position: relative;
    z-index: 10;
    @media(min-width: 800px){
        margin: 50px auto;
    }
`;
const Circle = styled.div`
    width: 150px;
    height: 150px;
    border: 3px solid ${props=>props.color};
    margin: 0 auto;
    position: absolute;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 0px ${props=>props.color},
    0 0 0px ${props=>props.color};
    z-index: 1;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);

    &:after{
        content: '';
        position: absolute;
        width: 90%;
        height: 90%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin: 0 auto;
        border: 3px dashed ${props=>props.color};
        border-radius: 50%;
        box-shadow: 0 0 0px ${props=>props.color} inset,
        0 0 0px ${props=>props.color} inset;
        background-color: black;
        z-index: -1;
    }
`;
const NumberC = styled.div`
    font-size: 6rem;
    position: relative;
    text-shadow: 0 0 0px ${props=>props.color},
    0 0 0px ${props=>props.color};


    font-size: 7rem;
    font-weight: 700;
    color: #f1911c;
    text-shadow: 1px 1px 1px black, 3px 3px 0 #f1911c, 4px 4px 0 black;
    transform: translateY(-5px);

`;
const Text = styled.div`
    color: black; 
    background-color: white;
    padding: 20px 10px 80px;
    border-radius: 20px;
    border: 10px solid #f1911c;
    transform: translateY(0px);
    position: relative;
    z-index: -1;
    font-size: 1.3rem;
    text-align: center;
    margin: 50px 0;

    @media(min-width: 800px){
        height: 100%;
        margin: 0;
    }

`;
const Span = styled.span`
    color: black; 
    display: block;
    font-size: 1.8rem;
    font-weight: 900;
    text-shadow: 1px 1px 1px white, 2px 2px 0 black;
    margin-bottom: 20px;
    line-height: 30px;

    @media(min-width: 800px){
    
    }

`;
export default Number;