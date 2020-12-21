import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Root, AsideHead, Logo } from './styled'

function Aside({ children }) {
  return (
    <Root>
      <AsideHead>
        <Logo src="/logo.svg" alt="Spotify" width="42" height="42" />
      </AsideHead>
      {children}
    </Root>
  )
}

Aside.propTypes = {
  children: PropTypes.node,
}

export default memo(Aside)
