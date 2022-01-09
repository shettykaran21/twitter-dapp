import { Box, Container } from '@mui/material'
import Header from './header'

const Layout = ({ children }) => {
  return (
    <Box>
      <Header />
      <Container maxWidth="lg">{children}</Container>
    </Box>
  )
}

export default Layout
