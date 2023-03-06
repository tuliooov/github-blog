import styled from 'styled-components'

export const InputStyle = styled.input`
  font-size: 1rem;
  padding: 1rem 0.5rem;
  background: ${({ theme }) => theme['input-background']};
  border: solid 0.0625rem ${({ theme }) => theme['text-200']};
  border-radius: 0.5rem;
  color: ${({ theme }) => theme['text-200']};
  ::placeholder {
    color: ${({ theme }) => theme['text-200']};
  }
`
