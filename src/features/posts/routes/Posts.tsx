import { useQuery } from '@tanstack/react-query'
import { Link, Outlet } from '@tanstack/react-router'

import { fetchPosts } from '../api/fetchPosts'
import { postRoute } from '.'

export function Posts() {
  const postsQuery = useQuery(['posts'], fetchPosts)

  return (
    <div className='flex gap-2 p-2'>
      <ul className='list-disc pl-4'>
        {postsQuery.data?.map(post => (
          <li key={post.id} className='whitespace-nowrap'>
            <Link
              to={postRoute.fullPath}
              params={{
                postId: post.id
              }}
              className='block py-1 text-blue-800 hover:text-blue-600'
              activeProps={{ className: 'text-black font-bold' }}
            >
              <div>{post.title.substring(0, 20)}</div>
            </Link>
          </li>
        ))}
      </ul>
      <hr />
      <Outlet />
    </div>
  )
}
