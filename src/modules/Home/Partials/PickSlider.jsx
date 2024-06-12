import React from 'react'
import { DicountHolder, PackageCard, PackageCardBottom, PackageCardText, PackageCardTop, PackageContainer, PackageTitle, RatingHolder } from './styles'
import { Swiper, SwiperSlide } from 'swiper/react'
import { THEME } from '@theme/index'
import { FaStar } from 'react-icons/fa6'
import styled from 'styled-components'
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { images } from '@assets/images'
import { Flex } from '@components/others'

const PickSlider = ({ data }) => {
    return (
        <PackageContainer>
            <PackageTitle>Pick where you left off</PackageTitle>
            <PickSwiper
                spaceBetween={10}
                slidesPerView={1}
                navigation={true}
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
                    data.map(item => (

                        <SwiperSlide>
                            <PackageCard>
                                <PackageCardTop>
                                    <Flex spacebetween={'true'} style={{ width: '100%' }}>
                                        <div style={{ gap: '5px' }}>
                                            <PackageCardText size={'18px'} weight={400}>{item.name}</PackageCardText>
                                            <PackageCardText size={'16px'} color={THEME.gray} weight={400}>{item.address}</PackageCardText>
                                        </div>
                                        <div>
                                            <RatingHolder>
                                                <PackageCardText size={'12px'} weight={700}>{item.rating}</PackageCardText>
                                                <FaStar size={12} />
                                            </RatingHolder>
                                        </div>
                                    </Flex>
                                    <div style={{ border: '0.5px solid #808080', margin: '10px 0px' }}></div>
                                    <div style={{ gap: '5px' }}>
                                        <PackageCardText size={'24px'} weight={600}>{item.title}</PackageCardText>
                                        <PackageCardText size={'16px'} color={THEME.gray} weight={300}>{item.subTitle}</PackageCardText>
                                    </div>
                                </PackageCardTop>


                                <PackageCardBottom>
                                    <Flex spacebetween={'true'} style={{ width: '100%' }} gap={'5px'}>
                                        <Flex column={'true'} spacebetween={'true'} gap={'15px'}>
                                            <Flex gap={'5px'} center={'true'} >
                                                <PackageCardText size={'32px'} weight={700}>{`${item.price}/-`}</PackageCardText>
                                                <PackageCardText size={'18px'} weight={400} color={THEME.gray} lineThrough={'line-through'}>{`${item.mrp}/-`}</PackageCardText>
                                            </Flex>
                                            <DicountHolder>{`${item.discount}OFF`}</DicountHolder>
                                        </Flex>

                                        <Flex alignend={'true'} column={'true'} gap={'5px'}>
                                            <p className='ExpectText'>{'Expected report in 1 Day'}</p>
                                            <Flex center={'true'} centervertically={'true'} className='bookButton' >
                                                <PackageCardText size={'14px'} weight={800} color={"#ffffff"}>{'Book'}</PackageCardText>
                                            </Flex>
                                        </Flex>
                                    </Flex>
                                </PackageCardBottom>
                            </PackageCard>
                        </SwiperSlide>
                    ))
                }
            </PickSwiper>
        </PackageContainer>
    )
}

export default PickSlider

export const PickSwiper = styled(Swiper)`
        .swiper-button-prev{
            display:none;
        }
        .swiper-button-next.swiper-button-disabled {
            opacity: 1;
            cursor: auto;
            pointer-events: none;
        }
    .swiper-button-next{
        border-radius: 50px;
        z-index:100;
        top: 40%;
        height: 60px;
        width: 60px;
        display:flex;
        align-items:center;
        justify-content:center;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        background:url(${images.RIGHTARROW});
        background-repeat:no-repeat;
        background-position: center;
        background-color: #fff;
    &::after{
        content:'';
      font-size:20px;
      color:${THEME.white};
    }
    @media ${THEME.TABLET} {
        height: 98px;
        width: 98px;
        top: 40%;
    }
  }
`
