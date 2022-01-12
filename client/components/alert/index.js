import { useEffect } from 'react'
import { Alert, AlertTitle, Grow } from '@mui/material'
import { MdClose } from 'react-icons/md'

const CustomAlert = ({
  isOpen,
  setIsOpen,
  title,
  alertMsg,
  severity = 'success',
}) => {
  useEffect(() => {
    let timer = setTimeout(() => {
      setIsOpen(false)
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [isOpen, setIsOpen])

  return (
    <Grow in={isOpen}>
      <Alert
        severity={severity}
        action={
          <MdClose
            style={{ cursor: 'pointer' }}
            onClick={() => setIsOpen(false)}
          />
        }
        sx={{ position: 'absolute', bottom: '2rem', left: '2rem' }}
      >
        <AlertTitle>{title}</AlertTitle>
        {alertMsg}
      </Alert>
    </Grow>
  )
}

export default CustomAlert
