import Search from '@mui/icons-material/Search'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import React, { ComponentProps } from 'react'

export const SearchField = (
  props: Omit<ComponentProps<typeof TextField>, 'label'>
) => {
  return (
    <TextField
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search></Search>
          </InputAdornment>
        ),
      }}
      type="search"
      {...props}
    />
  )
}
