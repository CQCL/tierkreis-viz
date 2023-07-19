import React, {SetStateAction, Dispatch, useState} from 'react'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'
import Radio from '@mui/material/Radio'
import Box from '@mui/material/Box'
import CloseIcon from '@mui/icons-material/Close'
import { MenuItem, Tooltip, Typography } from '@mui/material'
import { SxProps } from '@mui/system'

type Options = {
  value: string
  label: string
  render?: JSX.Element
}

export type AutocompleteWithListProps = {
  options: Options[]
  defaultSelected?: string
  defaultSelectedRemoveTooltipText?: string
  labelTitle?: string
  setDefaultSelected?: Dispatch<SetStateAction<string | undefined>>
  setSelectedOptions: Dispatch<SetStateAction<string[]>>
  selectedOptions: string[]
  label?: string
  sx?: SxProps
  placeholder?: string
  disabled?: boolean
  noOptionsText?: string
}

export const AutocompleteWithList = ({
  options = [],
  selectedOptions = [],
  setSelectedOptions,
  setDefaultSelected,
  defaultSelected,
  labelTitle,
  label,
  placeholder,
  sx,
  noOptionsText,
  disabled,
  defaultSelectedRemoveTooltipText,
}: AutocompleteWithListProps) => {
  const defaultSelection = typeof setDefaultSelected === 'function'
  const [open, setOpen] = useState(false)
  //Click on default radio button
  const handleRadioClick = (value: string) => {
    if (defaultSelection && defaultSelected !== value) {
      setDefaultSelected(value)
    }
  }
  //Selection on menu item
  const handleSelect = (value: string | undefined) => {
    if (value) {
      setSelectedOptions([...selectedOptions, value])
      if (defaultSelection && defaultSelected === undefined) {
        setDefaultSelected(value)
      }
    }
  }
  // Delete on list item
  const handleDelete = (value: string) => {
    setSelectedOptions(selectedOptions.filter((o) => o !== value))
    if (defaultSelection && value === defaultSelected) {
      setDefaultSelected(undefined)
    }
  }
  const handleCloseMenu = () => {
    open && setOpen(false)
  }
  const handleOpenMenu = () => {
    !open && !disabled && setOpen(true)
  }
  const filteredOptions = options.filter((option) => !selectedOptions.includes(option.value))

  return (
    <Box sx={sx}>
      <Autocomplete
        disabled={disabled}
        options={filteredOptions}
        open={open}
        noOptionsText={noOptionsText}
        onChange={handleOpenMenu}
        onBlur={handleCloseMenu}
        onFocus={handleOpenMenu}
        onMouseDownCapture={handleOpenMenu}
        renderOption={(props, option) => (
          <MenuItem
            {...props}
            onClick={(event) => {
              handleCloseMenu()
              handleSelect(option?.value)
            }}
          >
            {option.render || option.label}
          </MenuItem>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder={placeholder}
            onChange={handleOpenMenu}
            label={label}
            variant="outlined"
          />
        )}
      />
      <List sx={{ pb: 0 }}>
        {defaultSelection && selectedOptions.length > 0 && (
          <ListItem
            disabled={disabled}
            sx={{
              display: 'flex',
              borderBottom: '1px solid',
              borderColor: 'border.main',
            }}
          >
            {defaultSelection && labelTitle && (
              <>
                <Typography sx={{ width: '4rem' }}>Default</Typography>
                <Typography sx={{ ml: '2rem' }}>{labelTitle}</Typography>
              </>
            )}
          </ListItem>
        )}
        {selectedOptions.map((option) => {
          const currentOptionDefault: boolean = defaultSelection && defaultSelected === option
          const selectedOption = options.find((o) => o.value === option)
          return (
            <ListItem
              key={option}
              disabled={disabled}
              sx={{
                borderBottom: '1px solid',
                borderColor: 'border.main',
                display: 'flex',
              }}
            >
              {defaultSelection && (
                <Box sx={{ width: '4rem' }}>
                  <Radio
                    disabled={disabled}
                    checked={currentOptionDefault}
                    onClick={() => {
                      handleRadioClick(option)
                    }}
                  />
                </Box>
              )}
              <ListItemText
                primary={selectedOption?.render || selectedOption?.label || option}
                sx={{ ml: defaultSelection ? '2rem' : 0 }}
              />
              <Tooltip
                title={
                  !disabled &&
                  currentOptionDefault &&
                  selectedOptions.length > 1 &&
                  defaultSelectedRemoveTooltipText
                }
              >
                <Box>
                  <IconButton
                    disabled={disabled || (currentOptionDefault && selectedOptions.length > 1)}
                    onClick={() => handleDelete(option)}
                  >
                    <CloseIcon />
                  </IconButton>
                </Box>
              </Tooltip>
            </ListItem>
          )
        })}
      </List>
    </Box>
  )
}
