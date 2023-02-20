import { Route } from '@tanstack/react-router'

import { rootRoute } from '@/routes'

import { Todos } from './Todos'

export const todosRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'todos',
  component: Todos
})
