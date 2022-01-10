/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import Gravatar from 'react-gravatar'

const UserGravatar = ({ email }) => {
  return (
    <Gravatar
      email={email}
      size={40}
      css={css`
        border-radius: 20px;
      `}
    />
  )
}

export default UserGravatar
