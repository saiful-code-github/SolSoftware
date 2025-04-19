import React, { useEffect, useState } from 'react'
import {
    CCol,
    CRow,
  CCollapse,
  CContainer,
  CDropdown,
  CDropdownMenu,
  CDropdownToggle,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavbarToggler,
  CNavItem
} from '@coreui/react';
import logo from '../assets/Images/logo1 (1).png'
import { Link, NavLink, useNavigate } from 'react-router-dom';

export const Header = () => {
  const [visible, setVisible] = useState(false);
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();
  //section redirect
  const hanldeScrollToSection = (e, sectionId) => {
    e.preventDefault();
    if(window.location.pathname !== '/'){
      navigate('/');
      setTimeout(() => {
          const section = document.getElementById(sectionId);
          if(section) {
            section.scrollIntoView({behavior: "smooth", block: 'start'})
          }
      },1000);
    }else{
      const section = document.getElementById(sectionId);
      if(section){
        section.scrollIntoView({behavior: "smooth", block: "start"} )
      }
    }
  }
  //navbar scroll
  const navbarScroll = () => {
    if(document?.body?.scrollTop || document?.documentElement?.scrollTop > 100){
      setNav(true)
    }else{
      setNav(false)
    }
  } 
  useEffect(()=>{
     window.addEventListener("scroll", navbarScroll);
     return () => window.removeEventListener("scroll", navbarScroll)
  },[])
  return (
    <header>
        <div className="top-header">
            <CContainer>
                 <CRow>
                     <CCol lg={8}>
                          <ul className='flex'>
                             <li className='mr-3'><i className="bi bi-telephone-fill mr-2"></i><Link to="/">
                             +88094252580</Link> </li>
                             <li><i className="bi bi-envelope-fill"></i><Link to="mailto:
                            example@gmail.com">
                            example@gmail.com</Link></li>
                          </ul>
                     </CCol>
                     <CCol lg={4}>
                        <div className='flex justify-end'>
                        <h4 className='inline-block'>Follow Us</h4>
                          <ul className='flex ml-10 menu'>
                             <li><Link to="#"><i className='bi bi-facebook'></i></Link></li>
                             <li><Link to="#"><i className='bi bi-twitter-x'></i></Link></li>
                             <li><Link to="#"><i className='bi bi-instagram'></i></Link></li>
                             <li><Link to="#"><i className='bi bi-linkedin'></i></Link></li> 
                          </ul>
                        </div>
                     </CCol>
                 </CRow>
            </CContainer>
        </div>
        <div className='bottom-header'>
        <CNavbar expand="lg" className={` ${nav ? "sticky" : "" } bg-[#0554f2]`}>
      <CContainer>
        <CNavbarBrand href="#"><img src={logo} alt="" /></CNavbarBrand>
        <CNavbarToggler onClick={() => setVisible(!visible)} />
        <CCollapse className="navbar-collapse" visible={visible}>
          <CNavbarNav className="ms-auto flex justify-center" style={{alignItems: "center"}}>
            <CNavItem>
              <NavLink onClick={(e)=> hanldeScrollToSection(e, "homeSection")} to="/"  className={({ isActive }) =>
                  isActive
                    ? "active"
                    : "inactive"
                }>
                Home
              </NavLink>
            </CNavItem>
            <CNavItem>
              <NavLink onClick={(e)=> hanldeScrollToSection(e, 'aboutSection')} className={({ isActive }) =>
                  isActive
                    ? "active"
                    : "inactive"
                } to="aboutSection">About Us</NavLink>
            </CNavItem>
            <CNavItem>
              <NavLink to="serviceSection" onClick={(e)=> hanldeScrollToSection(e, "serviceSection")} className={({ isActive }) =>
                  isActive
                    ? "active"
                    : "inactive"
                }>Services</NavLink>
            </CNavItem>
            <CDropdown variant="nav-item" popper={false}>
              <CDropdownToggle color="secondary" className={({ isActive }) =>
                  isActive
                    ? "active"
                    : "inactive"
                }>Blog</CDropdownToggle>
              <CDropdownMenu>
                <NavLink to="blogSection" onClick={(e)=> hanldeScrollToSection(e, "blogSection")} >Blog One</NavLink>
                <NavLink to="blogSection" onClick={(e)=> hanldeScrollToSection(e, "blogSection")}>Blog Two</NavLink>
              </CDropdownMenu>
            </CDropdown>
            <CNavItem>
              <NavLink to="contactSection" onClick={(e)=> hanldeScrollToSection(e, "contactSection")} className={({ isActive }) =>
                  isActive
                    ? "active"
                    : "inactive"
                }>Contact Us</NavLink>
            </CNavItem>
          </CNavbarNav>
        </CCollapse>
      </CContainer>
       </CNavbar>
        </div>
    </header>
  )
}
