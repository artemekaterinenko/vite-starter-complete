import { ReactRouter } from '@tanstack/react-router'

import { postRoute, postsRoute } from '@/features/posts'
import { todosRoute } from '@/features/todos'
import { indexRoute } from '@/routes/IndexRoute'
import { rootRoute } from '@/routes/Root'

const routeTree = rootRoute.addChildren([
  indexRoute,
  todosRoute,
  postsRoute.addChildren([postRoute])
])

const router = new ReactRouter({
  routeTree
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export { rootRoute, router }
