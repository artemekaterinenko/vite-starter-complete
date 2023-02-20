import { Route } from '@tanstack/react-router'

import { Link } from '@/components/Elements'
import { rootRoute } from '@/routes/Root'

export const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => (
    <div className='p-2'>
      <h3>Welcome Home!</h3>
      <div>
        <Link to='/todos'>Todos</Link>
        <Link to='/posts'>Posts</Link>
      </div>
    </div>
  )
})
