import SignupForm from '@components/form/signup-form'
import Layout from '@components/layout'

const SignupPage = () => {
  return (
    <Layout header={false}>
      <SignupForm />
    </Layout>
  )
}

export default SignupPage
