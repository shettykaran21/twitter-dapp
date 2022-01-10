import Button from '@components/button'
import Link from '@components/link'
import TweetForm from '@components/tweet-form'
import UserGravatar from '@components/user-gravatar'
import { Box, Modal, Typography } from '@mui/material'
import { useState } from 'react'
import { IoMdCreate } from 'react-icons/io'

const Nav = ({ userInfo }) => {
  const { firstName, lastName, username, gravatarEmail } = userInfo

  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 500,
            bgcolor: '#eee',
            boxShadow: 24,
            p: 4,
            borderRadius: '10px',
          }}
        >
          <TweetForm />
        </Box>
      </Modal>
      <Box
        component="nav"
        sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
      >
        <Button secondary onClick={handleOpen}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Typography>Tweet</Typography>
            <IoMdCreate />
          </Box>
        </Button>
        <Link href={`/users/${username}`}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Typography sx={{ color: '#eee' }}>
              {firstName}&nbsp;{lastName}
            </Typography>
            <UserGravatar email={gravatarEmail} />
          </Box>
        </Link>
      </Box>
    </>
  )
}

export default Nav
