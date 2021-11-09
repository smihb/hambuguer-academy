import React from 'react';
import styled from 'styled-components';
import bg from '../../images/secondBg.webp';
import img from '../../images/seventhI.webp';
import title1 from '../../images/seventhT1.webp';
import title2 from '../../images/seventhT2.webp';
import AprendereNumber from '../atoms/aprendereNumber';
import OT from '../atoms/textOrange';

const Seventh = () =>{
    return(
        <Section>
            <ImgC>
                <Img src={img} alt="hamburguer" />
            </ImgC>
            <ImgC>
                <Img2 src={title1} alt="hamburguer" />
            </ImgC>
            <P>El programa Hamburguesas gourmet es un libro digital (E-book) con el paso a paso detallado para que montes tu propio negocio de hamburguesas gourmet y empieces todos los días a facturar 3X veces más. En él aprenderás recetas de pan, mezclas de carnes, condimentos, tipos de quesos, salsas especiales para acompañamientos y varias recetas de hamburguesas.</P>
            <P>Al comprar el curso, se enviará un nombre de usuario y una contraseña a tu correo electrónico con acceso a todo el material del programa donde te unirás a miles de otros miembros de la academia gourmet.</P>
            <ImgC2>
                <Img2 src={title2} alt="hamburguer" />
            </ImgC2>
            <NumberC>
                <ANC>
                    <AprendereNumber 
                        step='1'
                        title='PRIMEROS'
                        title2='PASOS'
                    />
                    <P>Antes de comenzar a preparar las deliciosas hamburguesas, necesitas aprender los conceptos básicos. En este módulo te mostraremos todo el material necesario para empezar a producir tus hamburguesas desde cero.</P>
                    <Ol>
                        <li>Historia de la hamburguesa.</li>
                        <li>Consejos iniciales.</li>
                        <li>Equipos necesarios</li>
                        <li>¿Qué tipo de plancha utilizar?</li>
                        <li>Principales cuidados a la hora de elegir los mejores equipos</li>
                    </Ol>
                </ANC>
                <ANC>
                    <AprendereNumber 
                        step='2'
                        title='PREPARACIÓN'
                        title2='DE LA CARNE'
                    />
                    <P>Una hamburguesa majestuosa comienza con la elección de las carnes adecuadas, tener una mezcla perfecta es fundamental. Por eso es muy importante saber cuál elegir. hamburguesas desde cero.</P>
                    <Ol>
                        <li>Cuidados a la hora de Comprar Carne</li>
                        <li>Crear tu Propia Mezcla</li>
                        <li>Cortes de Carne más Utilizados</li>
                        <li>Nuestras Mezclas Secretas <OT>(+8 Mezclas Especiales)</OT></li>
                        <li>Cómo Moler la Carne Eficientemente</li>
                        <li>Principios para Conservar la Carne</li>
                        <li>Tiempos Perfectos para Darle vueltas a la Carne</li>
                        <li>Condimentos Gourmet de la Carne </li>
                    </Ol>
                </ANC>
                <ANC>
                    <AprendereNumber 
                        step='3'
                        title='PREPARACIÓN'
                        title2='DEL PAN'
                    />
                    <P>El Pan tiene el poder de levantar o destruir cualquier hamburguesa, el pan corresponde al 40% de la calidad de una hamburguesa. Cuanto más suave y más sabroso es, más deliciosa será tu hamburguesa.</P>
                    <Ol>
                        <li>Trucos para un buen pan Gourmet</li>
                        <li>Consejos de Personalización</li>
                        <li>¿Tostar o no tostar?</li>
                        <li>Recetas <OT>(+6 tipos de Panes)</OT></li>
                    </Ol>
                </ANC>
                <ANC>
                    <AprendereNumber 
                        step='4'
                        title='SELECCION'
                        title2='DE QUESOS'
                    />
                    <P>Puedes elegir cualquier queso que se derrita bien para hacer una buena Cheeseburger, pero si quieres complacer a todos los paladares, tenemos una lista para ayudarte.</P>
                    <OT>Lista de quesos especiales (13 tipos)</OT>
                </ANC>
                <ANC>
                    <AprendereNumber 
                        step='5'
                        title='ACOMPAÑAMIENTOS'
                    />
                    <P>Una buena hamburguesa nunca viene sola, siempre tiene un buen acompañante. Es por eso que hemos reunido varias recetas adicionales de diferentes tipos de guarniciones utilizadas en hamburgueserías de todo el mundo para que tus clientes la disfruten y esto haga diferenciarte de cualquier competencia que tengas.</P>
                    <OT>(+15 recetas de acompañamientos)</OT>
                </ANC>
                <ANC>
                    <AprendereNumber 
                        step='6'
                        title='BURGUERS'
                        title2='GOURMET'
                    />
                    <P>Este es el módulo más esperado del curso. En él traemos más de 25 recetas de hamburguesas gourmet, son recetas prácticas, utilizadas y probadas por las mayores hamburgueserías del mundo (algunas de ellas ganadoras de premios internacionales) y amantes de una buena hamburguesa.</P>
                   <OT>(+25 Recetas de Hamburguesas)</OT>
                </ANC>
            </NumberC>
        </Section>
    );
}
const Section = styled.section`
    padding: 0 2% 50px;
    min-height: 100vh;
    background-image: url(${bg});
    background-repeat: repeat;

    @media(min-width: 640px){
        padding: 0 12% 50px;
    }
`;
const ImgC = styled.div`
    max-width: 600px;
    max-height: 450px;
    margin: 0 auto;
    position: relative;
`;
const ImgC2 = styled(ImgC)`
    max-width: 400px;
    margin: 50px auto 25px;
`;
const Img = styled.img`
    width: 100%;
    position: relative;
    top: -10px;
    @media(min-width: 640px){
        top: -100px;
    }
`;
const Img2 = styled(Img)`
    top: 0px;
`;
const P = styled.p`
    text-align: justify;
    font-size: ${props=>props.fz ? props.fz : '1.3rem'};
    line-height: 25px;
    margin: 25px auto;
    max-width: 850px;

    @media(min-width: 640px){
        font-size: ${props=>props.fz ? props.fz : '1.3rem'};
        margin: 20px auto;
        line-height: 25px;
        padding: 0;
    }
`;
const NumberC = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
const ANC = styled.div`
    margin: 0 auto;
    max-width: 320px;
`;
const Ol = styled.ol`
    padding-left: 20px;
    font-size: 1.3rem;
    & > li{
        margin-bottom: 5px;
    }
`;
export default Seventh;