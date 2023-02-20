import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RouterProvider } from '@tanstack/react-router'

import { queryClient } from '@/lib/queryClient'
import { router } from '@/routes'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools
        position='bottom-left'
        toggleButtonProps={{
          style: {
            marginLeft: '4rem',
            transform: `scale(.7)`,
            transformOrigin: 'bottom left'
          }
        }}
      />
    </QueryClientProvider>
  )
}

export { App }
