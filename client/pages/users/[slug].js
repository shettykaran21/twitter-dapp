import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { getUserIdFromUsername, getUserInfo } from '@web3/users'
import Layout from '@components/layout'
import UserDetails from '@components/user-details'
import { Box } from '@mui/material'

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
      <Layout dark={true} maxWidth="md">
        <Box>{userProfile && <UserDetails userData={userProfile} />}</Box>
      </Layout>
    </>
  )
}

export default UserProfilePage
