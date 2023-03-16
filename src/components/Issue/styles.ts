import styled from 'styled-components'

export const IssueContainer = styled.div`
  display: flex;
  gap: 1rem;
  background: ${(props) => props.theme['background-card']};
  position: relative;
  top: -4rem;
  padding: 2rem;
  border-radius: 0.85rem;
`

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 0;
  width: 100%;
`

export const IssueInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
`

export const Name = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-weight: bold;

  div {
    display: flex;
    justify-content: space-between;
    a {
      display: flex;
      gap: 0.25rem;
      text-align: center;
      font-size: 0.75rem;
      align-items: center;
    }
  }

  p {
    font-size: 1.5rem;
  }
`

export const Details = styled.div`
  color: ${({ theme }) => theme['text-300']};
  display: flex;
  gap: 1rem;
  span {
    svg {
      color: ${({ theme }) => theme['text-300']};
    }
    display: flex;
    text-align: center;
    align-items: center;
    gap: 0.25rem;
  }
`
