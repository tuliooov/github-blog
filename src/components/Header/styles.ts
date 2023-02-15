import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  background: ${(props) => props.theme['background-header']};
`

export const Effects = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: space-between;
  > div {
    min-height: 18.5rem;
    display: flex;
    align-items: center;
  }
  > img {
    margin-top: 4rem;
  }
`
