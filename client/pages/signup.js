import SignupForm from '@components/form/signup-form'
import Layout from '@components/layout'
import BackgroundWrapper from '@components/background-wrapper'

const SignupPage = () => {
  return (
    <BackgroundWrapper>
      <Layout header={false}>
        <SignupForm />
      </Layout>
    </BackgroundWrapper>
  )
}

export default SignupPage
