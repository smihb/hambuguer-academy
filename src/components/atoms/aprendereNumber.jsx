import React from 'react';
import styled from 'styled-components';

const AprendereNumber = ({title, title2, color= '#f1911c', step}) =>{
    return(
        <C>
            <Circle color={color}>
                    <Number>{step}</Number>
            </Circle>
            <Title color={color}>
                <div>{title}</div>
                <div>{title2}</div>
            </Title>
        </C>
    );
}
const C = styled.div`
    margin: 20px auto;
    position: relative;
    z-index: 10;
`;
const Circle = styled.div`
    width: 150px;
    height: 150px;
    border: 3px solid ${props=>props.color};
    margin: 0 auto;
    position: relative;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 0px ${props=>props.color},
    0 0 0px ${props=>props.color};
    z-index: 1;
    top: 0;

    

    &:after{
        content: '';
        position: absolute;
        bottom: 0;
        width: 3px;
        height: 30px;
        transform: translateY(100%);
        background-color: ${props=>props.color};
        
    }
`;
const Number = styled.div`
    font-size: 6rem;
    position: relative;
    text-shadow: 0 0 0px ${props=>props.color},
    0 0 0px ${props=>props.color};


    font-size: 7rem;
    font-weight: 700;
    color: white;
    text-shadow: 1px 1px 1px black, 3px 2px 0 white, 4px 4px 0 black;

`;
const Title = styled.div`
    border: 1px solid blue;
    position: relative;
    top: 0px;
    height: 110px;
    margin-top: 25px;
    font-size: 1.6rem;
    line-height: 30px;
    padding: 15px 0;
    text-align: center;
    font-weight: 900;
    border-radius: 10px;
    border: 3px solid ${props=>props.color};
    text-shadow: 0px 0px 10px black, 1px 1px 0 white, 2px 2px 0 white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 320px;
`;
export default AprendereNumber;