import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { HomePage } from './pages/Home'
import { IssuePage } from './pages/Issue'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/issue/:number'} element={<IssuePage />} />
      </Route>
    </Routes>
  )
}
