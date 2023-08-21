import styled from 'styled-components'

export const LayoutContainer = styled.div`
  margin: 5rem auto;
  max-width: 70rem;
  height: calc(100vh - 10rem);
  padding-top: 2.5rem;

  background: ${({ theme }) => theme['gray-800']};

  border-radius: 8px;
`
