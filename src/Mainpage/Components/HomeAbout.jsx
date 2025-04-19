import { CCol, CContainer, CRow } from '@coreui/react'
import React from 'react';
import aboutImg1 from '/src/assets/Images/3 (1).png';
import aboutImg2 from '/src/assets/Images/1 (1).png';
import aboutImg3 from '/src/assets/Images/2 (1).png';
import aboutImg5 from '/src/assets/Images/logo2.png';
import CButon from './CButon';
import { Link } from 'react-router-dom';

const HomeAbout = () => {
  return (
    <section id='aboutSection' className='bg-[#eff4fa] pt-[100px] pb-[50px] aboutSec' style={{paddingTop: "120px", paddingBottom: "50px"}}>
        <CContainer>
               <CRow>
                   <CCol lg={6}>
                    <div className='aboutimgbox'>
                    <img src={aboutImg1} alt="" className='img1'/>
                        <img src={aboutImg2} alt="" className='img2'/>
                        <img src={aboutImg3} alt="" className='img3'/>
                        <div className="aboutBg">
                            <img src={aboutImg5} alt="" />
                            <h2>SolSoft</h2>
                        </div>
                    </div>
                   </CCol>
                   <CCol lg={6}>
                        <div className='aboutinfo' style={{marginLeft: "30px",paddingBottom: "50px"}}>
                          <h4>About Our Company
                          </h4>
                            <h2>We Execute Our ideas From The Start to <span className='text-blue-700'>Finish</span>
                            </h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            </p>
                            <ul className='m-0 p-0'>
                            <li><i class="bi bi-check-square"></i>Development of Financial Models
                            </li> 
                            <li><i class="bi bi-check-square"></i>Nifty team is a diverse network of consultants

                            </li> 
                            <li><i class="bi bi-check-square"></i>Industry professionals with a global mindset

                            </li> 
                            </ul>
                            <div style={{marginTop: "50px"}} className='flex'>
                            <CButon className="button" style={{padding:"15px 40px"}} text="Get Started"/>
                            <div className='flex' style={{marginLeft: "25px"}}>
                                   <div className='shrink-0'>
                                      <i className="bi bi-telephone-fill" style={{width: "60px",height: "60px", borderRadius: "50%", border: "2px solid blue",lineHeight: "56px",display: "inline-block",textAlign: 'center',fontSize: "20px", color: "blue"}}></i>
                                   </div>
                                   <div className='grow-0' style={{marginLeft: "10px"}}>
                                        <h5 style={{fontSize: "18px",fontWeight :"600"}}>
                                        Call Everybody</h5>
                                        <p className='m-0' style={{ fontSize: "18px", color: "gray",lineHeight: "20px"}}><Link style={{textDecoration: "none",color: "gray",margin: "0"}}>1-888-452-1505</Link></p>
                                   </div>
                            </div>
                            </div>
                        </div>
                   </CCol>
               </CRow>
        </CContainer>
    </section>
  )
}

export default HomeAbout;