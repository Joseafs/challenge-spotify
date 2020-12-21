import React, { memo } from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'
import { Root, Content, Article, Aside } from './styled'

function Layout({ aside, title = '', children }) {
  return (
    <Root>
      <Head>
        <link rel="icon" href="/logo.svg" />

        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta name="theme-color" content="#191414" />
        <meta name="msapplication-navbutton-color" content="#191414" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#191414" />
      </Head>
      {aside}
      <Article>
        <Content>{children}</Content>
      </Article>
    </Root>
  )
}

Layout.propTypes = {
  aside: PropTypes.node,
  children: PropTypes.node.isRequired,
}

export default memo(Layout)
