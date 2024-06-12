import { Container } from '@theme/Styled'
import React from 'react'
import { AdvertisementContainer, BlogCard, BlogImgHolder, ContactusCard, ContactusContainer, DicountHolder, DiscountHolder, Natureholder, NextButton, PackageCard, PackageCardBottom, PackageCardText, PackageCardTop, PackageContainer, PackageTitle, PopularLabContainer, PopularText, PopularTextContainer, RatingHolder, RoundiconHolder, TestHolder, WorkCard, WorkHolder, WorkImgHolder, WorkTitle } from './styles'
import { BookData, PopularPackage, latestBlogs, popularLabs, popularTest } from '@assets/commonData/Data'
import { images } from '@assets/images'
import { CustomRow, Flex } from '@components/others'
import { Col } from 'antd'
import { FaStar } from "react-icons/fa";
import { THEME } from '@theme/index'
import { IoArrowForward } from "react-icons/io5";
import { Swiper, SwiperSlide } from 'swiper/react'
import { IoIosTimer } from "react-icons/io";
import { Button, CustomRadioButton } from '@components/form'
import Faq from './Faq'
import PickSlider from './PickSlider'
import BlogSlider from './BlogSlider'
import WorkingSection from './WorkingSection'
import PopularPackages from './PopularPackages'

const MainContent = () => {
  return (
    <div style={{backgroundColor:'#f2f2f2'}}>

      {/* Popular test in your city */}
      <PopularLabContainer>
        <PopularText>Popular Lab in your city</PopularText>
        <Flex center={'true'} aligncenter={'true'} >
          <Flex wrap={'true'} gap={'30px 35px'} center={'true'} style={{ maxWidth: '1193px' }}>
            {
              popularLabs.map((item,index) => {
                return (
                    <img key={index} src={item.LAB} alt="test" height={'34px'} />
                 
                )
              })
            }
          </Flex>
        </Flex>
      </PopularLabContainer>

      {/* Popular test in your city */}
      <PopularTextContainer>
        <PopularText>Popular test in your city</PopularText>
        <Flex center={'true'} aligncenter={'true'} >
          <Flex wrap={'true'} gap={'15px 10px'} center={'true'} style={{ maxWidth: '1193px' }}>
            {
              popularTest.map(item => {
                return (
                  <TestHolder>
                    <img src={images.TESTTUBE} alt="test" width={'32px'} height={'32px'} />
                    <p className='test'>{item.test}</p>
                  </TestHolder>
                )
              })
            }
          </Flex>
        </Flex>
      </PopularTextContainer>

      {/* How We Work */}
      <WorkingSection/>


      {/* Pick Where you left */}
      <PickSlider data={BookData} />

        {/* Populat Packages */}
        <PopularPackages data={PopularPackage} />


      {/* Advertisement */}
      <div style={{ backgroundColor: '#f2f2f2', overflow: 'hidden' }}>
        <AdvertisementContainer>
          <div className='circle1'></div>
          <div className='circle2'></div>
          <DiscountHolder>
            <h2>Get</h2>
            <h1>50% OFF</h1>
            <h3>For new user</h3>
          </DiscountHolder>
        </AdvertisementContainer>
      </div>


      {/* Pick Where you left */}
      <PickSlider data={BookData} />


      {/* Latest Blog */}
      <BlogSlider />

      {/* contact us */}
      <ContactusContainer>
        <img src={images.PLUS} alt="plus" className='plus1' />
        <img src={images.PLUS} alt="plus" className='plus2' />
        <img src={images.PLUS} alt="plus" className='plus3' />
        <ContactusCard>
          <Flex column={'true'} gap={'15px'}>
            <h1>Feel free to contact us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit mollis quisque senectus massa lobortis, scelerisque maecenas sagittis faucibus integer </p>
          </Flex>
          <Button.Primary text={'Contact'} />
        </ContactusCard>
      </ContactusContainer>
    </div>
  )
}

export default MainContent
