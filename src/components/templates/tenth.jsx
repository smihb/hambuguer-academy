import React from 'react';
import styled from 'styled-components';
import title from '../../images/tenthT.webp';
import img1 from '../../images/tenth1.webp';
import img2 from '../../images/tenth2.webp';
import img3 from '../../images/tenth3.webp';
import img4 from '../../images/tenth4.webp';

const Tenth = () =>{
    return(
        <Section>
            <ImgC>
                <Img src={title} alt="hamburguesa" />
            </ImgC>
            <TestC>
                <Test>
                    <Img src={img1} alt="hamburguesa" />
                </Test>
                <Test>
                    <Img src={img2} alt="hamburguesa" />
                </Test>
                <Test>
                    <Img src={img3} alt="hamburguesa" />
                </Test>
                <Test>
                    <Img src={img4} alt="hamburguesa" />
                </Test>
            </TestC>
        </Section>
    );
}
const Section = styled.section`
    padding: 30px 2%;
    min-height: 100vh;
    background-color: black;

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
const TestC = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
const Test = styled.div`
    max-width: 500px;
    min-width: 300px;
    margin: 0 auto;
`;
export default Tenth;