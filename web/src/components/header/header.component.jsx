import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import './header.style.scss'

const { Brand, Toggle, Collapse } = Navbar
const { Link, Item } = Nav

const Header = () => {
  return (
    <Navbar expand='md' bg='dark' variant='dark' className='app-header'>
      <Container>
        <Brand>Dev Lopes</Brand>
        <Toggle />
        <Collapse className='justify-content-end app-nav-bar'>
          <Nav variant='pills' >
            <Item className='app-header-item'>
              <Link>Home</Link>
            </Item>
            <Item className='app-header-item'>
              <Link>Sobre mim</Link>
            </Item>
            <Item className='app-header-item'>
              <Link>Carreira</Link>
            </Item>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default Header