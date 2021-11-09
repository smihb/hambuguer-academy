import React from 'react';
import styled from 'styled-components';
import title from '../../images/eleventhT.webp';
import img from '../../images/eleventhI.webp';
import img2 from '../../images/eleventhI2.webp';
import Bg from '../../images/eleventhBg.webp';
import bg from '../../images/bgW.webp';
import OT from '../atoms/textOrange';
import Promocion from '../atoms/promocion';
import Counter from '../atoms/contador';

const Eleventh = () =>{
    return(
        <Section id='oferta'>
            <Container>
                <ImgC>
                    <Img src={title} alt="hamburguesa" />
                </ImgC>
                <ImgP>
                    <Img src={img} alt="hamburguesa" />
                </ImgP>
                <P>El precio regular del <B>CURSO DE HAMBURGUESAS GOURMET</B> es de <B2>U$ 99</B2> Sin embargo, para ti que has mostrado interés y estás comprometido, decidí hacer una oferta especial por tiempo indefinido. Recordando que el precio puede cambiar en cualquier momento.</P>
                <ListC>
                    <P><Span>&#9989;</Span>Curso de Hamburguesas Gourmet <OT>(Libro Digital)</OT> – <B>U$49</B></P>
                    <P><Span>&#9989;</Span>Hoja de cálculo: Lucro 3X <OT>(Bono)</OT> – <B>U$17</B></P>
                    <P><Span>&#9989;</Span>Salsas de Hamburguesas <OT>(Bono)</OT> – <B>U$33</B></P>
                    <P><Span>&#9989;</Span>Bono Secreto <OT>(Paquete Oro Exclusivo)</OT> – <B>INESTIMABLE</B></P>
                </ListC>
                <Promocion/>
                <A href='https://api.whatsapp.com/send?phone=554198391881&text=Hola%2C%20quiero%20la%20promoci%C3%B3n%20del%20curso%20hamburguesa%20gourmet'>¡SÍ! ¡QUIERO EMPEZAR A VENDER AHORA!</A>
                <P><B>Atención: ¡esta promoción termina hoy!</B></P>
                <Counter />
                <ImgC>
                    <Img src={img2} alt="hamburguesa" />
                </ImgC>
           </Container>
        </Section>
    );
}
const Section = styled.section`
    padding: 30px 2%;
    min-height: 100vh;
    background-color: black;

    @media(min-width: 640px){
        padding: 50px 12%;
        background-image: url(${Bg});
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: bottom;
        position: relative;

        &:before{
            content: '';
            position: absolute;
            width: 100%;
            height: 5px;
            top: 0;
            left: 0;
            background-color: black;
        }
    }
`;
const Container = styled.div`
    border: 10px solid #f1911c;
    max-width: 800px;
    margin: 0 auto; 
    padding: 20px 0;
    border-radius: 40px;
    background-color: rgba(255,255,255, .5);
`;
const ImgC = styled.div`
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    `;
const ImgP = styled.div`
    max-width: 800px;
    margin: 0 auto;
    
`;
const Img = styled.img`
    width: 100%;
`;
const P = styled.p`
    text-align: center;
    font-size: 1.3rem;
    line-height: 25px;
    padding: 0 5px;
    margin: 25px auto;
    color: black;
    text-shadow: 0 0 1px black;
    backdrop-filter: blur(10px);

    @media(min-width: 640px){
        font-size: ${props=>props.fz ? props.fz : '1.3rem'};
        margin: 20px;
        line-height: 25px;
    }
`;
const B = styled.b`
    color: black;
`;
const B2 = styled.b`
    color: red;
`;
const ListC = styled.div`
    margin: 0 auto;
    max-width: 620px;
    position: relative;
    padding: 1px 0;

    &:before,
    &:after{
        content: '';
        position: absolute;
        height: 2px;
        width: 70%;
        top: 0;
        left: 50%;
        transform: translate(-50%);
        background-color: darkgray;
    }
    &:after{
        top: 100%;
    }
`;
const Span = styled.span`
    padding-right: 5px;
`;
const A = styled.a`
    display: block;
    text-align: center;
    margin: 15px auto 0;
    padding: 10px;
    max-width: 400px;
    background-color: #07BE28;
    font-size: 1.7rem;
    font-weight: 700;
    border-radius: 25px;
    border: 10px solid white;
`;
export default Eleventh;