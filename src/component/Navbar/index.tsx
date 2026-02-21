import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileLink } from './NavbarStyledComponent'
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { FaDev } from "react-icons/fa6";
import { useTheme } from 'styled-components';
import { MdModeNight } from "react-icons/md";
import { IoMdSunny } from "react-icons/io";

const Navbar = ({ darkMode, setDarkMode }: any) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const theme: any = useTheme()
  return (
    <Nav style={darkMode ? {
      // background: 'rgb(193, 201, 193)',
    } : {
      background: 'rgb(244 246 244)',
      border: '1px solid white'
    }}>
      <NavbarContainer >
        <NavLogo to='/' style={darkMode ? {
          color: 'white',

        }
          : { color: 'black' }}>
          <a>
            <FaDev size="2rem" /> <Span>Portfolio</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
        </NavItems>
        <ButtonContainer>
          {darkMode ? <MdModeNight size="1.5rem" onClick={() => setDarkMode(!darkMode)} color='white' /> : <IoMdSunny size="1.5rem" onClick={() => setDarkMode(!darkMode)} />}
        </ButtonContainer>
        {
          isOpen &&
          <MobileMenu
            //@ts-ignore
            isOpen={isOpen}>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</MobileLink>
            {/* <MobileLink href='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>Experience</MobileLink> */}
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav >
  )
}

export default Navbar