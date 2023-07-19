import React, { ComponentProps } from 'react'
import DefaultAvatar from '@mui/material/Avatar'
import DefaultAvatarGroup from '@mui/material/AvatarGroup'
import DefaultMenu from '@mui/material/Menu'
import DefaultMenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Box from '@mui/material/Box'
import { useTheme } from '../../theme'
import { capitalize } from '../../utils/capitalize'

export const getAvatarPropsFromEmail = (props: {
  email: string
  display_name: string
}) => {
  const colourMap: { [index: number]: string } = {
    0: '#ea580c',
    1: '#ca8a04',
    2: '#84cc16',
    3: '#16a34a',
    4: '#10b981',
    5: '#06b6d4',
    6: '#2563eb',
    7: '#4f46e5',
    8: '#9333ea',
    9: '#db2777',
  }

  const colourMapIndex = props.email.length % Object.keys(colourMap).length
  return {
    iconLetter: props.display_name.slice(0, 1),
    iconColour: colourMap[colourMapIndex],
  }
}

type User = {
  email: string
  name: string
  onClick?: () => {}
}

export const CustomAvatar = (
  props: {
    email: string
    display_name: string
  } & ComponentProps<typeof DefaultAvatar>
) => {
  const avatarInfo = getAvatarPropsFromEmail(props)
  const theme = useTheme()
  return (
    <DefaultAvatar
      title={[props.display_name, props.email]
        .filter((str) => str.length > 0)
        .join(' / ')}
      {...props}
      sx={{
        bgcolor: avatarInfo.iconColour,
        color: theme.palette.getContrastText(avatarInfo.iconColour),
        ...props.sx,
      }}
    >
      {capitalize(avatarInfo.iconLetter)}
    </DefaultAvatar>
  )
}

export const CustomAvatarGroup = (
  props: ComponentProps<typeof DefaultAvatarGroup> & {
    users: User[]
    onUsersChange: (updatedUsers: User[]) => void
    disableSelection?: boolean
  }
) => {
  const [anchorEl, setAnchorEl] = React.useState<
    (EventTarget & HTMLDivElement) | null
  >(null)
  const isOpen = Boolean(anchorEl)
  const handleClose = () => setAnchorEl(null)
  const handleOpen = (event: any) => {
    if (!isOpen) {
      setAnchorEl(event.currentTarget)
    }
  }

  return (
    <Box sx={{ width: 'min-content', display: 'flex', alignItems: 'center' }}>
      <DefaultMenu
        id="menu"
        onClose={handleClose}
        anchorEl={anchorEl}
        sx={{ mt: 1 }}
        MenuListProps={{
          role: 'listbox',
          sx: {
            maxHeight: '20rem',
          },
        }}
        open={isOpen}
      >
        {props.users.map((user) => {
          return (
            <DefaultMenuItem
              sx={{
                display: 'flex',
                alignItems: 'center',
                pr: 5,
              }}
              key={user.email}
            >
              <ListItemIcon>
                <CustomAvatar
                  email={user.email}
                  display_name={user.name}
                ></CustomAvatar>
              </ListItemIcon>
              <ListItemText> {user.name}</ListItemText>
            </DefaultMenuItem>
          )
        })}
      </DefaultMenu>

      <DefaultAvatarGroup
        max={4}
        spacing="medium"
        componentsProps={{
          additionalAvatar: {
            onClick: handleOpen,
            style: {
              width: 29,
              height: 28,
              marginLeft: '-0.35rem',
              cursor: 'pointer',
            },
          },
        }}
      >
        {props.users.map((user) => {
          return (
            <CustomAvatar
              display_name={user.name}
              email={user.email}
              key={user.email}
              onClick={() => user.onClick?.()}
            />
          )
        })}
      </DefaultAvatarGroup>
    </Box>
  )
}
