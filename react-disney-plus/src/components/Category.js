import React from 'react';
import styled from "styled-components";


const Category= () => {
    return (
        <>
            <Container>
                <Wrap>
                    <img src="/images/viewers-disney.png" alt="disney" />
                    <video autoPlay loop muted>
                        <source src="/videos/disney.mp4" type="video/mp4" />
                    </video>
                </Wrap>
                <Wrap>
                    <img src="/images/viewers-starwars.png" alt="star-wars" />
                    <video autoPlay loop muted>
                        <source src="/videos/star-wars.mp4" type="video/mp4" />
                    </video>
                </Wrap>
                <Wrap>
                    <img src="/images/viewers-pixar.png" alt="disney" />
                    <video autoPlay loop muted>
                        <source src="/videos/pixar.mp4" type="video/mp4" />
                    </video>
                </Wrap>
                <Wrap>
                    <img src="/images/viewers-national.png" alt="disney" />
                    <video autoPlay loop muted>
                        <source src="/videos/national-geographic.mp4" type="video/mp4" />
                    </video>
                </Wrap>
                <Wrap>
                    <img src="/images/viewers-marvel.png" alt="disney" />
                    <video autoPlay loop muted>
                        <source src="/videos/marvel.mp4" type="video/mp4" />
                    </video>
                </Wrap>
            </Container>
        </>
    );
}

export default Category;

const Container = styled.div`
    margin-top: 30px;
    padding: 30px 0 26px;
    display: grid;
    gap: 25px;
    grid-template-columns: repeat(5, 1fr);
    
    @media (max-width: 768px){
        grid-template-columns: repeat(2, 1fr);
    }
    
    
`
const Wrap = styled.div`
    padding-top: 56.25%;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0 26px 36px -10px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: all 250ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
    border: 3px solid rgb(249, 249, 249, 0.1);

    img {
        inset: 0px;
        display: block;
        height: 100%;
        object-fit: cover;
        opacity: 1;
        position: absolute;
        transition: opacity 500ms ease-in-out 0s;
        width: 100%;
        z-index: 1;
    }
    
    video {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        opacity: 0;
        z-index: 0;
    }
    
    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 32px 22px -10px;
        
        transform: scale(1.02);
        border-color: rgb(249, 249, 249, 0.8);
        
        
        video {
            opacity: 1;
        }
    }

`