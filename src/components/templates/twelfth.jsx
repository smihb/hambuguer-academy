import React from 'react';
import styled from 'styled-components';
import title from '../../images/fouthT.webp';


const Twelfth = () =>{
    return(
        <>
        <Section>
            <Div1>
                <div>
                    <P><b>¿TODAVÍA CON DUDAS?</b></P>
                    <P>Llámame por whatsapp para ayudarte a responder tus preguntas.</P>
                </div>
                <A href='https://api.whatsapp.com/send?phone=554198391881&text=Hola%2C%20quiero%20la%20promoci%C3%B3n%20del%20curso%20hamburguesa%20gourmet'>¡Haz clic aquí y habla conmigo!</A>
            </Div1>
        </Section>
        <Section2>
            <ImgC>
                <Img src={title} alt="hamburguesa" />
            </ImgC>
        </Section2>
        </>
    );
}
const Section = styled.section`
    padding: 30px 2%;

    @media(min-width: 640px){
        padding: 50px 12%;
    }
`;
const Section2 = styled.section`
    padding: 30px 2%;
    background-color: black;

    @media(min-width: 640px){
        padding: 50px 12%;
    }
`;
const Div1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 800px;
    margin: 0 auto; 
    @media(min-width: 640px){
        flex-direction: row;
    }
    
`;
const ImgC = styled.div`
    max-width: 400px;
    margin: 0 auto;
`;
const Img = styled.img`
    width: 100%;
`;
const P = styled.p`
    color: black;
    text-align: center;
    font-size: 1.3rem;
    margin: 10px auto;
    max-width: 400px;

    & b{
        color: black;
    }
`;
const A = styled.a`
    display: inline-block;
    margin: 15px auto;
    padding: 10px 20px;
    font-size: 1.3rem;
    background-color: black;
`;
export default Twelfth;