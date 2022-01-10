import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Box, Typography } from '@mui/material'

import FormTextArea from '@components/form/form-textarea'
import Button from '@components/button'

const TweetForm = () => {
  const [loading, setLoading] = useState(false)

  const {
    values,
    errors,
    touched,
    status,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: { text: '' },

    onSubmit: async (values, { setStatus, resetForm }) => {
      setLoading(true)

      try {
        console.log(values)
        resetForm({})
      } catch (err) {
        setStatus(err.response.data.message)
      }
      setLoading(false)
    },

    validationSchema: Yup.object({
      text: Yup.string()
        .required('Required')
        .max(600, 'Max 600 characters long'),
    }),
  })
  return (
    <form onSubmit={handleSubmit}>
      <FormTextArea
        label="Tweet"
        type="text"
        name="text"
        autoComplete="off"
        value={values.text}
        variant="outlined"
        onChange={handleChange}
        onBlur={handleBlur}
        hasError={touched.text && errors.text}
        errorMsg={errors.text && errors.text}
        minRows={6}
      />
      {status && (
        <Typography sx={{ color: lighten('#ff0000', 0.5), marginTop: '1rem' }}>
          {status}
        </Typography>
      )}
      <Box sx={{ marginTop: '2rem' }}>
        <Button
          type="submit"
          isLoading={loading}
          disabled={isSubmitting}
          style={{ width: '100%' }}
        >
          Post Tweet
        </Button>
      </Box>
    </form>
  )
}

export default TweetForm
