import styled, { css } from 'styled-components'
import { Button, Typography } from '@material-ui/core'

export const Root = styled(Button)`
  ${({ theme, variant, width }) => css`
    max-width: ${width}px;
    padding: 0 0 10px 0;
    min-width: 0;

    ${variant === 'text' &&
    css`
      &:hover {
        background-color: ${theme.palette.primary.main}!important;
      }
    `}
  `}
`

export const Box = styled.div`
  ${() => css`
    flex-direction: column;
    display: flex;
    align-items: center;
  `};
`

export const Icon = styled.img``

export const Title = styled(Typography)`
  ${({ theme }) => `margin-top: ${theme.spacing(2)}px`};
`
export const Subtitle = styled(Typography)`
  ${({ theme }) => `color: ${theme.palette.secondary.main};`};
`
