/** @jsxImportSource @emotion/react */

import { useEffect, useState } from 'react'
import { css, ClassNames } from '@emotion/react'
import { AppBar, Box, Toolbar, useTheme } from '@mui/material'
import { styled } from '@mui/system'

import Logo from '@components/logo'
import Nav from '../nav'
import { getLoggedInUserId, getUserInfo } from '@web3/users'

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar)

const Header = ({ dark }) => {
  const theme = useTheme()

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

  const styles = {
    header: css`
      box-shadow: none;
    `,
    dark: css`
      background-color: #000000;
      background-image: linear-gradient(
        97deg,
        #000000 0%,
        ${theme.palette.primary.main} 160%
      );
    `,
    transparent: css`
      background-color: transparent;
    `,
  }

  return (
    <>
      <ClassNames>
        {({ css, cx }) => (
          <AppBar
            position="fixed"
            sx={cx(
              css(styles.header),
              dark ? css(styles.dark) : css(styles.transparent)
            )}
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
        )}
      </ClassNames>

      <Offset />
    </>
  )
}

export default Header
