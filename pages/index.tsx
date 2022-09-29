import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import { useEffect } from 'react';
import styled from 'styled-components';
import Curtains from '../Components/Curtains';
import animation from '../utils/animation';

const SContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-color: inherit;
`;

const SDiv = styled.div`
    position: relative,
    width: 100%;
    height: 100vh;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    display: flex;
`

const SContent = styled(motion.div)`
    max-width: var(--max-width);
    margin: 0 auto;
    text-align: center;
    width: 100%;

    h1 {
        font-size: 4rem;
        font-weight: 700;
    }

    p {
        font-size: 1.5rem;
        font-weight: 400;
    }
`;

const SBackground = styled.div`
    background-image: url(https://images.unsplash.com/photo-1663076121570-eb6e69bdde3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop8&q=100);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    color: white;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Home: NextPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    })
    return (
        <>
            <SDiv>
                <SContent variants={animation} initial="hidden" animate="show" transition={{
                    duration: 0.5,
                    ease: 'cubicBezier(0.075, 0.82, 0.165, 1)',
                }}>
                    <h1>
                        Scroll down to see the curtains effect
                    </h1>
                    <p>
                        This is a demo of a custom div that uses framer-motion to create a curtains effect when scrolling down.
                    </p>
                </SContent>
            </SDiv>
            <SContainer>
                <Curtains>
                    <SBackground>
                        <SContent variants={animation} initial="hidden" animate="show" transition={{
                            duration: 0.5,
                            ease: 'cubicBezier(0.075, 0.82, 0.165, 1)',
                        }}>
                            <h1>
                                This is the content
                            </h1>
                            <p>
                                This is the content
                            </p>
                        </SContent>
                    </SBackground>
                </Curtains>
            </SContainer>
            <SDiv />
        </>
    )
}

export default Home
