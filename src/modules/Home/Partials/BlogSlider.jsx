import React from 'react'
import { BlogCard, BlogImgHolder, Natureholder, PackageContainer, PackageTitle } from './styles'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { Flex } from '@components/others'
import { IoIosTimer } from 'react-icons/io'
import 'swiper/css/navigation';
import { latestBlogs } from '@assets/commonData/Data'

const BlogSlider = () => {
    return (
        <PackageContainer>
            <PackageTitle>Latest Blog</PackageTitle>
            <Swiper
                 spaceBetween={10}
                 slidesPerView={1}
                 modules={[Navigation]}
                 breakpoints={{
                     768: {
                         slidesPerView: 2,
                         spaceBetween: 10,
                     },
                     1024: {
                         slidesPerView: 3,
                         spaceBetween: 10,
                     },
                     1440: {
                         slidesPerView: 4,
                         spaceBetween: 10,
                     },
                 }}
                 onSlideChange={() => console.log('slide change')}
                 onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    latestBlogs.map(item => (
                        <SwiperSlide>
                            <BlogCard>
                                <Natureholder>
                                    <p>Nature</p>
                                </Natureholder>
                                <BlogImgHolder>
                                    <img src={item.image} alt="nature" width={'100%'} />
                                </BlogImgHolder>
                                <h3>{item.title}</h3>
                                <p>{item.subTitle}</p>
                                <Flex gap={'5px'} centervertically={'true'} margin={'15px 0px 0px 0px'}>
                                    <IoIosTimer />
                                    <span>{item.updated}</span>
                                </Flex>

                            </BlogCard>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </PackageContainer>
    )
}

export default BlogSlider
