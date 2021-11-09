import React from 'react';
import styled from 'styled-components';
import img from '../../images/mainBg.webp';
import imgS from '../../images/mainBgSmall.webp';
import imgTitle from '../../images/mainTitle.webp';
import OT from '../atoms/textOrange';

const Main = () =>{
    return(
        <MainC>
            <div>
                <Img src={imgTitle} alt="Hamburguesa Gourmet" />
            </div>
            <P blur>Aprenda como cocinar la más suculenta <OT>HAMBURGUESA GOURMET</OT>.</P>
            <P blur>Con el primer curso que te enseña todo el paso a paso para que inicies tu negocio cuanto antes.</P>
            <P blur fz='2.5rem'><OT>Sin importar que estés de cero en conocimiento sobre cocina</OT></P>
            <Span></Span>
            <VideoC>
                <VideoR>
                <Video width="560" height="315" src="https://www.youtube.com/embed/y4p7qApREkY" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Video>
                </VideoR>
            </VideoC>
        </MainC>
    );
}
const VideoC = styled.div`
    width: 80%;
    margin: 0 auto 30px;
    min-width: 340px;
    max-width: 700px;
`;
const VideoR = styled.div`
    height: 0;
    padding-bottom: 56.25%;
    position: relative;
`;
const Video = styled.iframe`
    position: absolute; 
    width: 100%;
    height: 100%;
    border: none;
`;
const MainC = styled.main`
    padding: 0 2%;
    min-height: 100vh;
    background-image: url(${imgS});
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media(min-width: 640px){
        background-image: url(${img});
        background-size: 100% 100%;
    }
`;
const Img = styled.img`
    width: 100%;
    margin: 20px auto;
`;
const P = styled.p`
    text-align: center;
    max-width: 850px;
    font-size: 1.5rem;
    line-height: 23px;
    margin: 10px auto;
    backdrop-filter: ${props=>props.blur ? 'blur(3px)' : '0' };

    @media(min-width: 640px){
        font-size: ${props=>props.fz ? props.fz : '1.6rem'};
        margin: 10px auto;
        line-height: 30px;
        backdrop-filter: blur(0);
    }
`;
const Span = styled.span`
    margin: 20px 0;
    position: relative;
    width: 340px;
    height: 5px;
    background-color: #f1911c;
    &:before{
        content: '';
        width: 100%;
        height: 1px;
        position: absolute;
        top: -3px;
        background-color: inherit;
    }
`;
export default Main;