import Layout from '@components/layout'
import LandingScreen from '@components/landing-screen'
import BackgroundWrapper from '@components/background-wrapper'

const HomePage = () => {
  return (
    <BackgroundWrapper>
      <Layout>
        <LandingScreen />
      </Layout>
    </BackgroundWrapper>
  )
}

export default HomePage
