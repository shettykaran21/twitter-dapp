import { Box, useTheme } from '@mui/material'

const Wrapper = ({ children }) => {
  const theme = useTheme()

  return (
    <Box
      sx={{
        backgroundColor: '#000000',
        backgroundImage: `linear-gradient(97deg, #000000 0%, ${theme.palette.primary.main} 160%)`,
        minHeight: '100vh',
        color: '#eee',
        fontFamily: "'Ubuntu', 'Lato', 'sans-serif'",
      }}
    >
      {children}
    </Box>
  )
}

export default Wrapper
