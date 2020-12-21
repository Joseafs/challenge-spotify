import React, { memo } from 'react'
import { Root, Line, Content } from './styled'
import PropTypes from 'prop-types'

function LineContainer({ children, max = 'lg', mgny = 6 }) {
  return (
    <Root mgny={mgny}>
      <Content maxWidth={max}>{children}</Content>
    </Root>
  )
}

LineContainer.propTypes = {
  max: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  mgny: PropTypes.number,
}

export default memo(LineContainer)
