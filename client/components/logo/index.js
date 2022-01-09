import Image from 'next/image'
import { Box } from '@mui/material'

import Link from '@components/link'

const Logo = ({ center }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: center && 'center',
        alignItems: 'center',
        textAlign: 'center',
        width: '100%',
        transform: 'translateY(3px)',
      }}
    >
      <Link href="/">
        <Image
          src="/images/logo-with-text.svg"
          alt="logo"
          layout="fixed"
          height={50}
          width={160}
          priority
        />
      </Link>
    </Box>
  )
}

export default Logo
