import type { NextPage } from 'next';
import { useEffect } from 'react';
import styled from 'styled-components';
import Curtains from '../Components/Curtains';

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

const SContent = styled.div`
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

const Home: NextPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    })
    return (
        <>
            <SDiv>
                <SContent>
                    <h1>
                        Scroll down to see the curtains effect
                    </h1>
                    <p>
                        This is a demo of a custom div that uses framer-motion to create a curtains effect when scrolling down.
                    </p>
                </SContent>
            </SDiv>
            <SContainer>
                <Curtains />
            </SContainer>
            <SDiv />
        </>
    )
}

export default Home
