import styled from 'styled-components'

export const Root = styled.div`
  width: ${({ width }) => (width ? width : '100%')};
  max-width: 100vw;
  height: 100%;
  display: flex;
  justify-content: ${({ align }) => align};
  flex-direction: column;
`
