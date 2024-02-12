import {Navigate, Route, Routes} from 'react-router-dom'

import {Post} from './Post'
import {Posts} from './Posts'

export const PostsRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Posts />} />
      <Route path="post/:postId" element={<Post />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  )
}
