import React, { PropsWithChildren } from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { useTheme } from '../theme'

export const TableHeader = (props: PropsWithChildren) => {
  const theme = useTheme()
  return (
    <Box>
      <Stack
        direction="row"
        spacing={1.25}
        justifyContent="space-between"
        alignItems="center"
        sx={{
          p: 1.5,
          width: '100%',
          borderRadius: 2,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          borderLeftWidth: '1px',
          borderTopWidth: '1px',
          borderRightWidth: '1px',
          borderBottomWidth: '0px',
          borderColor: 'border.main',
          borderStyle: 'solid',
        }}
      >
        {props.children}
      </Stack>
    </Box>
  )
}
