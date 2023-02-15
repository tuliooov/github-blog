import styled from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  gap: 1rem;
  background: ${(props) => props.theme['backgorund-card']};
  position: relative;
  top: -4rem;
  padding: 2rem;
  border-radius: 0.85rem;
`

export const Avatar = styled.div`
  img {
    border-radius: 1rem;
  }
`

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 0;
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
`

export const Description = styled.div``

export const Details = styled.div`
  display: flex;
  gap: 1rem;
`
