import { motion, useTransform } from 'framer-motion';
import { useWindowSize } from 'react-use';
import styled from 'styled-components';
import useScrollViewEffect from '../../hooks/useScrollview';

const SContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
`;

const SCurtains = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
`;

const SCurtainsInner = styled(SCurtains)`
    background-image: url(https://images.unsplash.com/photo-1663076121570-eb6e69bdde3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop8&q=100);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    pointer-events: all;
`

const SCurtain = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  width: calc((100vw - var(--max-width)) / 2);
  will-change: transform;
  background-color: hsl(0, 0%, 100%);
  z-index: 99;
  @media (prefers-color-scheme: dark) {
    background-color: hsl(0, 0%, 0%);
  }
`;

const SLeft = styled(SCurtain)`
left: 0;
transform-origin: 0 0;
`

const SRight = styled(SCurtain)`
right: 0;
transform-origin: 100% 0;
`

const Curtains = () => {
    const { width } = useWindowSize();
    const [ref, progress]: any = useScrollViewEffect();
    const end = 1 - 55 / width;
    const scaleX = useTransform(progress, [0.35, end], [1, 0]);

    return (
        <SContainer>
            <SCurtainsInner>
                <h1>
                    This is a custom div
                </h1>
            </SCurtainsInner>
            <SCurtains ref={ref}>
                <SLeft style={{ scaleX }} />
                <SRight style={{ scaleX }} />
            </SCurtains>
        </SContainer>
    );
};

export default Curtains;
