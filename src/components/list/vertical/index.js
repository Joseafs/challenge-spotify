import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Root } from './styled'
import { Fragment } from 'react'

function ListVertical({
  list,
  role = 'list',
  width,
  align = 'normal',
  onClick,
}) {
  return (
    <Root
      role={`${role}-father`}
      align={align}
      width={width}
      onClick={onClick}
      onKeyDown={onClick}
    >
      {list.map((item, index) => {
        return <Fragment key={`${role}-${index}`}>{item}</Fragment>
      })}
    </Root>
  )
}

ListVertical.propTypes = {
  list: PropTypes.array.isRequired,
  role: PropTypes.string,
  align: PropTypes.string,
  width: PropTypes.string,
  onClick: PropTypes.func,
}

export default memo(ListVertical)
