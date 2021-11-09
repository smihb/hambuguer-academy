import React from 'react';
import styled from 'styled-components';
import bg from '../../images/secondBg.webp';
import Title from '../../images/secondT.webp';
import img from '../../images/secondI.webp';
import OT from '../atoms/textOrange';

const Second = () =>{
    return(
        <Section>
            <C>
                <ImgC>
                    <Img src={Title}/>
                </ImgC>
                <P>Alguna vez te has preguntado cómo sería tu vida si pudieras cumplir el sueño de tener tu propio negocio, trabajar en lo que te gusta, sentirte realizado y feliz?</P>
                <P>Haciendo algo donde puedas ganar reconocimiento, conquistar tu libertad y explotar tu pasión por la alta gastronomía.</P>
                <P fz={'1.6rem'}><OT>¿LOGRAS IMAGINARLO? <br /> ¡SERÍA GENIAL!</OT></P>
                <P>Esto es lo que sintieron todos los emprendedores y dueños de negocios que implementaron el programa de hamburguesas gourmet en sus locales.</P>
                <P>Más ingresos, diferenciación de su marca y sobre todo paz.</P>
            </C>
            <div>
                <Img src={img} alt="Hamburguesas" />
            </div>
        </Section>
    );
}
const Section = styled.section`
    padding: 0 2%;
    min-height: 100vh;
    background-image: url(${bg});
    background-size: cover;

    @media(min-width: 640px){
        padding: 0 12%;
        display: flex;
        align-items: center;
    }
`;
const C = styled.div`
    max-width: 500px;
`;
const ImgC = styled.div`
    max-width: 300px;
    margin: 0 auto;
`;
const Img = styled.img`
    width: 100%;
    margin-top: 30px;
`;
const P = styled.p`
    text-align: justify;
    font-size: 1.3rem;
    line-height: 25px;
    padding: 0 15px;
    margin: 25px auto;

    @media(min-width: 640px){
        font-size: ${props=>props.fz ? props.fz : '1.3rem'};
        margin: 20px;
        line-height: 25px;
    }
`;
export default Second;