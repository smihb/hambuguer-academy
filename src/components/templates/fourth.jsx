import React from 'react';
import styled from 'styled-components';
import title from '../../images/fouthT.webp';
import img from '../../images/fourthI.webp';
import OT from '../atoms/textOrange';
import Step from '../atoms/step';

const Fourth = () =>{
    return(
        <Section>
            <ImgC>
                <Img src={title}/>
            </ImgC>
            <C>
                <ImgP>
                    <Img2 src={img}/>
                </ImgP>
                <div>
                    <P>Es una de las escuelas online más renombradas de latinoamérica, ganadora del premio “Domine su Restaurante” en el año 2020 ofrecida por el director Matheus Lessa uno de los mayores gestores y consultores de restaurantes en Brasil.</P>
                    <P><OT>La academia gourmet ayuda a personas 3 tipos de personas.</OT></P>
                </div>
            </C>
            <Steps>
                <Step step='A' children={A}/>
                <Step step='B' children={B}/>
                <Step step='C' children={Ce}/>
            </Steps>
        </Section>
    );
}
const A = 'Quien está iniciando en el mundo de la gastronomía y está comenzando literalmente del absoluto cero proporcionando el conocimiento práctico de cocina, gestion de negocios y marketing.'
const B = 'Quien desea impresionar a su pareja o amigo un jueves por la noche haciendo un plato a nivel profesional deleitando el paladar de sus comensales.'
const Ce = 'Quien ya tiene un negocio y aún no consigue mantener una consistencia en sus ganancias, nosotros podemos ayudarle a facturar x3 veces más.'
const Section = styled.section`
    padding: 0 2% 150px;
    min-height: 100vh;
    background-color: black;

    @media(min-width: 640px){
        padding: 0 12% 150px;
    }
`;
const ImgC = styled.div`
    max-width: 300px;
    margin: 0 auto;
`;
const ImgP = styled.div`
    max-width: 300px;
    margin: 0 auto;
`;
const Img = styled.img`
    width: 100%;
    margin-top: 30px;
`;
const Img2 = styled.img`
    width: 100%;
`;
const C = styled.div`
    @media(min-width: 640px){
        display: flex;
        align-items: center;
    }
`;
const P = styled.p`
    text-align: justify;
    font-size: 1.3rem;
    line-height: 25px;
    padding: 0 15px;
    margin: 25px auto;
    max-width: 500px;
    @media(min-width: 800px){
        font-size: ${props=>props.fz ? props.fz : '1.3rem'};
        margin: 20px;
        line-height: 25px;
    }
`;
const Steps = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
export default Fourth;