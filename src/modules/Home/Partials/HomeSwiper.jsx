import React from 'react'
import { SwiperCard, SwiperContainer, SwiperHolder } from './styles'
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { images } from '@assets/images';
import { Flex } from '@components/others';
import { Input } from 'antd';
import { FiSearch } from "react-icons/fi";
import { THEME } from '@theme/index';
import { Swiper, SwiperSlide } from 'swiper/react';

const HomeSwiper = () => {
    const swiperdata = ['dj', 'jgdahj', 'sj']
    return (
        <SwiperContainer>
            <SwiperHolder
            pagination={false}
            >
                {
                    swiperdata.map(item => (
                        <SwiperCard>
                            <h1>We have served more than 7000+ customers</h1>
                            <p className='swiperText'>Lorem ipsum dolor sit amet consectetur adipiscing elit mollis quisque senectus massa lobortis, scelerisque maecenas sagittis faucibus integer </p>
                            <Flex margin={'30px 0px'} gap={'30px'} spacebetween={'true'} className='searchHolder' >
                                <Flex gap={'15px'} aligncenter={'true'} style={{ width: '238px' }}>
                                    <img src={images.LOCATION} alt="location" height={24} width={24} />
                                    <p className='banglore'>Banglore</p>
                                </Flex>
                                <Flex aligncenter={'true'} style={{ width: '100%' }} spacebetween={'true'}>
                                    <Input className='input' placeholder='Search for test...' />
                                    <FiSearch color={THEME.primary_color} />
                                </Flex>
                            </Flex>
                            <p className='swiperText'>We are associated with more than 25+ lab.</p>
                        </SwiperCard>
                    ))
                }
            </SwiperHolder>


        </SwiperContainer>
    )
}

export default HomeSwiper
