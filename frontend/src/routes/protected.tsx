import {Suspense} from 'react'
import {Navigate, Outlet} from 'react-router-dom'

import {lazyImport} from '@src/utils/lazyImport'

const {PostsRoutes} = lazyImport(() => import('@src/features/posts'), 'PostsRoutes')

const App = () => {
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </>
  )
}

export const protectedRoutes = [
  {
    path: '/*',
    element: <App />,
    children: [
      {path: '*', element: <PostsRoutes />},
      {path: '*', element: <Navigate to="." />},
    ],
  },
]
