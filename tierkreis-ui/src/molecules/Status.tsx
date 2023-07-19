import Circle from '@mui/icons-material/Circle'
import Box from '@mui/material/Box'
import React from 'react'
import { colors } from '../utils/constants'
import { PaletteColor } from '@mui/material/styles'

type Colors = (typeof colors)[number]
export const Status = (props: {
  children: React.ReactNode
  color?: Colors
  customColor?: PaletteColor['main']
  pulse?: boolean
}) => {
  const colorMap: { [k in Colors]: string } = {
    default: 'text.secondary',
    success: 'success.main',
    error: 'error.main',
    info: 'text.secondary',
    warning: 'warning.main',
    primary: 'primary.main',
  }

  const color =
    props.customColor ||
    (props.color ? colorMap[props.color] : colorMap.default)
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        '&:hover': {
          cursor: 'default',
        },
        width: 'min-content',
        whiteSpace: 'nowrap',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mr: 0.25,
        }}
      >
        <Circle
          sx={{
            position: 'absolute',
            color,
            height: 10,
            width: 10,
            mr: 0.5,
            my: 0.75,
          }}
        />
        <Circle
          sx={{
            color,
            height: 10,
            width: 10,
            mr: 0.5,
            my: 0.75,
          }}
          className={props.pulse ? `animate-ping` : ''}
        />
      </Box>
      {props.children}
    </Box>
  )
}
