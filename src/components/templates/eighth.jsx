import React from 'react';
import styled from 'styled-components';
import Title from '../../images/eighthT.webp';


const Eighth = () =>{
    return(
        <Section>
                <ImgC>
                    <Img src={Title}/>
                </ImgC>
        </Section>
    );
}
const Section = styled.section`
    padding: 50px 2% ;
    background-color: #f1911c;
    @media(min-width: 640px){
        padding: 50px 12%;
    }
`;
const ImgC = styled.div`
    max-width: 800px;
    margin: 0 auto;
`;
const Img = styled.img`
    width: 100%;
`;

export default Eighth;