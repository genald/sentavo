import shadows from './shadows';
import typography from './typography';

import { createTheme } from '@material-ui/core';

const theme = createTheme({
    palette: {
        baseFont: '\'Open Sans\', Helvetica, Arial, sans-serif',
        fontSize: {
            XL: '32px',
            L: '24px',
            M: '18px',
            S: '14px',
            XS: '12px',
            XXS: '11px',
            TXS: '10px',
        },
        fontWeight: {
            light: '300',
            normal: '500',
            heavy: '800',
        },
        primary: {
            main: "#0099DD",
        },
        secondary: {
            main: '#D64045', //colors.indigo[500],
        },
        color: {
            primary: {
                black: '#484848', 
                white: '#f8f9fb',
                pureWhite: '#fff',
                offWhite: '#f5f5f5',
                grey: '#ccc',
                darkGrey: '#777',
                lightGrey: '#e2e7eb',
                red: '#e32b2b',
                blue: '#0099dd',
                green: '#36a749',
                yellow: '#eca01f',
            },
            social: {
                facebook: '#3b5998',
                twitter: '#00aced',
                instagram: '#cc2366',
                linkedIn: '#0077b5',
            },
            gradient: {
                white: 'linear-gradient(to top, #e2e7eb, #f8f9fb)',
                red: 'linear-gradient(to top, #cc2505, #ec5c41)',
                blue: 'linear-gradient(to top, #007db2, #0097d8)',
                green: 'linear-gradient(to top, #24a82c, #59cb5f)',
                yellow: 'linear-gradient(to top, #c48f2d, #f3b037)',
            },
        },
        border: {
            default: '1px solid',
            color: {
                red: '#cc2505',
                blue: '#007db2',
                green: '#24a82c',
                yellow: '#c48f2d',
            },
            hover: {
                red: '#cc2505',
                blue: '#0070c9',
                green: '#2e8e3e',
                yellow: '#c48f2d',
            }
        },
    },
    shadows,
    typography,
});

export default theme;
