import styled from 'styled-components'

export const Root = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme['text-700']};
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
  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`
