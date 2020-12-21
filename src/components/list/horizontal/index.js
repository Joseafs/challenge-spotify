import React, { memo } from 'react'
import { Container, Box } from './styled'
import PropTypes from 'prop-types'

function ListHorizontal({
  list,
  space = 1,
  align = 'center',
  breakLine,
  role = 'List',
}) {
  return (
    <Container margin={space} align={align} breakLine={breakLine}>
      {list.map((item, index) => (
        <Box key={`${role}_${index}`} padding={space}>
          {item}
        </Box>
      ))}
    </Container>
  )
}

ListHorizontal.propTypes = {
  list: PropTypes.array.isRequired,
  space: PropTypes.number,
  align: PropTypes.string,
  breakLine: PropTypes.string,
}

export default memo(ListHorizontal)
