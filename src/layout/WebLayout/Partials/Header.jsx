import React, { useState } from 'react'
import {
    HeaderContainer,
    HeaderNavLink,
    HeaderTopNavLink,
    LogoHolder,
    NavContainer,
    NavItem,
    SideNavHolder,
    SideNavLink,
    Toggle,
    TopNavHolder,
    UsernameHolder
} from '@layout/WebLayout/Partials/styled'
import { Container } from '@theme/Styled'
import Flex from '@components/others/Flex'
import { NavLink, useNavigate } from 'react-router-dom'
import { navItems, sideNav } from '@router/config/routes'
import { CustomModalDrawer } from '@components/common'
import { useSelector } from 'react-redux'
import { FaRegCircleUser } from "react-icons/fa6";
import { images } from '@assets/images'
import { HiMenuAlt1 } from "react-icons/hi";
import { THEME } from '@theme/index'
const Header = () => {
    const [active, setActive] = useState(1)
    const [sideNavActive, setSideNavActive] = useState(false)
    const navigate = useNavigate()
    const showSideNavModal = () => {
        setSideNavActive(true);
    };
    const hideSideNavModal = () => {
        setSideNavActive(false);
    };
    return (
        <HeaderContainer>
            <Container>
                <Flex aligncenter={'true'} spacebetween={'true'}>
                    <Flex gap={'10px'} aligncenter={'true'}>
                        <div className="logo">
                            <NavLink to={'/'}>
                                <LogoHolder>
                                    <img src={images?.LOGO} alt="logo" title='logo' />
                                </LogoHolder>
                            </NavLink>
                        </div>
                        <TopNavHolder>
                            <NavItem to={'/'}>
                                Home
                            </NavItem>
                            <span>|</span>
                            <NavItem to={'/'}>
                                About
                            </NavItem>
                            <span>|</span>
                            <NavItem to={'/'}>
                                Blog
                            </NavItem>
                            <span>|</span>
                            <NavItem to={'/'}>
                                Get the App
                            </NavItem>
                            <span>|</span>
                            <NavItem to={'/'}>
                                Add Lab
                            </NavItem>
                        </TopNavHolder>
                    </Flex>
                    <Toggle onClick={() => setSideNavActive(prev => !prev)}>
                        <HiMenuAlt1 color={THEME.primary} size={24} />
                    </Toggle>
                    <div className='topNavHolder'>
                        <HeaderTopNavLink to={'cart'} >
                                <p>Login/Signup</p>
                                <img src={images.USER} alt="usericon" />
                        </HeaderTopNavLink>
                    </div>
                </Flex>
            </Container>
            <CustomModalDrawer
                title={''}
                open={sideNavActive}
                onClose={hideSideNavModal}
            >
                <SideNavHolder>
                    <ul className='side__navmenu'>
                        {
                            sideNav.map((item) => (
                                <li className='lists' key={item.key} onClick={() => hideSideNavModal()}>
                                    <SideNavLink to={item.path}>
                                        <span>{item.name}</span>
                                    </SideNavLink>
                                </li>
                            ))
                        }
                    </ul>
                </SideNavHolder>
            </CustomModalDrawer>
        </HeaderContainer >
    )
}
export default Header