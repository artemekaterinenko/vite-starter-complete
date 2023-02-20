import { useQuery } from '@tanstack/react-query'
import { useParams } from '@tanstack/react-router'

import { fetchPostById } from '../api/fetchPostById'
import { postRoute } from '.'

export function Post() {
  const { postId } = useParams({ from: postRoute.id })
  const postQuery = useQuery(['posts', postId], () => fetchPostById(postId), {
    enabled: !!postId
  })

  return (
    <div className='space-y-2'>
      <h4 className='text-xl font-bold underline'>{postQuery.data?.title}</h4>
      <div className='text-sm'>{postQuery.data?.body}</div>
    </div>
  )
}
