import { useState } from 'react'
import { useRouter } from 'next/router'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Box, Typography } from '@mui/material'
import { lighten } from '@mui/material/styles'

import FormInput from '@components/form/form-input'
import FormTextArea from '@components/form/form-textarea'
import Button from '@components/button'
import Form from '@components/form'
import { createUser } from '@web3/users'
import CustomAlert from '@components/alert'

const SignupForm = () => {
  const [loading, setLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const router = useRouter()

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
      gravatarEmail: '',
      bio: '',
    },

    onSubmit: async (values, { setStatus, resetForm }) => {
      setLoading(true)

      try {
        await createUser(values)
        resetForm({})
        setIsOpen(true)

        setTimeout(() => {
          router.push('/feed')
        }, 3000)
      } catch (err) {
        setStatus(err.response.data.message)
      }
      setLoading(false)
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
      gravatarEmail: Yup.string()
        .required('Required')
        .matches(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          'Invalid email'
        ),
      bio: Yup.string()
        .required('Required')
        .max(300, 'Max 300 characters long'),
    }),
  })

  return (
    <>
      <CustomAlert
        title={'Account created successfully'}
        alertMsg={'Redirecting...'}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
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
          label="Gravatar Email"
          type="email"
          name="gravatarEmail"
          autoComplete="off"
          value={values.gravatarEmail}
          onChange={handleChange}
          onBlur={handleBlur}
          hasError={touched.gravatarEmail && errors.gravatarEmail}
          errorMsg={errors.gravatarEmail && errors.gravatarEmail}
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
          <Typography
            sx={{ color: lighten('#ff0000', 0.5), marginTop: '1rem' }}
          >
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
            Sign Up
          </Button>
        </Box>
      </Form>
    </>
  )
}

export default SignupForm
