import { useEffect } from 'react'
import { AppBar, Box, Toolbar } from '@mui/material'
import { styled } from '@mui/system'

import Logo from '@components/logo'
import { getLoggedInUserId, getUserInfo } from '@web3/users'

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar)

const Header = () => {
  useEffect(async () => {
    const userId = await getLoggedInUserId()
    const userInfo = await getUserInfo(userId)

    console.log('Logged in as:', userInfo)
  })

  return (
    <>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}
      >
        <Toolbar sx={{ padding: '0 8rem' }} disableGutters>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              flex: 1,
              overflow: 'visible',
            }}
          >
            <Logo />
            <Box>shettykaran21</Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  )
}

export default Header
