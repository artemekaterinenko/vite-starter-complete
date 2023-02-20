import { Route } from '@tanstack/react-router'

import { queryClient } from '@/lib/queryClient'
import { rootRoute } from '@/routes'

import { fetchPostById } from '../api/fetchPostById'
import { fetchPosts } from '../api/fetchPosts'
import { Post } from './Post'
import { Posts } from './Posts'

const postsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'posts',
  onLoad: () =>
    queryClient.ensureQueryData({ queryKey: ['posts'], queryFn: fetchPosts }),
  component: Posts
})

const postRoute = new Route({
  getParentRoute: () => postsRoute,
  path: '$postId',
  onLoad: async ({ params: { postId } }) =>
    queryClient.ensureQueryData(['posts', postId], () => fetchPostById(postId)),
  component: Post
})

export { postRoute, postsRoute }
