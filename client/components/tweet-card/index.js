import Moment from 'react-moment'
import {
  Box,
  Card,
  CardContent,
  lighten,
  Typography,
  useTheme,
} from '@mui/material'

import Link from '@components/link'
import UserGravatar from '@components/user-gravatar'

const TweetCard = ({ tweet }) => {
  const { text, user, postedAt } = tweet
  const { username, gravatarEmail } = user

  const theme = useTheme()

  return (
    <Card
      sx={{
        minWidth: 275,
        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
        backgroundColor: lighten(theme.palette.primary.main, 0.9),
        py: '1.25rem',
        px: '1rem',
        borderRadius: '16px',
      }}
    >
      <CardContent sx={{ display: 'flex', gap: '1.5rem' }}>
        <UserGravatar email={gravatarEmail} size={50} />
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Link href={`/users/${username}`}>
              <Typography>@{username}</Typography>
            </Link>
            <Typography sx={{ fontSize: '0.875rem' }} color="text.secondary">
              <Moment fromNow ago unix>
                {postedAt}
              </Moment>
            </Typography>
          </Box>
          <Box>
            <Typography color="text.secondary">{text}</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default TweetCard
