import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${({ theme, margin, align, breakLine }) => css`
    margin: ${theme.spacing(0, -margin)};
    justify-content: ${align};

    ${theme.breakpoints.down(breakLine)} {
      text-align: center;
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  `}
`

export const Box = styled.div`
  ${({ theme, padding }) => css`
    padding: ${theme.spacing(padding, padding)};
  `}
`
