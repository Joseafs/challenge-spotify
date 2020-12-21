import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fafafa',
    },
    secondary: {
      main: '#999',
    },
    background: {
      default: '#212121',
    },
    type: 'dark',
  },
  shape: { borderRadius: 0 },
  typography: {
    fontFamily: 'Roboto',
  },
})

export default theme
