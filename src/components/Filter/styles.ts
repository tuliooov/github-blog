import styled from 'styled-components'

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    p {
      font-weight: bold;
    }

    span {
      font-size: 0.875rem;
      color: ${({ theme }) => theme['text-200']};
    }
  }
`
