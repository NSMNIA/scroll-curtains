import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
    ::selection {
        background-color: var(--interactive);
        color: var(--white);
    }

    body {
        background-color: var(--white);
        color: var(--black);
    }

    @media (prefers-color-scheme: dark) {
        html {
            color-scheme: dark;
        }

        body {
            background-color: var(--black);
            color: var(--white);
        }
    }
`;

export default Global;