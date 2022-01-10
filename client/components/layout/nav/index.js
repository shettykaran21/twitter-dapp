import Link from '@components/link'
import { Box, Typography } from '@mui/material'

const Nav = ({ userInfo }) => {
  const { firstName, lastName, username } = userInfo

  return (
    <Box component="nav">
      <Link href={`/users/${username}`}>
        <Typography sx={{ color: '#eee' }}>
          {firstName}&nbsp;{lastName}
        </Typography>
      </Link>
    </Box>
  )
}

export default Nav
