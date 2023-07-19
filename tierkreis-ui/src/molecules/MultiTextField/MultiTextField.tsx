import Chip from '@mui/material/Chip'
import TextField, { TextFieldProps } from '@mui/material/TextField'
import React, { useEffect, useState } from 'react'

export type MultiTextFieldProps = {
  values: string[]
  setValues: (newValues: string[]) => void
  eventKey?: string
  helperText?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => boolean | void
  duplicateEntryText?: string
}

export const MultiTextField = ({
  values = [],
  helperText,
  eventKey = ' ',
  setValues,
  duplicateEntryText,
  onChange,
  onKeyDown,
  ...props
}: TextFieldProps & MultiTextFieldProps) => {
  const [inputValue, setInputValue] = useState<string>('')
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(event)
    setInputValue(event.target.value)
  }
  const isAlreadyInlist = values.some((v) => v === inputValue)

  const handleInputKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (onKeyDown) {
      if (typeof onKeyDown(event) === 'boolean') return
    }
    if (event.key === eventKey) {
      event.preventDefault()
      const inputValues = inputValue.trim()
      if (inputValues !== '' && !isAlreadyInlist) {
        setValues([...values, inputValues])
        setInputValue('')
      }
    }
  }

  const handleChipDelete = (value: string) => {
    setValues(values.filter((v) => v !== value))
  }

  return (
    <TextField
      variant={'outlined'}
      type="text"
      value={inputValue}
      helperText={isAlreadyInlist ? duplicateEntryText : helperText}
      onChange={handleInputChange}
      onKeyDown={handleInputKeyPress}
      {...props}
      InputProps={{
        sx: { flexWrap: 'wrap', minHeight: '7rem', ...props.InputProps?.sx },
        startAdornment: values.map((value, index) => (
          <Chip
            key={index}
            label={value}
            color={'success'}
            onDelete={() => handleChipDelete(value)}
            sx={{ mt: '0.5rem', mr: '0.25rem' }}
          />
        )),
        ...props.InputProps,
      }}
    />
  )
}
