import {useQuery} from '@tanstack/react-query'

import type {Post} from '../types'

const posts = [
  {
    id: 1,
    author: 'user1',
    title: 'Post 1',
    body: 'This is the body of post 1',
    votes: 5,
    numComments: 3,
  },
  {
    id: 2,
    author: 'user2',
    title: 'Post 2',
    body: 'This is the body of post 2',
    votes: -20,
    numComments: 5,
  },
]

export function getPost(id: number): Promise<Post> {
  const post = posts.find((p) => p.id === id)
  return new Promise<Post>((resolve, reject) => {
    if (post) resolve(post)
    else reject(new Error('Post not found'))
  })
}

export function getPosts(): Promise<Post[]> {
  return new Promise<Post[]>((resolve) => resolve(posts))
}

export function usePost(id: number) {
  return useQuery({
    queryKey: ['posts'],
    queryFn: () => getPost(id),
  })
}

export function usePosts() {
  return useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  })
}
