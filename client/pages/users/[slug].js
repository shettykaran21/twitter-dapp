import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { getUserIdFromUsername, getUserInfo } from '@web3/users'
import Layout from '@components/layout'

const UserProfilePage = () => {
  const [userData, setUserData] = useState({})

  const router = useRouter()

  const username = router.query.slug

  useEffect(async () => {
    const userId = await getUserIdFromUsername(username)
    const profile = await getUserInfo(userId)

    setUserData(profile)
  }, [])

  return (
    <>
      <Head>
        <title> Twitter DApp {userData && `| ${username}`}</title>
      </Head>
      <Layout dark={true}>Hello World</Layout>
    </>
  )
}

export default UserProfilePage
