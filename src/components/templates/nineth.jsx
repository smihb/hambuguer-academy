import React from 'react';
import styled from 'styled-components';
import Bono from '../atoms/bonos';
import B1 from '../../images/ninethB1.webp';
import B2 from '../../images/ninethB2.webp';
import B3 from '../../images/ninethB3.webp';
import bg from '../../images/bgW.webp';

const Nineth = () =>{
    return(
        <Section>
            <Bono 
                number='1'
                img={B1}
                title1='SALSAS ESPECIALES'
                title2='PARA HAMBURGUESAS GOURMET'
                text='A medida que la hamburguesa ganaba versiones gourmet, las salsas que acompañan al platillo ahora también dejan de ser la tradicional mayonesa, ketchup y mostaza para dar cabida a recetas más elaboradas.'
            />
            <Bono 
                T='15px'
                number='2'
                img={B2}
                title1='HOJA DE CALCULO'
                title2='LUCRO 3X'
                text='Entender los costos de tu producto es primordial para cualquier negocio, por eso en este bono les traigo un ejemplo de cómo calcular el costo de cada hamburguesa.'
            />
            <Bono 
                number='3'
                img={B3}
                title1='EL SECRETO'
                title2='SE REVELARÁ DENTRO DEL CURSO'
                text='Este último bonus es un bono secreto que encontraras escondido dentro del curso, pero ya te adelanto algo, él solo vale más que toda la inversión que vas hacer en este programa.'
            />
        </Section>
    );
}
const Section = styled.section`
    padding: 0 2% 50px;
    min-height: 100vh;
    background-image: url(${bg});

    @media(min-width: 640px){
        padding: 0 12% 50px;
        display: flex;
    }
`;
export default Nineth;