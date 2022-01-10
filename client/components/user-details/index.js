const { Box, Typography } = require('@mui/material')

const UserDetails = ({ userData }) => {
  const { username, firstName, lastName, gravatarEmail, bio } = userData

  return (
    <Box>
      <Typography component="h1">
        {firstName}&nbsp;{lastName}
      </Typography>
      <Typography>{gravatarEmail}</Typography>
    </Box>
  )
}

export default UserDetails
