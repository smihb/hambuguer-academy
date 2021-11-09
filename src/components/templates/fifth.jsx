import React from 'react';
import styled from 'styled-components';
import img from '../../images/fifthI.webp';
import OT from '../atoms/textOrange';

const Fifth = () =>{
    return(
        <Section>
            <ImgC>
                <Img src={img} alt="hamburguer" />
            </ImgC>
            <P>Pruébalo durante 15 días, CON GARANTÍA DE REEMBOLSO. Estamos tan seguros que el contenido que hemos preparado para ti en este entrenamiento ¡Será un divisor de aguas en tu vida que ofrecemos 15 días de garantía!</P>
            <P><OT>La garantía es incondicional, sin gastos de devolución, sin penalización, sin nada.</OT></P>
            <P>¡Eso mismo! Queremos que te sientas absolutamente seguro de que estás haciendo un óptimo negocio. Esta es otra ventaja exclusiva de los miembros de la Academia Gourmet.</P>
        </Section>
    );
}
const Section = styled.section`
    padding: 150px 2% 0;
    position: relative;
    @media(min-width: 640px){
        padding: 150px 12% 0;
    }
`;
const ImgC = styled.div`
    max-width: 300px;
    margin: 0 auto;
    position: relative;
`;
const Img = styled.img`
    width: 100%;
    position: absolute;
    top: -300px;
`;
const P = styled.p`
    text-align: justify;
    font-size: ${props=>props.fz ? props.fz : '1.3rem'};
    line-height: 25px;
    padding: 0 15px;
    margin: 25px auto;
    color: black;
    max-width: 850px;

    @media(min-width: 640px){
        font-size: ${props=>props.fz ? props.fz : '1.3rem'};
        margin: 20px auto;
        line-height: 25px;
    }
`;
export default Fifth;