import { createGlobalStyle } from 'styled-components';
import { colors } from './theme';

const Variables = createGlobalStyle`
    :root {
        --max-width: 1000px;
        --interactive: ${colors.interactive};
        --interactive-hover: ${colors.interactiveHover};
        --danger: ${colors.danger};
        --danger-hover: ${colors.dangerHover};
        --success: ${colors.success};
        --warning: ${colors.warning};
        --black: ${colors.black};
        --white: ${colors.white};
        --surface: ${colors.surface};
    }
`;

export default Variables;