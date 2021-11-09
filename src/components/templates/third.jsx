import React from 'react';
import styled from 'styled-components';
import Title from '../../images/thirdT.webp';
import img from '../../images/thirdI.webp';
import bg from '../../images/bgW.webp';

const Third = () =>{
    return(
        <Section>
            <div>
                <Img src={img} alt="Hamburguesas" />
            </div>
            <C>
                <ImgC>
                    <Img src={Title}/>
                </ImgC>
                <P>El curso Hamburguesas Gourmet no es un curso básico sobre cómo armar una hamburguesa, va mucho más allá. Es una guía completa con el paso a paso detallado para aquellos que quieran aprender a hacer hamburguesas de altísima calidad, creando un efecto magnético a tu marca que te hará facturar 3X VECES MÁS.</P>
                <P>O Incluso para aquellos que no tienen un local comercial físico garantizamos que con el curso de hamburguesas gourmet lograras conquistar el sueño de tener un negocio propio altamente lucrativo, con hamburguesas de un sabor único y con tu propia identidad… como les ocurrió a centenas de miembros de la academia gourmet que ya pasaron por este programa.</P>
            </C>
            <CA>
                <A href="#oferta">¡SÍ! ¡QUIERO AHORA!</A>
            </CA>
        </Section>
    );
}
const Section = styled.section`
    padding: 0 2%;
    min-height: 100vh;
    background-image: url(${bg});
    
    @media(min-width: 640px){
        padding: 0 12%;
        display: grid;
        grid-template-colums: 1fr 1fr;
        align-items: center;
    }
`;
const C = styled.div`
    max-width: 500px;
    @media(min-width: 640px){
        
        grid-row: 1;
        grid-column: 2;
    }
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
    color: black; 

    @media(min-width: 640px){
        font-size: ${props=>props.fz ? props.fz : '1.3rem'};
        margin: 20px;
        line-height: 25px;
    }
`;
const CA = styled.div`
    text-align: center;
    grid-column: 1 / 3;
    margin: 30px auto;
`;
const A = styled.a`
    text-align: center;
    font-size: 1.3rem;
    line-height: 25px;
    padding: 15px 35px;
    color: white;
    background-color: red; 

    @media(min-width: 640px){
        font-size: ${props=>props.fz ? props.fz : '1.3rem'};
       
        line-height: 25px;
        padding: 15px 55px;
    }
`;

export default Third;