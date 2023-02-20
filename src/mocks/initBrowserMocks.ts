export const initBrowserMocks = async () => {
  if (process.env.NODE_ENV === 'development-mocks') {
    const { worker } = await import('@/mocks/browser')
    worker.start()
  }
}
