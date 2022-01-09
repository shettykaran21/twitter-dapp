import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Box, Typography } from '@mui/material'
import { lighten } from '@mui/material/styles'

import FormInput from '@components/form/form-input'
import FormTextArea from '@components/form/form-textarea'
import Button from '@components/button'
import Form from '@components/form'

const SignupForm = () => {
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
    initialValues: {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      bio: '',
    },

    onSubmit: async (values, { setStatus, resetForm }) => {
      try {
        console.log(values)
        // resetForm({})
      } catch (err) {
        setStatus(err.response.data.message)
      }
    },

    validationSchema: Yup.object({
      firstName: Yup.string()
        .required('Required')
        .max(16, 'Max 16 characters long')
        .matches(/^[a-zA-Z]+$/, 'Contains invalid characters'),
      lastName: Yup.string()
        .required('Required')
        .max(16, 'Max 16 characters long')
        .matches(/^[a-zA-Z]+$/, 'Contains invalid characters'),
      username: Yup.string()
        .required('Required')
        .min(5, 'Min 5 characters long')
        .max(16, 'Max 16 characters long')
        .matches(/^[a-zA-Z0-9_-]+$/, 'Contains invalid characters'),
      email: Yup.string()
        .required('Required')
        .matches(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          'Invalid email id'
        ),
      bio: Yup.string().max(300, 'Max 300 characters long'),
    }),
  })

  return (
    <Form onSubmit={handleSubmit} title="Sign Up">
      <FormInput
        label="First Name"
        type="text"
        name="firstName"
        autoComplete="off"
        value={values.firstName}
        onChange={handleChange}
        onBlur={handleBlur}
        hasError={touched.firstName && errors.firstName}
        errorMsg={errors.firstName && errors.firstName}
      />
      <FormInput
        label="Last Name"
        type="text"
        name="lastName"
        autoComplete="off"
        value={values.lastName}
        onChange={handleChange}
        onBlur={handleBlur}
        hasError={touched.lastName && errors.lastName}
        errorMsg={errors.lastName && errors.lastName}
      />
      <FormInput
        label="Username"
        type="text"
        name="username"
        autoComplete="off"
        value={values.username}
        onChange={handleChange}
        onBlur={handleBlur}
        hasError={touched.username && errors.username}
        errorMsg={errors.username && errors.username}
      />
      <FormInput
        label="Email"
        type="email"
        name="email"
        autoComplete="off"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        hasError={touched.email && errors.email}
        errorMsg={errors.email && errors.email}
      />
      <FormTextArea
        label="Bio"
        type="text"
        name="bio"
        autoComplete="off"
        value={values.bio}
        variant="outlined"
        onChange={handleChange}
        onBlur={handleBlur}
        hasError={touched.bio && errors.bio}
        errorMsg={errors.bio && errors.bio}
      />
      {status && (
        <Typography sx={{ color: lighten('#ff0000', 0.5), marginTop: '1rem' }}>
          {status}
        </Typography>
      )}
      <Box sx={{ marginTop: '2rem' }}>
        <Button type="submit" disabled={isSubmitting} style={{ width: '100%' }}>
          Sign Up
        </Button>
      </Box>
    </Form>
  )
}

export default SignupForm
