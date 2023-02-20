/* eslint-disable react-hooks/rules-of-hooks */
import { Button } from '@mui/material'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { Outlet, RootRoute } from '@tanstack/react-router'

import { useTranslation } from '@/hooks'
import { useLanguageStore } from '@/stores'

export const rootRoute = new RootRoute({
  component: () => {
    const { t } = useTranslation()
    const switchLanguage = useLanguageStore(state => state.switchLanguage)
    return (
      <Container>
        <Box sx={{ my: 10 }}>
          <Typography variant='h4' component='h1' gutterBottom>
            {t('starter')}
          </Typography>
          <Button onClick={switchLanguage}>Switch language</Button>
          <Outlet />
        </Box>
      </Container>
    )
  },
  errorComponent: () => 'Oh snap!'
})
