import React from 'react'
import Layout from '../Layout'
import { Homebanner } from './Homebanner'
import HomeAbout from './HomeAbout'
import HomeIcons from './HomeIcons'
import HomeServices from './HomeServices'
import HomeProcess from './HomeProcess'
import Faq from './Faq'
import HomeContact from './HomeContact'
import TeamMember from './TeamMember'
import HomeBlog from './HomeBlog'
import HomeClient from './HomeClient'

const Home = () => {
  return (
     <Layout>
          {/* home banner */}
          <Homebanner/>
          {/* HomeICons Sec */}
          <HomeIcons/>
          {/* homeAbout sec */}
          <HomeAbout/>
          {/* Home services */}
          <HomeServices/>
          {/* Home Process */}
          <HomeProcess/>
          {/* Faq Sec */}
          <Faq/>
          {/* HomeContact */}
          <HomeContact/>
          {/* Team member */}
          <TeamMember/>
          {/* client sec */}
          <HomeClient/>
          {/* Home Blog */}
          <HomeBlog/>
     </Layout>
  )
}

export default Home