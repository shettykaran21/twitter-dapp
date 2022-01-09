import { Box } from '@mui/material'

const Wrapper = ({ children }) => {
  return (
    <Box
      sx={{
        backgroundColor: '#000000',
        backgroundImage: 'linear-gradient(97deg, #000000 0%, #04619f 160%)',
        minHeight: '100vh',
        fontFamily: 'Ubuntu',
      }}
    >
      {children}
    </Box>
  )
}

export default Wrapper
