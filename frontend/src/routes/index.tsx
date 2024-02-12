import React from 'react'
import {Route, Routes} from 'react-router-dom'

import {Dashboard} from '@src/pages/Dashboard'
import {Post} from '@src/pages/Post'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/post/:postId" element={<Post />} />
    </Routes>
  )
}
