import Check from '@mui/icons-material/Check'
import Remove from '@mui/icons-material/Remove'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Stack from '@mui/material/Stack'
import StyledEngineProvider from '@mui/material/StyledEngineProvider'
import Typography from '@mui/material/Typography'
import {
  Theme as DefaultTheme,
  ThemeProvider as DefaultThemeProvider,
  createTheme,
  darken,
  lighten,
  useTheme as useThemeDefault,
} from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import type {} from '@mui/x-data-grid/themeAugmentation'
import type {} from '@mui/x-date-pickers/themeAugmentation'
import React from 'react'
import { designTokens } from './designTokens'

declare module '@mui/material/styles' {
  interface TypeBackground {
    emph: TypeBackground['default']
  }

  interface PaletteColor {
    accent?: PaletteColor['main']
    faded?: PaletteColor['main']
  }

  interface Palette {
    border: PaletteColor
    apps: {
      secondary: PaletteColor
      pink: PaletteColor
      green: PaletteColor
    }
  }

  interface PaletteOptions {
    border?: Partial<PaletteColor>
    apps?: {
      secondary?: Partial<PaletteColor>
      pink?: Partial<PaletteColor>
      green?: Partial<PaletteColor>
    }
  }
}

export type Theme = 'light' | 'dark'
export type Mode = Theme | 'system'
export type SetMode = (mode: Mode) => void

