import styled from 'styled-components'

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: ${({ theme }) => theme['background-card']};
  padding: 2rem;
  border-radius: 0.75rem;
  div {
    display: flex;
    justify-content: space-between;
  }
`
