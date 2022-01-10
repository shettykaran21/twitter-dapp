import { Box, Container } from '@mui/material'

import Header from './header'

const Layout = ({ header = true, dark = false, maxWidth = 'lg', children }) => {
  return (
    <Box>
      {header && <Header dark={dark} />}
      <Container maxWidth={maxWidth}>{children}</Container>
    </Box>
  )
}

export default Layout
