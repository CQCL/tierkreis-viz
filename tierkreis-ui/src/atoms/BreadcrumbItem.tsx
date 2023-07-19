import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import React, { ComponentProps, PropsWithChildren } from 'react'
import { useTheme } from '../theme'

export const BreadcrumbItem = (
  props: PropsWithChildren<{ icon?: any }> & ComponentProps<typeof Link>
) => {
  const theme = useTheme()
  return (
    <Link
      underline="hover"
      sx={{
        display: 'flex',
        alignItems: 'center',

        fontWeight: 500,
        letterSpacing: '0.01em',
      }}
      {...props}
    >
      {props.icon && (
        <props.icon sx={{ mr: 0.5 }} fontSize="inherit"></props.icon>
      )}
      <Box
        component="span"
        sx={{
          display: 'inline-block',
          color: theme.currentTheme === 'light' ? 'grey.500' : 'grey.400',
        }}
      >
        {props.children}
      </Box>
    </Link>
  )
}
