import { CContainer,CTooltip } from '@coreui/react'
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import teamOne from '/src/assets/Images/team1.png';
import teamTwo from '/src/assets/Images/team2.png';
import teamThree from '/src/assets/Images/team3.png';
import { Link } from 'react-router-dom';

const TeamMember = () => {
    const slickInfo = [
         {
            image:teamOne,
            icon: <i className="bi bi-share-fill"></i>,
            name: 'Zachary M. Hammel',
            profession: 'CEO & Founder',
            iconLink: <i className="bi bi-telephone-fill"></i>,
            links: [
                {to: '/', text: '+88094252580'}
            ],
            icons: [
                {icon: <i className='bi bi-facebook'></i>, content: 'facebook',placement:"left"},
                {icon: <i className='bi bi-instagram'></i>,content: 'instagram',placement:"left"},
                {icon: <i className='bi bi-twitter'></i>,content: 'twitter',placement:"left"},
            ]
         },
         {
            image:teamTwo,
            icon: <i className="bi bi-share-fill"></i>,
            name: 'Zachary M. Hammel',
            profession: 'CEO & Founder',
            iconLink: <i className="bi bi-telephone-fill"></i>,
            links: [
                {to: '/', text: '+88094252580'}
            ],
            icons: [
                {icon: <i className='bi bi-facebook'></i>, content: 'facebook',placement:"left"},
                {icon: <i className='bi bi-instagram'></i>,content: 'instagram',placement:"left"},
                {icon: <i className='bi bi-twitter'></i>,content: 'twitter',placement:"left"},
            ]
         },
         {
            image:teamThree,
            icon: <i className="bi bi-share-fill"></i>,
            name: 'Zachary M. Hammel',
            profession: 'CEO & Founder',
            iconLink: <i className="bi bi-telephone-fill"></i>,
            links: [
                {to: '/', text: '+88094252580'}
            ],
            icons: [
                {icon: <i className='bi bi-facebook'></i>, content: 'facebook',placement:"left"},
                {icon: <i className='bi bi-instagram'></i>,content: 'instagram',placement:"left"},
                {icon: <i className='bi bi-twitter'></i>,content: 'twitter',placement:"left"},
            ]
         },
         {
            image:teamOne,
            icon: <i className="bi bi-share-fill"></i>,
            name: 'Zachary M. Hammel',
            profession: 'CEO & Founder',
            iconLink: <i className="bi bi-telephone-fill"></i>,
            links: [
                {to: '/', text: '+88094252580'}
            ],
            icons: [
                {icon: <i className='bi bi-facebook'></i>, content: 'facebook',placement:"left"},
                {icon: <i className='bi bi-instagram'></i>,content: 'instagram',placement:"left"},
                {icon: <i className='bi bi-twitter'></i>,content: 'twitter',placement:"left"},
            ]
         },
         {
            image:teamTwo,
            icon: <i className="bi bi-share-fill"></i>,
            name: 'Zachary M. Hammel',
            profession: 'CEO & Founder',
            iconLink: <i className="bi bi-telephone-fill"></i>,
            links: [
                {to: '/', text: '+88094252580'}
            ],
            icons: [
                {icon: <i className='bi bi-facebook'></i>, content: 'facebook',placement:"left"},
                {icon: <i className='bi bi-instagram'></i>,content: 'instagram',placement:"left"},
                {icon: <i className='bi bi-twitter'></i>,content: 'twitter',placement:"left"},
            ]
         },
         {
            image:teamThree,
            icon: <i className="bi bi-share-fill"></i>,
            name: 'Zachary M. Hammel',
            profession: 'CEO & Founder',
            iconLink: <i className="bi bi-telephone-fill"></i>,
            links: [
                {to: '/', text: '+88094252580'}
            ],
            icons: [
                {icon: <i className='bi bi-facebook'></i>, content: 'facebook',placement:"left"},
                {icon: <i className='bi bi-instagram'></i>,content: 'instagram',placement:"left"},
                {icon: <i className='bi bi-twitter'></i>,content: 'twitter',placement:"left"},
            ]
         }
    ]
    var settings = {
        dots: true,
        infinite: false,
        margin: "20",
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
     <section className='teamsec text-center relative'>
          <CContainer>
               <div>
                   <h2>Professional Team Members
                   </h2>
                   <p>
                   On the other hand denounce righteous indignation dislike mens who beguiled and demoralized charmso pleasure
                   </p>
               </div>
               <Slider {...settings}>
                {
                    slickInfo.map((item,index)=>{
                        const {image,icon,name, profession, iconLink} = item;
                        return (
                            <div key={index} className='slickBox relative' style={{marginRight: "30px"}}>
                            <div>
                                <div className='overflow-hidden'>
                                <img src={image} alt="" className='w-full' style={{borderTopLeftRadius: "8px", borderTopRightRadius: "8px"}}/>
                                </div>
                            <div className='team-icons'>
                            <CTooltip content="Share" placement="left">
                              {icon}
                            </CTooltip>
                            <ul style={{margin: "0px",padding: "0px"}} className='iconBox'>
                               {item.icons.map((icon,ind)=>(
                                <li key={ind} className='cursor-pointer'>
                                    <CTooltip content={icon.content} placement={icon.placement}>
                                    {icon.icon}
                                    </CTooltip>
                                </li>
                               ))}
                            </ul>
                            </div>
                            </div>
                         <div className='shadow-2xl flex flex-col justify-center text-center textInfo' style={{padding: "30px 15px", borderRadius: "8px"}}>
                              <h4>{name}</h4>
                              <h5>{profession}</h5>
                              <div>
                              {iconLink}
                              {item.links.map((itm,ind)=>(
                                <Link to={itm.to} key={ind}> {itm.text}
                              </Link>
                              ))}
                              </div>
                         </div>
                   </div>
                        )
                    })
                }
         </Slider>
          </CContainer>
     </section>
  )
}

export default TeamMember