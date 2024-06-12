import React from 'react'
import HomeSwiper from './HomeSwiper'
import MainContent from './MainContent'
import Faq from './Faq'
import HomeFooter from './HomeFooter'

const HomeContainer = () => {
  return (
    <div>
      <HomeSwiper/>
      <MainContent/>
      <Faq/>
    </div>
  )
}

export default HomeContainer
