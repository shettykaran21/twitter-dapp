import { Box, Typography } from '@mui/material'

import UserGravatar from '@components/user-gravatar'

const UserDetails = ({ userData }) => {
  const { username, firstName, lastName, gravatarEmail, bio } = userData

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        py: '5rem',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Typography component="h1" variant="h1" sx={{ fontSize: '3rem' }}>
          {firstName}&nbsp;{lastName}
        </Typography>
        <Typography sx={{ fontSize: '1.25rem', mt: '.25rem' }}>
          @{username}
        </Typography>
        <Typography sx={{ fontSize: '1.375rem', mt: '1rem' }}>{bio}</Typography>
      </Box>
      <UserGravatar email={gravatarEmail} size={120} />
    </Box>
  )
}

export default UserDetails
