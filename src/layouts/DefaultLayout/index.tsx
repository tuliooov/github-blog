import { LayoutContainer } from './styles'
import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'

export function DefaultLayout() {
  return (
    <>
      <Header></Header>
      <LayoutContainer>
        <Outlet />
      </LayoutContainer>
    </>
  )
}
