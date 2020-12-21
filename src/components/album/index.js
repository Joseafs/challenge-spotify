import React, { memo } from 'react'
import { Root, Icon, Box, Title, Subtitle } from './styled'
import PropTypes from 'prop-types'
import { Link } from '@material-ui/core'

function Album({
  title,
  subtitle,
  titleOff,
  url,
  color = 'secondary',
  variant = 'contained',
  onClick,
  imgSize = 30,
  img,
}) {
  const linkProps = {
    component: Link,
    href: url,
  }

  const config = url ? linkProps : ``

  return (
    <Root
      title={title}
      color={color}
      variant={variant}
      onClick={onClick}
      width={imgSize}
      {...config}
    >
      <Box>
        <Icon src={img} alt={title} width={imgSize} height={imgSize} />
        {title && !titleOff && (
          <>
            <Title align="center" variant="caption">
              {title}
            </Title>
            <Subtitle align="center" variant="caption">
              {subtitle}
            </Subtitle>
          </>
        )}
      </Box>
    </Root>
  )
}

Album.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  url: PropTypes.string,
  color: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
}

export default memo(Album)
