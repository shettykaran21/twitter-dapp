/** @jsxImportSource @emotion/react */

import { css, ClassNames } from '@emotion/react'
import { useTheme, lighten } from '@mui/material/styles'

const Button = ({ children, isLoading, secondary, ...other }) => {
  const theme = useTheme()

  const styles = {
    button: css`
      text-transform: none;
      border-radius: 40px;
      border: none;
      cursor: pointer;
      font-family: inherit;
      transition: all ease 0.5s;
      white-space: nowrap;
      &:disabled {
        background-color: #aaa;
      }
    `,

    primary: css`
      padding: 0.75rem 2rem;
      color: ${theme.palette.primary.main};
      font-size: 1rem;
      background-color: ${lighten(theme.palette.primary.main, 0.7)};
    `,

    secondary: css`
      padding: 0.5rem;
      background-color: #fff;
      color: ${theme.palette.primary.main};
    `,

    loading: css`
      padding-left: 2.2rem;
      position: relative;
      &:before {
        content: '';
        position: absolute;
        opacity: 0.3;
        left: 1rem;
        width: 1rem;
        height: 1rem;
        border: 2px solid currentcolor;
        border-radius: 50%;
      }
      &:after {
        content: '';
        position: absolute;
        left: 1rem;
        width: 1rem;
        height: 1rem;
        border: 2px solid transparent;
        border-left-color: currentcolor;
        border-radius: 50%;
        animation: spin 0.9s infinite cubic-bezier(0.5, 0.1, 0.5, 0.9);
        filter: invert(0);
        transform-origin: 50% 50% 1px;
      }
      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    `,
  }

  return (
    <ClassNames>
      {({ css, cx }) => (
        <button
          {...other}
          css={cx(
            css(styles.button),
            secondary ? css(styles.secondary) : css(styles.primary),
            isLoading && css(styles.loading)
          )}
        >
          {children}
        </button>
      )}
    </ClassNames>
  )
}

export default Button
