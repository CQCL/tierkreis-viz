import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import Done from '@mui/icons-material/Done'
import Tooltip from '@mui/material/Tooltip'
import * as React from 'react'
import { useClipboard } from './useClipboard'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'

const CopyContext = React.createContext<
  ReturnType<typeof useClipboard> | undefined
>(undefined)

type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>

const useCopyContext = () => {
  const clipboard = React.useContext(CopyContext)
  if (clipboard === undefined) {
    throw new Error(
      'Clipboard sub components must be used within the Clipboard parent component.'
    )
  }
  return clipboard
}

export const Clipboard = (
  props: React.PropsWithChildren<{ content: string }>
) => {
  const copyContextValue = useClipboard(props.content)
  return (
    <CopyContext.Provider value={copyContextValue}>
      <Stack direction="row" spacing={0} alignItems="center">
        {props.children}
      </Stack>
    </CopyContext.Provider>
  )
}

const CopyContent = (props: React.ComponentProps<typeof Box>) => {
  const clipboard = useCopyContext()
  return <Box {...props}>{props.children || clipboard.text}</Box>
}

const CopyTooltip = (
  props: Optional<React.ComponentProps<typeof Tooltip>, 'title'>
) => {
  const clipboard = useCopyContext()
  return (
    <Tooltip
      open={clipboard.hasCopied}
      placement={'top'}
      arrow
      {...props}
      title={props.title || 'Copied to clipboard!'}
    ></Tooltip>
  )
}

const CopyButton = (props: React.ComponentProps<typeof IconButton>) => {
  const clipboard = useCopyContext()
  return (
    <IconButton
      sx={{ mr: 0.5 }}
      onClick={() => {
        clipboard.copyToClipboard()
      }}
      {...props}
    >
      {clipboard.hasCopied ? (
        <Done color={'success'} sx={{ width: 16, height: 16 }} />
      ) : (
        <ContentCopyIcon sx={{ width: 16, height: 16 }} />
      )}
    </IconButton>
  )
}

Clipboard.Content = CopyContent
Clipboard.Tooltip = CopyTooltip
Clipboard.Button = CopyButton
