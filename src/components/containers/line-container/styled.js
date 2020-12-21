import styled from 'styled-components'
import { Container } from '@material-ui/core'

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  ${({ mgny, theme }) => `padding: ${theme.spacing(mgny, 0)}`};
`

export const Content = styled(Container)`
  ${({ maxWidth }) => !maxWidth && `padding: 0 !important;`}
`
