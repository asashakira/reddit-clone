import React from 'react'
import {useParams} from 'react-router-dom'

import {MainLayout} from '@src/components/MainLayout'

import {usePost} from '../../api/getPosts'

export const Post: React.FC = () => {
  const {postId} = useParams()
  const {data: post, isLoading} = usePost(Number(postId))

  if (isLoading) {
    return <MainLayout>Loading...</MainLayout>
  }

  return (
    <MainLayout>
      <div>{post?.title}</div>
      <div>{post?.body}</div>
    </MainLayout>
  )
}
