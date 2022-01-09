/** @jsxImportSource @emotion/react */

import { Box, Typography } from '@mui/material'
import { css } from '@emotion/react'

const Form = ({ width = '30rem', title, children, ...props }) => {
  const styles = {
    container: css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      min-height: calc(100vh);
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
      <Typography
        variant="h1"
        component="h1"
        sx={{ fontSize: '2rem', fontWeight: '500', marginTop: '1.5rem' }}
      >
        {title}
      </Typography>
      <form css={styles.form} {...props}>
        {children}
      </form>
    </Box>
  )
}

export default Form
