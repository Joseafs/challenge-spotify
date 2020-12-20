import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { wrapper } from '../store'

import { MuiThemeProvider, NoSsr } from '@material-ui/core'
import { ThemeProvider } from 'styled-components'

import CssBaseline from '@material-ui/core/CssBaseline'

import Authentication from '../components/authentication'

import '../theme/globals.css'
import theme from '../theme'

function MyApp(props) {
  const { Component, pageProps } = props

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <Fragment>
      <NoSsr />
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Authentication />
          <Component {...pageProps} />
        </ThemeProvider>
      </MuiThemeProvider>
    </Fragment>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}

export default wrapper.withRedux(MyApp)
