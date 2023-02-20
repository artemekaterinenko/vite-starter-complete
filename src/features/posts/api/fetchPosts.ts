import { PostType } from '@/features/posts'

async function fetchPosts(): Promise<PostType[]> {
  console.log('Fetching posts...')
  await new Promise(r => {
    setTimeout(r, 500)
  })
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await response.json()
  return posts.slice(0, 10)
}

export { fetchPosts }
