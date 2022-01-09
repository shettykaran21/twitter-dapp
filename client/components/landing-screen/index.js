/** @jsxImportSource @emotion/react */

import Image from 'next/image'
import { css } from '@emotion/react'
import { Box, Typography, useTheme, lighten } from '@mui/material'

import Button from '@components/button'

const LandingScreen = () => {
  const theme = useTheme()

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        height: 'calc(100vh - 64px)',
        justifyContent: 'space-between',
        gap: '1.5rem',
      }}
    >
      <Box sx={{ alignSelf: 'center', flexBasis: '65%' }}>
        <Typography
          variant="h1"
          component="h1"
          sx={{ fontWeight: '700', fontSize: '5rem' }}
        >
          A{' '}
          <span
            css={css`
              background-color: ${lighten(theme.palette.primary.main, 0.1)};
              border-radius: 10px;
              padding: 0.25rem 1rem;
            `}
          >
            {' '}
            Decentralized
          </span>{' '}
          Twitter Built on Ethereum
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          flexBasis: '35%',
          gap: '2rem',
          textAlign: 'center',
        }}
      >
        <Button>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Image src="/images/icon.svg" height={30} width={30} />
            <Typography>Create an account</Typography>
          </Box>
        </Button>
        <Typography>
          Please note that creating an account on the Ethereum blockchain costs
          a small amount of Ether.
        </Typography>
      </Box>
    </Box>
  )
}

export default LandingScreen
