import { useEffect, useState } from 'react'
import { AppBar, Box, Toolbar } from '@mui/material'
import { styled } from '@mui/system'

import Logo from '@components/logo'
import Nav from '../nav'
import { getLoggedInUserId, getUserInfo } from '@web3/users'

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar)

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userInfo, setUserInfo] = useState({})

  useEffect(async () => {
    const userId = await getLoggedInUserId()

    try {
      const userInfo = await getUserInfo(userId)
      setUserInfo(userInfo)
      setIsLoggedIn(true)
    } catch (err) {
      console.log(err)
    }
  }, [])

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
            {isLoggedIn && userInfo && <Nav userInfo={userInfo} />}
          </Box>
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  )
}

export default Header
