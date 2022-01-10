import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { getUserIdFromUsername, getUserInfo } from '@web3/users'
import Layout from '@components/layout'
import UserDetails from '@components/user-details'

const UserProfilePage = () => {
  const [userProfile, setUserProfile] = useState(null)

  const router = useRouter()

  useEffect(() => {
    const fetchData = async () => {
      if (router.query.slug) {
        const userId = await getUserIdFromUsername(router.query.slug)
        const profile = await getUserInfo(userId)

        setUserProfile(profile)
      }
    }
    fetchData()
  }, [router.query.slug])

  return (
    <>
      <Head>
        <title>
          {' '}
          Twitter DApp {userProfile && `| ${userProfile.username}`}
        </title>
      </Head>
      <Layout dark={true}>
        {userProfile && <UserDetails userData={userProfile} />}
      </Layout>
    </>
  )
}

export default UserProfilePage
