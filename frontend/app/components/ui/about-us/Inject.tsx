import React from 'react'
import {AboutUsHeroSection} from '../..'
import WhoWeAre from './WhoWeAre'
import MeetTheTeam from './MeetTheTeam'
import AboutUsFooter from './AboutUsFooter'

const Inject = () => {
  return (
    <main className="bg-grey-800">
      <AboutUsHeroSection />
      <WhoWeAre />
      <MeetTheTeam />
      <AboutUsFooter />
    </main>
  )
}

export default Inject
