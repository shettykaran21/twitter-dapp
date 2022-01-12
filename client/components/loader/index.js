import CircularProgress, {
  circularProgressClasses,
} from '@mui/material/CircularProgress'
import { Box } from '@mui/material'

const Loader = ({ height = '10rem' }) => {
  return (
    <Box
      sx={{
        height,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <CircularProgress
          variant="determinate"
          sx={{
            color: (theme) => theme.palette.grey[200],
          }}
          size={40}
          thickness={4}
          value={100}
        />
        <CircularProgress
          variant="indeterminate"
          disableShrink
          sx={{
            color: (theme) => theme.palette.primary.main,
            animationDuration: '550ms',
            position: 'absolute',
            left: 0,
            [`& .${circularProgressClasses.circle}`]: {
              strokeLinecap: 'round',
            },
          }}
          size={40}
          thickness={4}
        />
      </Box>
    </Box>
  )
}

export default Loader
