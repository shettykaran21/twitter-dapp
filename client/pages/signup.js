import SignupForm from '@components/form/signup-form'
import Layout from '@components/layout'
import Wrapper from '@components/wrapper'

const SignupPage = () => {
  return (
    <Wrapper>
      <Layout header={false}>
        <SignupForm />
      </Layout>
    </Wrapper>
  )
}

export default SignupPage
