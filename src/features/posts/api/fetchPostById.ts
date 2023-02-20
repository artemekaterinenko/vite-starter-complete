import { PostType } from '@/features/posts'

async function fetchPostById(postId: string): Promise<PostType> {
  console.log(`Fetching post with id ${postId}...`)
  await new Promise(r => {
    setTimeout(r, 500)
  })
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  )
  const data = await response.json()
  return data
}

export { fetchPostById }
