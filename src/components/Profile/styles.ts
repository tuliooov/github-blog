import styled from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  gap: 1rem;
  background: ${(props) => props.theme['background-card']};
  padding: 2rem;
  border-radius: 0.85rem;
  width: 100%;
`

export const Avatar = styled.div`
  img {
    border-radius: 1rem;
    height: 150px;
    width: 150px;
  }
`

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 0;
  width: 100%;
`

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
`

export const Name = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  p {
    font-size: 1.5rem;
  }
  a {
    display: flex;
    gap: 0.25rem;
    text-align: center;
    justify-content: center;
    font-size: 0.75rem;
  }
`

export const Description = styled.div`
  color: ${({ theme }) => theme['text-300']};
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
