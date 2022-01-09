import { Box, Container } from '@mui/material'

import Header from './header'

const Layout = ({ header = true, children }) => {
  return (
    <Box>
      {header && <Header />}
      <Container maxWidth="lg">{children}</Container>
    </Box>
  )
}

export default Layout
