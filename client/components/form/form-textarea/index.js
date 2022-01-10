import { TextField } from '@mui/material'

const FormTextArea = ({
  label,
  name,
  hasError = false,
  errorMsg,
  variant = 'standard',
  minRows = 3,
  ...props
}) => {
  return (
    <TextField
      id={name}
      label={label}
      variant={variant}
      fullWidth
      error={hasError ? true : false}
      helperText={hasError && errorMsg}
      margin="normal"
      multiline
      minRows={minRows}
      {...props}
    />
  )
}

export default FormTextArea
