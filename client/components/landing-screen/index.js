/** @jsxImportSource @emotion/react */

import Image from 'next/image'
import { css } from '@emotion/react'
import { Box, Typography, useTheme, lighten } from '@mui/material'

import Button from '@components/button'
import Link from '@components/link'

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
          sx={{ fontWeight: '500', fontSize: '5rem' }}
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
        <Image
          src="/images/ethereum-logo.svg"
          width={100}
          height={100}
          alt="Ethereum Logo"
        />
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
        <Link href="/signup">
          <Button>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Image
                src="/images/metamask.svg"
                height={30}
                width={30}
                alt="Metamask Logo"
              />
              <Typography>Create an account</Typography>
            </Box>
          </Button>
        </Link>
        <Typography>
          Please note that creating an account on the Ethereum blockchain costs
          a small amount of Ether.
        </Typography>
      </Box>
    </Box>
  )
}

export default LandingScreen
