import {useRoutes} from 'react-router-dom'

import {protectedRoutes} from './protected'
import {publicRoutes} from './public'

export const AppRoutes = () => {
  const commonRoutes = [{}]

  // const routes = auth.user ? protectedRoutes : publicRoutes
  const routes = protectedRoutes

  const element = useRoutes([...routes, ...commonRoutes])

  return <>{element}</>
}
