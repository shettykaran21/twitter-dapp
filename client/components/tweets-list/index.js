import TweetCard from '@components/tweet-card'
import { Box } from '@mui/material'

const TweetsList = ({ tweets }) => {
  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', gap: '2rem', pb: '8rem' }}
    >
      {tweets.map((tweet) => (
        <TweetCard key={tweet.id} tweet={tweet} />
      ))}
    </Box>
  )
}

export default TweetsList
