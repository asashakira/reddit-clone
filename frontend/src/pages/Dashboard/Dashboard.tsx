import React from 'react'

import {usePosts} from '@src/api/getPosts'
import {MainLayout} from '@src/components/MainLayout'
import type {Post} from '@src/types'

import styles from './Dashboard.css'

export const Dashboard: React.FC = () => {
  const {data: posts, isLoading} = usePosts()

  if (isLoading) {
    return <MainLayout>Loading...</MainLayout>
  }

  return (
    <MainLayout className={styles.root}>
      {posts?.map((post) => (
        <PostLink key={post.id} post={post} />
      ))}
    </MainLayout>
  )
}

type PostLinkProps = {
  post: Post
}

const PostLink: React.FC<PostLinkProps> = ({post}) => {
  const handlePostLinkClick = () => {
    window.open(`/post/${post.id}`, '_blank', 'noreferrer')
  }

  return (
    <div className={styles.postLink} onClick={handlePostLinkClick}>
      <div className={styles.votes}>votes: {post.votes}</div>
      <div className={styles.main}>
        <div className={styles.title}>{post.title}</div>
        <div className={styles.author}>{post.author}</div>
      </div>
      <div className={styles.comments}>comments: {post.numComments}</div>
    </div>
  )
}
