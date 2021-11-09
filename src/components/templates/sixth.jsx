import React from 'react';
import styled from 'styled-components';
import title from '../../images/sixthI.webp';
import title2 from '../../images/sixthT2.webp';
import N1 from '../../images/sixthN1.webp';
import N2 from '../../images/sixthN2.webp';
import N3 from '../../images/sixthN3.webp';
import N4 from '../../images/sixthN4.webp';
import Number from '../atoms/number';

const Sixth = () =>{
    return(
        <Section>
            <ImgC>
                <Img src={title}/>
            </ImgC>
            <Numbers>
                <Number 
                    step='1'
                    title='Satisfacción y Reconocimiento' 
                    text='Imagina hacer lo que amas y ser reconocido por las personas que te rodean por lo que has producido.'
                />
                <Number 
                    step='2'
                    title='Libertad Financiera' 
                    text='Superar las 8 horas de trabajo diario trabajando por un propósito mayor, acumulando patrimonio que te permita darle una mejor vida a tu familia y aún ayudar a otros.'
                />
                <Number 
                    step='3'
                    title='Control y Seguridad' 
                    text='Ya no dependeras de un jefe para que te dé un salario todos los meses, lo puedes producir por ti mismo. Tú hacer tus reglas.'
                />
            </Numbers>
                <ImgC2>
                    <Img src={title2}/>
                </ImgC2>
            <Numbers>
                <ImgC3>
                    <Img src={N1}/>
                </ImgC3>
                <ImgC3>
                    <Img src={N2}/>
                </ImgC3>
                <ImgC3>
                    <Img src={N3}/>
                </ImgC3>
                <ImgC3>
                    <Img src={N4}/>
                </ImgC3>
            </Numbers>
        </Section>
    );
}
const Section = styled.section`
    padding: 0 2%;
    background-color: black;

    @media(min-width: 640px){
        padding: 0 12%;
    }
`;
const ImgC = styled.div`
    max-width: 500px;
    margin: 0 auto;
`;
const ImgC2 = styled.div`
    max-width: 800px;
    margin: 0 auto;
`;
const ImgC3 = styled.div`
    max-width: 500px;
    margin: 0 auto;
`;
const Img = styled.img`
    width: 100%;
    margin-top: 50px;
`;
const Numbers = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
export default Sixth;