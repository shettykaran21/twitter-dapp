import { Box, Container } from '@mui/material'

import Header from './header'

const Layout = ({ header = true, children, dark = false }) => {
  return (
    <Box>
      {header && <Header dark={dark} />}
      <Container maxWidth="lg">{children}</Container>
    </Box>
  )
}

export default Layout
