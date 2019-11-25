import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

import COLOR from './color'

export default createGlobalStyle`

    ${normalize}

    * {
        box-sizing: border-box;
    }

    body {
        padding: 0;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    body.fixedPosition {
        position: fixed;

        @media screen and (min-width: 851px) {
            position: relative;
        }
    }
    
    h1, h2, h3, h4, h5, h6, p, blockquote {
        position: relative;
        margin: 0;
        padding: 0;
        color: ${COLOR.impact.default};
        font-family: 'Gotham';
    }

    /* h1, h2, h3, h4, h5, h6 {
        font-weight: 900;
    } */

    button,a {
        font-family: 'Gotham'
    }
`
