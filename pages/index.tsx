import type { NextPage } from 'next';
import { useEffect } from 'react';
import styled from 'styled-components';
import Curtains from '../Components/Curtains';

const SContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-color: hsl(0, 0%, 0%);
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

const Home: NextPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    })
    return (
        <>
            <SDiv>
                <h1>
                    Scroll down to see the curtains effect
                </h1>
            </SDiv>
            <SContainer>
                <Curtains />
            </SContainer>
            <SDiv />
        </>
    )
}

export default Home
