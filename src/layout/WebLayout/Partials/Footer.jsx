import { CustomRow, Flex } from '@components/others'
import { Col } from 'antd'
import React from 'react'
import { images } from '@assets/images'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { THEME } from '@theme/index'
import { CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { FooterImg, HomeFooterContainer, PackageCardText } from '@modules/Home/Partials/styles';
import { FooterEndHolder } from './styled';

const Footer = () => {
    return (
        <HomeFooterContainer>
            <CustomRow>
                <Col span={24} md={12}>
                    <Flex column={'true'} gap={'25px'} margin={'10px 0px'}>
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
                    <CustomRow >
                        <Col span={24} md={8} sm={12} xs={24}>
                            <PackageCardText size={'20px'} weight={500} color={THEME.primary_color}>Cities</PackageCardText>
                            <Flex className='footerCard' column={'true'}>
                                <PackageCardText size={'18px'} weight={400} >Bangalore</PackageCardText>
                                <PackageCardText size={'18px'} weight={400} >Delhi</PackageCardText>
                                <PackageCardText size={'18px'} weight={400} >Noida</PackageCardText>
                                <PackageCardText size={'18px'} weight={400} >Hydrabad</PackageCardText>
                            </Flex>
                        </Col>
                        <Col span={24} md={8} sm={12} xs={24}>
                            <PackageCardText size={'20px'} weight={500} color={THEME.primary_color}>Support</PackageCardText>
                            <Flex className='footerCard' column={'true'}>
                                <PackageCardText size={'18px'} weight={400} >Getting Started</PackageCardText>
                                <PackageCardText size={'18px'} weight={400} >help center</PackageCardText>
                                <PackageCardText size={'18px'} weight={400} >Report a Bug</PackageCardText>
                                <PackageCardText size={'18px'} weight={400} >Refund Policy</PackageCardText>
                                <PackageCardText size={'18px'} weight={400} >Call Support</PackageCardText>
                            </Flex>
                        </Col>
                        <Col span={24} md={8} sm={12} xs={24}>
                            <PackageCardText size={'20px'} weight={500} color={THEME.primary_color}>contact Us</PackageCardText>
                            <Flex className='footerCard' column={'true'}>
                                <Flex gap={'5px'} centervertically={'true'}>
                                    <CiMail size={16} color={THEME.primary_color} />
                                    <PackageCardText size={'18px'} weight={400} >info@accesslabz.com</PackageCardText>
                                </Flex>
                                <Flex gap={'5px'} centervertically={'true'}>
                                    <FiPhone size={16} color={THEME.primary_color} />
                                    <PackageCardText size={'18px'} weight={400} >(+91) 9288008801</PackageCardText>
                                </Flex>
                                <Flex gap={'5px'} centervertically={'true'}>
                                    <Flex flexstart={'true'}>
                                        <IoLocationOutline size={16} color={THEME.primary_color} />
                                    </Flex>
                                    <div>
                                        <PackageCardText size={'18px'} weight={400} >Door No. 28/69/1,
                                            Patturaikkal, Thrissur, Kerala 680008, India</PackageCardText>
                                    </div>
                                </Flex>
                            </Flex>
                        </Col>
                    </CustomRow>
                </Col>
            </CustomRow>
            <FooterEndHolder>
                    <CustomRow>
                        <Col span={24} md={12}>
                            <p className='copyright'>Copyright © 2022 Access labz</p>
                        </Col>
                        <Col span={24} md={12}>
                            <p className='terms'>All Rights Reserved | <span>Terms and Conditions</span> | <span>Privacy Policy</span></p>
                        </Col>
                    </CustomRow>

            </FooterEndHolder>
        </HomeFooterContainer>
    )
}
export default Footer