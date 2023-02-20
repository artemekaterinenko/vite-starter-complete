/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/display-name */

import { Button, ButtonProps } from '@mui/material'
import { Link as RouterLink, LinkFn } from '@tanstack/react-router'

export const Link: LinkFn = ((props: ButtonProps) => (
  <Button LinkComponent={RouterLink} {...props}>
    {props.children}
  </Button>
)) as any
