import React from 'react';
import './CSS/NavbarStyles.css'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FormControlLabel, SvgIcon, Switch, ToggleButton } from '@mui/material';
import { MdLightMode, MdNightlight } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const NavbarHeader = ({ setThemeMode, themeMode }) => {
    const dispatch = useDispatch();

    const fontColorChange = () => {
        return themeMode ? 'black' : 'lightgrey';
    }

    return (
        <Navbar sticky='top' collapseOnSelect expand="lg"  >
            <Container >
                <Navbar.Brand href="#" style={{ color: themeMode ? 'black' : 'steelblue' }}>e-website</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav navbarScroll className='justify-content-end w-100  ' >
                        {
                            navbarItems?.map((item, index) => {
                                if (item?.type === 'link') {
                                    return <NavLink className={'nav-link'} to={item?.path} key={index} style={{ color: fontColorChange() }}>{item?.label}</NavLink>
                                } else if (item?.type === 'button') {
                                    return <Nav.Item key={index}>

                                        <button className='btn btn-text' onClick={() => {
                                            dispatch({type: 'THEME_MODE', payload: !themeMode})
                                            setThemeMode(!themeMode)
                                        }}>
                                            <span className='text-secondary me-1' ><small>mode</small></span>
                                            {
                                                themeMode ?
                                                    <MdLightMode size={22} style={{ color: 'steelblue' }} />
                                                    :
                                                    <MdNightlight size={20} style={{ color: 'steelblue' }} />
                                            }</button>
                                    </Nav.Item>
                                } else if (item?.type === 'reg') {
                                    return <Nav.Item key={index}>
                                        <Button className={`${item?.styles?.linkType}`} href={item?.path} >{item?.label}</Button>
                                    </Nav.Item>
                                }
                            })
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}

const navbarItems = [
    {
        path: '',
        label: 'Dark Mode',
        type: 'button'
    },
    {
        path: '',
        label: 'Features',
        type: 'link'
    },
    {
        path: '/register',
        label: 'About me',
        type: 'link'
    },
    {
        path: '/register',
        label: 'Register',
        type: 'reg',
        styles: {
            color: '',
            linkType: 'btn btn-primary'
        }
    },
    // {
    //     path: '',
    //     label: ''
    // },
]

export default NavbarHeader