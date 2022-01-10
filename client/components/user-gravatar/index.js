/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import Gravatar from 'react-gravatar'

const UserGravatar = ({ email, size = 40 }) => {
  return (
    <Gravatar
      email={email}
      size={size}
      css={css`
        border-radius: 50%;
      `}
    />
  )
}

export default UserGravatar
