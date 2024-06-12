import { NetWorkError } from "@router/components/NetWorkError"
import PageNotFound from "@router/components/PageNotFound"
import Home from "@modules/Home/Home"
// import UserProfile from "@modules/UserAccount/UserProfile/UserProfile"

export const linkList = [
    {
        routePath: '*',   // ----------- Page Not Fonund
        Component: PageNotFound,
    },
    {
        routePath: 'networkerror',  // ----------- Network Error
        Component: NetWorkError,
    },
    {
        routePath: '/',  // ----------- Home Page
        Component: Home,
    },

]

export const navItems = [
    {
        key: '1',
        name: 'Home',
        path: '/'
    },
    {
        key: '2',
        name: 'About us',
        path: 'aboutus'
    },
    {
        key: '3',
        name: 'Contact Us',
        path: 'contactus'
    },
    {
        key: '4',
        name: 'Wishlist',
        path: 'wishlist'
    },
]

export const sideNav = [
    {
        key: '1',
        name: 'Home',
        path: '/'
    },
    {
        key: '2',
        name: 'About',
        path: 'about'
    },
    {
        key: '3',
        name: 'Blog',
        path: 'blog'
    },
    {
        key: '4',
        name: 'Get the App',
        path: 'gettheapp'
    },
    {
        key: '5',
        name: 'Add Lab',
        path: 'addlab'
    },
    {
        key: '6',
        name: 'Login / SignUp',
        path: 'signup'
    },
]
