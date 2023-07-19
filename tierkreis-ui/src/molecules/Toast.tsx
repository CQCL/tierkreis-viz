import Alert, { AlertProps } from '@mui/material/Alert'
import Snackbar, { SnackbarProps } from '@mui/material/Snackbar'
import React from 'react'

export const Toast = (
  props: Omit<Omit<SnackbarProps, 'children'>, 'message'> & {
    alertProps: AlertProps
    children: React.ReactNode
  }
) => {
  return (
    <Snackbar {...props}>
      <Alert {...props.alertProps} className={'Qui-ToastAlert'}>
        {props.children}
      </Alert>
    </Snackbar>
  )
}
