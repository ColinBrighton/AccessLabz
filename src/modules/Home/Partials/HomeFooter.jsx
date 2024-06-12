import { CustomRow, Flex } from '@components/others'
import { Col } from 'antd'
import React from 'react'
import { FooterImg, HomeFooterContainer, PackageCardText } from './styles'
import { images } from '@assets/images'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { THEME } from '@theme/index'

const HomeFooter = () => {
    return (
        <HomeFooterContainer>
            <CustomRow>
                <Col span={24} md={12}>
                    <Flex column={'true'} gap={'25px'}>
                        <FooterImg>
                            <img src={images.LOGO} alt="Access Labz" />
                        </FooterImg>
                        <p style={{ maxWidth: '300px' }}>Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam</p>
                        <Flex gap={'20px'}>
                            <FaFacebookF color={THEME.primary_color} size={20} style={{ cursor: 'pointer' }} />
                            <FaTwitter color={THEME.primary_color} size={20} style={{ cursor: 'pointer' }} />
                            <AiFillInstagram color={THEME.primary_color} size={20} style={{ cursor: 'pointer' }} />
                            <FaLinkedinIn color={THEME.primary_color} size={20} style={{ cursor: 'pointer' }} />
                            <FaYoutube color={THEME.primary_color} size={20} style={{ cursor: 'pointer' }} />
                        </Flex>
                    </Flex>
                </Col>
                <Col span={24} md={12}>
                    <CustomRow>
                        <Col span={24} md={8}>
                            <PackageCardText size={'20px'} weight={500} color={THEME.primary_color}>Cities</PackageCardText>
                            <Flex margin={'40px 0px'} gap={'18px'} column={'true'}>
                                <PackageCardText size={'18px'} weight={400} >Bangalore</PackageCardText>
                                <PackageCardText size={'18px'} weight={400} >Delhi</PackageCardText>
                                <PackageCardText size={'18px'} weight={400} >Noida</PackageCardText>
                                <PackageCardText size={'18px'} weight={400} >Hydrabad</PackageCardText>
                            </Flex>
                        </Col>
                        <Col span={24} md={8}>
                            <PackageCardText size={'20px'} weight={500} color={THEME.primary_color}>Support</PackageCardText>
                            <Flex margin={'40px 0px'} gap={'18px'} column={'true'}>
                                <PackageCardText size={'18px'} weight={400} >Getting Started</PackageCardText>
                                <PackageCardText size={'18px'} weight={400} >help center</PackageCardText>
                                <PackageCardText size={'18px'} weight={400} >Report a Bug</PackageCardText>
                                <PackageCardText size={'18px'} weight={400} >Refund Policy</PackageCardText>
                                <PackageCardText size={'18px'} weight={400} >Call Support</PackageCardText>
                            </Flex>
                        </Col>
                        <Col span={24} md={8}>
                            <PackageCardText size={'20px'} weight={500} color={THEME.primary_color}>Cities</PackageCardText>
                            <Flex margin={'40px 0px'} gap={'18px'} column={'true'}>
                                <PackageCardText size={'18px'} weight={400} >Bangalore</PackageCardText>
                                <PackageCardText size={'18px'} weight={400} >Delhi</PackageCardText>
                                <PackageCardText size={'18px'} weight={400} >Noida</PackageCardText>
                                <PackageCardText size={'18px'} weight={400} >Hydrabad</PackageCardText>
                            </Flex>
                        </Col>
                    </CustomRow>
                </Col>
            </CustomRow>
        </HomeFooterContainer>
    )
}

export default HomeFooter
