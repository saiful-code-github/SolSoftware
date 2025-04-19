import { CCol, CContainer, CRow } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import footerLogo from '/src/assets/Images/logo1.png';
import mediaImg from '/src/assets/Images/footerSmall.png';
import mediaImg2 from '/src/assets/Images/footerSmall2.png';

const Footer = () => {
  const [scorll, setScroll] = useState(false);
  // handleScroll
  const handleScroll = () => {
    window.scrollTo({
      top:0,
      behavior: "smooth"

    })
  }
  // scrollToptoBottom
  const scrollToptoBottom = () => {
    if(document?.body?.scrollTop || document?.documentElement?.scrollTop > 300){
      setScroll(true)
    }else{
      setScroll(false)
    }
  }
  useEffect(()=>{
       window.addEventListener("scroll", scrollToptoBottom);
       return () => window.removeEventListener('scroll',scrollToptoBottom)
  },[])
  const footerInfo = [
    {
      social: [
        {icon:<i className='bi bi-facebook'></i>},
        {icon:<i className='bi bi-instagram'></i>},
        {icon:<i className='bi bi-linkedin'></i>},
        {icon:<i className='bi bi-twitter'></i>}
      ],
      texts: [
        {text:'Business Consulting'},
        {text:'Financial Investment'},
        {text:'Corporate Businessg'},
        {text:'IT Consulting'},
        {text:'Web Strategy'},
        {text:'Business Development'}
      ]
    }
  ]
  const mediaInfo = [
       {
        image: mediaImg,
        heading: 'Technology Is A Great Turning',
        date: "10 May, 2023"
       },
       {
        image: mediaImg2,
        heading: 'Technology Is A Great Turning',
        date: "10 May, 2023"
       },
  ]
  const lastInfo = [
    {
      icons: <i className="bi bi-telephone-fill"></i>,
      txtLinks: [
        {
          txtLink: '+012 (345) 6789', to: "tel:+012 (345) 6789"
        },
        {
          txtLink: '+012 (345) 6789', to: "tel:+012 (345) 6789"
        }
      ]

    },
    {
      icons: <i className="bi bi-envelope"></i>,
      txtLinks: [
        {
          txtLink: 'example@gmail.com', to: "mailto:example@gmail.com"
        },
        {
          txtLink: 'info@zura.com', to: "mailto:info@zura.com"
        }
      ]

    },
    {
      icons: <i className="bi bi-geo-alt"></i>,
      txtLinks: [
        {
          txtLink: 'Office 4 Road 3 , north city 7124 Landmark Tower,New York'
        }
      ]

    }
  ]
  return (
    <footer>
       <div className='top-footer shadow-2xl'>
        <CContainer>
        <div className='flex justify-end w-full' style={{alignItems: "center"}}>
                    <h3>NewsLetter</h3>
                    <div className='flex' style={{width: "38%"}}>
                       <input type="email" placeholder='Email Address'/>
                       <button>Subscribe</button>
                    </div>
               </div>
        </CContainer>
               </div>
               <CContainer>
               <div className='middle-footer' style={{padding: "30px 0 20px 0"}}>
                <CRow>
                   <CCol lg={4}>
                   <div className='middle-box'>
                    <div className='middle-img'>
                    <img src={footerLogo} alt="" />
                    </div>  
                    <div style={{padding: "10px 25px 15px 25px"}}>
                    <h2>About Company
                       </h2>
                       <p>
                       Professionally monetize timely paradigms for team driven action items. Seamlessly expedite superior meta-services via cooperative.
                       </p>
                       {footerInfo.map((item,i)=>(
                        <ul className='flex' key={i}>
                          {item.social.map((soc,i)=>(
                            <li key={i}>{soc.icon}</li>
                          ))}
                       </ul>
                       ))}
                      </div> 
                    </div> 
                   </CCol>
                   <CCol lg={2}>
                      <h4>Quick Links
                      </h4>
                      {footerInfo.map((item,i)=>(
                      <ul className='menu' key={i}>
                        {item.texts.map((txt, i)=>(
                            <li key={i}>{txt.text}</li>
                        ))}
                      </ul>
                      ))}
                   </CCol>
                   <CCol lg={3}>
                      <h4>Popular Posts</h4>
                      {mediaInfo.map((media,i)=>(
                        <div className='flex media-box' key={i}>
                        <img src={media.image} alt="" />
                        <div className='grow-0'>
                              <h5>
                        {media.heading}
                        </h5>
                        <span>{media.date}</span>
                        </div>
                        </div>
                      ))}
                   </CCol>
                   <CCol lg={3}>
                        <h4>Contact Us
                        </h4>
                        {lastInfo.map((lst,i)=>(
                          <div className='flex middleLast' key={i}>
                           {lst.icons}
                          <div className='grow-0'>
                            {lst.txtLinks.map((txt,i)=>(
                                <h6 key={i}><Link to={txt.to}>{txt.txtLink}</Link></h6>
                            ))}
                          </div>
                          </div>
                        ))}
                   </CCol>
                </CRow>
               </div>
               {/* bottom  footer */}
               <div className='bottom-footer'>
                       <hr />
                       <div className='flex justify-between'>
                        <div>
                        <p>Copyright © 2025 Solutya Pvt. Ltd. All Rights Reserved</p>
                        </div>
                           <div className='flex last-p'>
                              <p className='cursor-pointer'>Privacy Policy</p>
                              <p className='cursor-pointer'> Cookie Policy</p>
                           </div>
                        </div>                  
               </div>
           </CContainer>
           {/* scrollTop to Bottom */}
           {scorll && (
            <button onClick={handleScroll} className='scroll-top shadow-2xl'>
            <i className='bi bi-arrow-up'></i>
            </button>
           )}596692
    </footer>
  )
}

export default Footer;