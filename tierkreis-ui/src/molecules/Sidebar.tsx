import React, { Component, ComponentProps } from 'react'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'

const DefinitionPair = (props: ComponentProps<typeof Box>) => {
  return (
    <Box
      {...props}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingX: 0,
        paddingY: 0.5,
        ...props.sx,
      }}
    />
  )
}

const Item = (props: ComponentProps<typeof Typography>) => {
  return <Typography {...props} />
}
const Left = (props: ComponentProps<typeof Typography>) => {
  return (
    <Item variant="body1" color="text.secondary" {...props}>
      {props.children}
    </Item>
  )
}
const Right = (props: ComponentProps<typeof Typography>) => {
  return (
    <Item variant="body1" sx={{ color: 'text.primary', pl: 2, ...props.sx }} {...props}>
      {props.children}
    </Item>
  )
}
DefinitionPair.Left = Left
DefinitionPair.Right = Right

const Tile = (props: { children?: React.ReactNode }) => {
  return <Box sx={{ flexGrow: 1, whiteSpace: 'normal', minWidth: '16rem' }}>{props.children}</Box>
}

export const Sidebar = (
  props: {
    direction?: 'row' | 'column'
    divided?: boolean
  } & ComponentProps<typeof Stack>
) => {
  const direction = props.direction || 'column'
  return (
    <Stack
      direction={direction}
      divider={
        props.divided ? (
          <Divider orientation={direction === 'column' ? 'horizontal' : 'vertical'} flexItem />
        ) : null
      }
      spacing={3}
      alignItems={'stretch'}
      {...props}
      sx={{
        whiteSpace: 'nowrap',
        p: 3,
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: 'border.main',
        borderRadius: 1,
        flexWrap: 'nowrap',
        width: 'fit-content',
        ...props.sx,
      }}
    />
  )
}

Sidebar.DefinitionPair = DefinitionPair
Sidebar.Tile = Tile
