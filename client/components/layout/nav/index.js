import Link from '@components/link'
import UserGravatar from '@components/user-gravatar'
import { Box, Typography } from '@mui/material'

const Nav = ({ userInfo }) => {
  const { firstName, lastName, username, gravatarEmail } = userInfo

  return (
    <Box component="nav">
      <Link href={`/users/${username}`}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Typography sx={{ color: '#eee' }}>
            {firstName}&nbsp;{lastName}
          </Typography>
          <UserGravatar email={gravatarEmail} />
        </Box>
      </Link>
    </Box>
  )
}

export default Nav