export const createCustomTheme = (props: { shadowRootElement?: Element; theme: Theme }) => {
  const grey = designTokens.neutral
  const apps = {
    secondary: designTokens.secondary,
    pink: designTokens.pink,
    green: designTokens.green,
  }

  const palette =
    props.theme === 'light'
      ? {
          grey,
          apps,
          mode: props.theme,
          primary: {
            main: designTokens.primaryLight.main,
            light: designTokens.primaryLight.light,
            dark: darken(designTokens.primaryLight.main, 0.25),
            faded: designTokens.primaryLight.light,
            accent: darken(designTokens.primaryLight.main, 0.25),
          },
          error: {
            main: designTokens.error.light,
            light: designTokens.error.light,
            dark: designTokens.error.dark,
            faded: designTokens.error.dark,
            accent: darken(designTokens.error.light, 0.25),
          },
          success: {
            main: designTokens.success.light,
            light: designTokens.success.light,
            dark: designTokens.success.dark,
            faded: designTokens.success.dark,
            accent: darken(designTokens.success.light, 0.25),
          },
          warning: {
            main: designTokens.warning.light,
            light: designTokens.warning.light,
            dark: designTokens.warning.dark,
            faded: designTokens.warning.dark,
            accent: darken(designTokens.warning.light, 0.15),
          },
          info: {
            main: grey[600],
            light: grey[600],
            dark: grey[400],
            faded: grey[400],
            accent: grey[700],
          },
          background: {
            paper: '#ffffff',
            default: grey[50],
            emph: grey[200],
          },
          common: {
            black: '#000000',
            white: '#ffffff',
          },
          divider: grey[300],
          border: {
            main: grey[300],
            light: grey[200],
          },
          text: {
            primary: grey[800],
            secondary: grey[500],
            disabled: grey[400],
          },
        }
      : {
          grey,
          apps,
          mode: props.theme,
          primary: {
            main: designTokens.primaryDark.main,
            light: lighten(designTokens.primaryDark.main, 0.35),
            dark: designTokens.primaryDark.light,
            faded: designTokens.primaryDark.light,
            accent: lighten(designTokens.primaryDark.main, 0.35),
          },
          error: {
            main: designTokens.error.dark,
            light: designTokens.error.light,
            dark: designTokens.error.dark,
            faded: designTokens.error.light,
            accent: lighten(designTokens.error.dark, 0.35),
          },
          success: {
            main: designTokens.success.dark,
            light: designTokens.success.light,
            dark: designTokens.success.dark,
            faded: designTokens.success.light,
            accent: lighten(designTokens.success.dark, 0.35),
          },
          warning: {
            main: designTokens.warning.dark,
            light: designTokens.warning.light,
            dark: designTokens.warning.dark,
            faded: designTokens.warning.light,
            accent: lighten(designTokens.warning.dark, 0.35),
          },
          info: {
            main: grey[400],
            light: grey[600],
            dark: grey[400],
            faded: grey[600],
            accent: grey[300],
          },
          background: {
            paper: grey[800],
            default: grey[850],
            emph: grey[700],
          },
          common: {
            black: '#000000',
            white: '#ffffff',
          },
          divider: grey[600],
          border: {
            main: grey[600],
            light: grey[600],
          },
          text: {
            primary: grey[50],
            secondary: grey[300],
            disabled: grey[500],
          },
        }

  const typography = {
    fontFamily: "'Inter', 'Helvetica', 'Arial', sans-serif",
    allVariants: {
      color: palette.text.primary,
      fontWeight: 500,
    },
    h1: {
      fontSize: '2.5rem',
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: '2.125rem',
      letterSpacing: '-0.03em',
    },
    h3: {
      fontSize: '1.75rem',
      letterSpacing: '-0.02em',
    },
    h4: {
      fontSize: '1.5rem',
      letterSpacing: '-0.025em',
    },
    h5: {
      fontSize: '1.25rem',
      letterSpacing: '-0.02em',
    },
    h6: {
      fontSize: '1.125rem',
      letterSpacing: '-0.02em',
    },
    subtitle1: {
      fontSize: '1rem',
      letterSpacing: '-0.015em',
    },
    subtitle2: {
      fontSize: '0.875rem',
      letterSpacing: '-0.01em',
    },
    button: {
      fontSize: '0.875rem',
      letterSpacing: '-0.025em',
      textTransform: 'unset',
    },

    body1: {
      fontSize: '0.875rem',
      letterSpacing: '-0.005em',
    },
    body2: {
      fontSize: '0.75rem',
      letterSpacing: '-0.005em',
    },
    caption: {
      fontSize: '0.6875rem',
      letterSpacing: '0.05em',
    },
  } as const
  const borderRadius = '0.25rem'
  const menuShadow =
    props.theme === 'light'
      ? '0.25rem 0.25rem 0.25rem ' + palette.grey[200]
      : '0.25rem 0.25rem 0.25rem ' + palette.grey[900]
  const tooltipStyles = {
    color: palette.text.primary,
    backgroundColor: palette.background.paper,
    border: '1px solid',
    borderColor: palette.border.main,
    paddingRight: '0.625rem',
    paddingLeft: '0.625rem',
    paddingTop: '0.375rem',
    paddingBottom: '0.375rem',
    ...typography.body2,
    fontWeight: 500,
  }

  const components: NonNullable<Parameters<typeof createTheme>[0]>['components'] = {
    MuiButton: {
      styleOverrides: {
        root: {
          '.MuiSvgIcon-root': {
            color: 'inherit',
            marginRight: '-0.3em',
          },
          fontWeight: 600,
          borderRadius: borderRadius,
          whiteSpace: 'nowrap',
          fontSize: '0.875rem',
          letterSpacing: '-2.5%',
          height: '2.125rem',
          paddingRight: '1.25rem',
          paddingLeft: '1.25rem',
        },
        contained: ({ ownerState }) => {
          return {
            ':hover': {
              background:
                !ownerState.color ||
                ownerState.color === 'inherit' ||
                ownerState.color === 'secondary'
                  ? palette.primary.accent
                  : palette[ownerState.color].accent,
            },
          }
        },
        outlined: {
          background: palette.background.paper,
          borderColor: palette.border.main,
          color: palette.text.primary,
          ':hover': {
            background: palette.background.emph,
            borderColor: palette.border.main,
          },
        },
        text: {
          color: palette.text.primary,
        },
      },
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          borderRadius: borderRadius,
        },
      },
      defaultProps: {
        size: 'small',
      },
    },
    MuiTypography: {
      defaultProps: {
        variant: 'body1',
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        sizeSmall: {
          paddingRight: '0.75rem',
          paddingLeft: '0.75rem',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius,
          width: '1rem',
          height: '1rem',
          boxSizing: 'content-box',
          // border: '1px solid',
          color: palette.text.primary,
          borderColor: palette.border.main,
          background: 'transparent',
          ':disabled': {
            cursor: 'not-allowed',
            color: props.theme === 'dark' ? palette.grey[700] : palette.grey[300],
          },
        },

        // colorInherit: {},

        colorPrimary: {
          background: palette.primary.main,
          borderColor: palette.primary.main,
          color: palette.background.default,
          ':hover': {
            background: palette.primary.accent,
          },
          ':disabled': {
            borderColor: palette.border.main,
            cursor: 'not-allowed',
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          height: '3px',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        labelIcon: {
          color: props.theme === 'dark' ? palette.grey[300] : palette.grey[600],
        },

        root: {
          minHeight: 48,
          height: 48,
          fontSize: '0.875rem',
          letterSpacing: '0em',
          border: 'none',
          fontWeight: 500,
        },
      },
      defaultProps: {
        iconPosition: 'start',
      },
    },

    MuiPopover: {
      defaultProps: props?.shadowRootElement
        ? {
            container: props.shadowRootElement,
          }
        : {},
      styleOverrides: {
        paper: {
          borderColor: palette.border.main,
          boxShadow: menuShadow,
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        list: {
          pb: 1.5,
          pt: 2,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          minHeight: '1rem',
          color: palette.text.secondary,
          fontWeight: 500,
          '&.Mui-selected': {
            background: palette.primary.main,
            color: palette.background.paper,
            '& * ': {
              color: palette.background.paper,
            },
            ':hover': {
              background: palette.primary.accent,
            },
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'unset',
          borderRadius: borderRadius,
          border: `1px solid ${palette.border.main}`,
          background: palette.background.paper,
          overflow: 'hidden',
        },
      },
      defaultProps: {
        elevation: 0,
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: palette.background.default,
          boxShadow: 'none',
          borderBottom: `1px solid`,
          borderColor: palette.border.main,
        },
      },
    },
    MuiPopper: {
      defaultProps: props?.shadowRootElement
        ? {
            container: props.shadowRootElement,
          }
        : {},
    },
    MuiLink: {
      defaultProps: {
        underline: 'hover',
      },
    },
    MuiAlert: {
      defaultProps: {
        variant: 'outlined',
      },
      styleOverrides: {
        root: {
          alignItems: 'center',
          width: 'fit-content',
          paddingRight: '1.5rem',
        },
        standard: {
          backgroundColor: palette.background.paper,
          border: '1px solid',
          borderColor: palette.border.main,
          color: palette.text.primary,
        },
        filled: {
          border: 'none',
        },
        outlined: {
          borderColor: palette.border.main,
          backgroundColor: palette.background.paper,
          color: palette.text.primary,
        },
      },
    },
    MuiSnackbar: {
      styleOverrides: {
        root: {
          '& > .Qui-ToastAlert': {
            boxShadow: menuShadow,
            borderRadius: borderRadius,
          },
        },
      },
    },
    MuiSnackbarContent: {
      styleOverrides: {
        root: {
          background: palette.background.paper,
          color: palette.text.primary,
          boxShadow: menuShadow,
          borderRadius: borderRadius,
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          color: palette.common.white,
          textAlign: 'center',
          width: 28,
          height: 28,
          fontSize: '1rem',
          letterSpacing: '-0.03em',
          fontWeight: 500,
        },
      },
    },
    MuiAvatarGroup: {
      styleOverrides: {
        avatar: {
          borderColor: palette.background.paper,
        },
      },
    },

    MuiBreadcrumbs: {
      styleOverrides: {
        root: {
          fontSize: '0.75rem',
          letterSpacing: '1%',
          color: `${palette.text.secondary} !important`,
          '.MuiBreadcrumbs-separator': {
            color: palette.text.disabled,
          },
        },
        li: {
          a: {
            color: palette.text.secondary,
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          '& .MuiFormControlLabel-label ': {
            marginRight: '0.5em',
            marginLeft: '-0.125em',
          },
          '& .MuiFormControlLabel-asterisk': {
            color: palette.error.main,
          },
        },
      },
    },

    MuiSwitch: {
      defaultProps: {
        size: 'small',
      },
      styleOverrides: {
        root: {
          '.MuiSwitch-thumb': {
            'box-shadow': 'none',
            color: palette.text.secondary,
          },
          '.Mui-checked .MuiSwitch-thumb': {
            color: palette.primary.main,
          },
          '.Mui-disabled .MuiSwitch-thumb': {
            color: palette.border.main,
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          '&.MuiOutlinedInput-input.MuiInputBase-input': {
            paddingTop: '0.447rem',
            paddingBottom: ' 0.447rem',
            // maxHeight: '2rem',
          },
        },
        root: {
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: palette.border.main,
          },
          // maxHeight: '2rem',
          background: palette.background.paper,
          borderRadius: `${borderRadius} !important`,
          borderColor: palette.border.main,
          '&.Mui-disabled': {
            background: props.theme === 'dark' ? palette.grey[800] : palette.background.default,
            border: 'none !important',
            cursor: 'not-allowed',
            opacity: 0.4,
          },

          '&.Mui-disabled > .MuiInputBase-input': {
            cursor: 'not-allowed',
          },
        },

        adornedStart: {
          '& .MuiInputAdornment-root': {
            color: palette.text.disabled,
            marginRight: '0.25rem',
          },
          '& .MuiInputAdornment-root .MuiSvgIcon-root': {
            height: '1.2rem',
          },
          paddingLeft: '0.5rem !important',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: props.theme === 'dark' ? palette.grey[400] : palette.grey[500],
          zIndex: 1,
          fontSize: '0.875rem',
          top: '-0.55rem',
          '&.MuiInputLabel-shrink': { top: 0 },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: props.theme === 'dark' ? palette.grey[400] : palette.grey[500],
          zIndex: 1,
          fontSize: '0.875rem',
          top: '-0.55rem',
          '&.MuiFormLabel-shrink': { top: 0 },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          border: 'none',
        },
      },
      defaultProps: {
        icon: (
          <Box
            sx={{
              width: '1rem',
              height: '1rem',
              borderRadius: '0.175rem',
              border: '1.5px solid',
            }}
          />
        ),
        checkedIcon: (
          <Box
            sx={{
              width: '1rem',
              height: '1rem',
              borderRadius: '0.25rem',
              border: '1.5px solid',
              display: 'grid',
              placeItems: 'center',
              background: 'inherit',
              borderColor: 'inherit',
            }}
          >
            <Check
              fontSize="small"
              sx={{
                width: '100%',
                height: '100%',

                color: 'inherit',
                background: 'inherit',
                borderColor: 'inherit',
              }}
            ></Check>
          </Box>
        ),
        indeterminateIcon: (
          <Box
            sx={{
              width: '1rem',
              height: '1rem',
              borderRadius: '0.25rem',
              border: '1.5px solid',

              display: 'grid',
              placeItems: 'center',
              background: 'inherit',
              borderColor: 'inherit',
            }}
          >
            <Remove
              fontSize="small"
              sx={{
                width: '100%',
                height: '100%',

                color: 'inherit',
                '&.Mui-disabled': {
                  color: '#ff0000 !important',
                },
              }}
            />
          </Box>
        ),
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          height: '0.5em',
        },
        sizeSmall: {
          height: 2,
        },
        track: {
          border: 'none',
        },
        thumb: {
          '&:before': {
            boxShadow: '0px 0px 1px 0px rgba(0,0,0,0.25)',
          },
        },
        rail: {
          opacity: 0.5,
        },
        valueLabel: {
          ...tooltipStyles,
          borderRadius: borderRadius,
          '&:before': {
            border: 'inherit',
          },
          '&:after': {
            content: '""',
            position: 'absolute',
            width: '12px',
            height: '6px',
            background: 'inherit',
            bottom: 0,
            left: 'calc(50% - 6px)',
          },
        },
      },
    },

    MuiSvgIcon: {
      styleOverrides: {
        fontSizeLarge: {
          width: '1.75rem',
          height: '1.75rem',
        },
        fontSizeSmall: {
          width: '1.25rem',
          height: '1.25rem',
        },
        fontSizeMedium: {
          width: '1.35rem',
          height: '1.35rem',
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          '& .Mui-disabled': {
            background: 'transparent',
            cursor: 'not-allowed',
            minHeight: 'auto',
          },
          '& .MuiAutocomplete-option': {
            minHeight: 'auto',
          },
        },
        inputRoot: {
          alignItems: 'center',
          paddingTop: 0,
          paddingBottom: 0,
        },
        endAdornment: {
          top: 'unset',
        },
        popper: {
          borderRadius,
          borderColor: palette.border.main,
          boxShadow: menuShadow,
        },
        listbox: {
          color: 'green',
          '& > .MuiAutocomplete-option': {
            minHeight: 'auto',
            color: palette.text.primary,
            '&[aria-selected="true"]': {
              color: palette.background.default,
              backgroundColor: palette.primary.main,
              '&.Mui-focused': {
                backgroundColor: palette.primary.accent,
              },
            },
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          paddingTop: 2,
          paddingBottom: 2,
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          '&:focus': {},
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          border: '1px solid',
          borderColor: palette.border.main,
          padding: '1.5rem',
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          ...typography.h4,
          fontWeight: 600,
          padding: 0,
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: '0 0 1rem 0',
          marginTop: '0.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        },
      },
    },
    MuiDialogContentText: {
      styleOverrides: {
        root: {
          ...typography.body1,
          marginBottom: '0.5rem',
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: 0,
          marginTop: '0.5rem',
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: tooltipStyles,
        arrow: {
          color: palette.background.paper,
          ':before': {
            border: '1px solid',
            borderColor: palette.border.main,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: (x) => {
          return {
            ...typography.body2,
            fontWeight: 500,
            height: '1.25rem',
            '&.MuiChip-colorDefault .MuiChip-label': {
              color: props.theme === 'dark' ? palette.grey[200] : palette.grey[600],
            },
          }
        },
        deleteIcon: { height: '1rem', width: '1rem' },
        filled: {
          color: props.theme === 'dark' ? palette.grey[900] : palette.grey[50],
        },
      },
      defaultProps: {
        size: 'small',
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          borderColor: palette.border.main,
          borderRadius,
          overflow: 'hidden',
          // '.MuiSelect-select.MuiTablePagination-select': {
          //   border: '1px solid',
          //   borderColor: palette.border.main,
          //   borderRadius,
          // },
          filter: ': drop-shadow(0 1px 1px rgb(0 0 0 / 0.05))',
        },
        cell: {
          fontSize: '0.875rem',
          letterSpacing: '-0.5%',
          fontWeight: 500,
          color: palette.text.secondary,
          ':focus': {
            outline: 'inherit',
          },
          paddingLeft: '1.125rem',
          paddingRight: '1.125rem',
        },
        autoHeight: {
          '& .MuiDataGrid-row--lastVisible .MuiDataGrid-cell': {
            borderColor: palette.border.main,
          },
        },

        row: {
          background: palette.background.paper,
          ':hover': {
            backgroundColor:
              props.theme === 'dark'
                ? lighten(palette.background.paper, 0.1)
                : darken(palette.background.paper, 0.05),
          },
        },
        withBorderColor: {
          borderColor: palette.background.emph,
        },
        iconSeparator: {
          display: 'none',
        },
        columnHeader: {
          fontSize: '0.875rem',
          letterSpacing: '-0.5%',
          fontWeight: 600,
          paddingLeft: '1.125rem',
          paddingRight: '1.125rem',
          color: palette.text.primary,
          minHeight: '3rem',
          backgroundColor: props.theme === 'dark' ? palette.grey[750] : palette.grey[50],
          ':focus': {
            outline: 'inherit',
          },
          '&.MuiDataGrid-columnHeaderCheckbox': {
            paddingLeft: '0rem',
            paddingRight: '0rem',
          },
          ':last-child .MuiDataGrid-columnSeparator': {
            display: 'none',
          },
        },

        footerContainer: {
          border: 'none',
          backgroundColor: props.theme === 'dark' ? palette.grey[750] : palette.grey[50],
        },
      },
      defaultProps: {
        columnHeaderHeight: 48,
        rowHeight: 44,
        components: {
          NoResultsOverlay: () => {
            return (
              <Stack sx={{ width: '100%', height: '100%' }}>
                <Typography>No Results Found</Typography>
              </Stack>
            )
          },
        },
      },
    },
    MuiPickersDay: {
      styleOverrides: {
        root: {
          outline: '0px solid',
          border: '1px solid' + palette.background.paper,
          ':not(.Mui-selected)': {
            border: '2px solid' + palette.background.paper,
          },
          ...typography.body2,
        },

        today: {
          outline: '2px solid' + palette.text.secondary,
        },
      },
    },
  } as const

  return createTheme({
    typography,
    components,
    palette: {
      ...palette,
      contrastThreshold: 4.5,
    },
    spacing: (factor: number) => `${0.5 * factor}rem`,
  })
}

const id = '#kflahie734'
export type CustomTheme = DefaultTheme & {
  palette: {
    grey: (typeof designTokens)['neutral']
  }
} & {
  id: string
  mode?: Mode
  currentTheme: Theme
  setMode?: SetMode
}
const useThemeCustom = () => {
  const theme = useThemeDefault() as CustomTheme
  if (theme.id !== id) {
    throw new Error(
      'This useTheme hook should be used with its associated parent context provider. You are likely not using the correct parent provider.'
    )
  }
  return theme
}

const localStorageKey = 'theme-mode'
export const useMode = () => {
  const [mode, _setMode] = React.useState<Mode>('system')
  const setMode = React.useCallback((newMode: Mode) => {
    _setMode(newMode)
    localStorage.setItem(localStorageKey, JSON.stringify(newMode))
  }, [])
  React.useEffect(() => {
    const syncModeFromLocalStorage = () => {
      const storedModeUnparsed = window.localStorage.getItem(localStorageKey)
      if (storedModeUnparsed !== null) {
        setMode(JSON.parse(storedModeUnparsed))
      }
    }
    syncModeFromLocalStorage()
    window.onstorage = syncModeFromLocalStorage
  }, [])
  const systemTheme: Theme = useMediaQuery('(prefers-color-scheme: dark)') ? 'dark' : 'light'

  const currentTheme: Theme = mode === 'system' ? systemTheme : mode

  return { mode, setMode, currentTheme }
}

const ThemeCustomization = ({
  mode = 'system',
  setMode = undefined,
  shadowRootElement,
  currentTheme,
  children,
}: {
  children: React.ReactNode
} & Pick<Parameters<typeof createCustomTheme>[0], 'shadowRootElement'> & {
    mode?: Mode
    setMode?: SetMode
    currentTheme: Theme
  }) => {
  return (
    <StyledEngineProvider>
      <DefaultThemeProvider
        theme={{
          ...createCustomTheme({
            shadowRootElement: shadowRootElement,
            theme: currentTheme,
          }),
          mode,
          setMode,
          currentTheme,
          id,
        }}
      >
        <CssBaseline />
        {children}
      </DefaultThemeProvider>
    </StyledEngineProvider>
  )
}

export const useTheme = useThemeCustom
export const ThemeProvider = ThemeCustomization
