import React, { memo } from 'react'
import { Text } from './styled'
import PropTypes from 'prop-types'

function Title({ text, type = 'h5', align = 'center', color = 'primary' }) {
  return (
    <Text variant={type} align={align} color={color}>
      {text}
    </Text>
  )
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  align: PropTypes.string,
  color: PropTypes.string,
}

export default memo(Title)
