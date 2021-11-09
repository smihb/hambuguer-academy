import React from 'react';
import styled from 'styled-components';

const Counter = () =>{
    return(
        <Container>
            <Timer><div>00</div><Span>Días</Span></Timer>
            <Timer><div>00</div><Span>Horas</Span></Timer>
            <Timer><div>00</div><Span>Minútos</Span></Timer>
            <Timer><div>00</div><Span>Segundos</Span></Timer>
        </Container>
    );
}
const Container = styled.div`
    display: flex;
    justify-content: space-around;
    max-width: 600px;
    margin: 0 auto 30px;
`;
const Timer = styled.div`
    text-align: center;
    border-radius: 10px;
    background-color: lightgrey;
    padding: 5px;
    
    & > div{
        color: darkslategray;
        line-height: 50px;
        font-size: 3.5rem;
    }
    @media(min-width: 900px){
        
        border-radius: 20px;
        padding: 10px;
       
        & > div{
            color: darkslategray;
            line-height: 90px;
            font-size: 6rem;
        }
    }
`;
const Span = styled.span`
    color: darkslategray;
    font-size: 1rem;
`;
export default Counter;