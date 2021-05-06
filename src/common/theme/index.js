import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    // Color Style
    palette: {
        primary: {
            main: '#1976D2',
            light: '#03A9F4',
        },
        secondary: {
            main: '#757575',
            light: '#BDBDBD'
        },
    },
    // Text Style
    typography: {
        fontFamily: 'Roboto, sans-serif',
        fontSize: 16,
    },
    // Shape Style
    shape: {
        borderRadius: 4,
        backgroundColor: '#ccc',
        textColor: '#000',
        whiteColor: '#fff'
    }
});

export default theme;