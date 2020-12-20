import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#999',
    },
    secondary: {
      main: '#333',
    },
    background: {
      default: '#212121',
    },
  },
  typography: {
    fontFamily: 'Roboto',
  },
})

export default theme
