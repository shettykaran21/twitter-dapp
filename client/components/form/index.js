/** @jsxImportSource @emotion/react */

import { Box } from '@mui/material'
import { css } from '@emotion/react'

const Form = ({ width = '30rem', children, ...props }) => {
  const styles = {
    container: css`
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      min-height: calc(100vh - 64px);
    `,
    form: css`
      margin: 2.5rem 0;
      width: ${width};
      padding: 2.5rem;
      box-shadow: 0 10px 20px 0 rgba(153, 153, 153, 0.25);
      border-radius: 10px;
      background-color: #eee;
    `,
  }

  return (
    <Box sx={styles.container}>
      <form css={styles.form} {...props}>
        {children}
      </form>
    </Box>
  )
}

export default Form
