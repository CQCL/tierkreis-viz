import ComputerOutlined from '@mui/icons-material/ComputerOutlined'
import DarkModeOutlined from '@mui/icons-material/DarkModeOutlined'
import LightModeOutlined from '@mui/icons-material/LightModeOutlined'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import Typography from '@mui/material/Typography'
import React from 'react'
import { ThemeProvider, useMode } from '../theme'
import { capitalize } from './capitalize'

export const StorybookThemeProvider = (props: {
  children: React.ReactNode | ((props: ReturnType<typeof useMode>) => JSX.Element)
  background?: 'paper' | 'default'
}) => {
  const themeProps = useMode()
  const { background = 'paper' } = props

  return (
    <ThemeProvider {...themeProps}>
      <Paper sx={{ bgcolor: `background.${background}`, overflowY: 'auto', pb: 8 }}>
        <Stack sx={{ px: 2, py: 1.5 }}>
          <Typography variant="body2" display="block" sx={{ mb: 0.75 }}>
            Theme
          </Typography>
          <ToggleButtonGroup
            value={themeProps.mode}
            exclusive
            size="small"
            aria-label="dark mode options"
            sx={{ mb: 4 }}
          >
            {(
              [
                { value: 'dark', icon: LightModeOutlined },
                { value: 'light', icon: DarkModeOutlined },
                { value: 'system', icon: ComputerOutlined },
              ] as const
            ).map(({ value, icon: Icon }) => (
              <ToggleButton
                value={value}
                aria-label={value}
                onClick={() => {
                  themeProps.setMode(value)
                }}
                key={value}
              >
                <Icon fontSize="small" sx={{ mr: 0.5 }} />
                {capitalize(value)}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
          {typeof props.children === 'function' ? props.children(themeProps) : props.children}
        </Stack>
      </Paper>
    </ThemeProvider>
  )
}
