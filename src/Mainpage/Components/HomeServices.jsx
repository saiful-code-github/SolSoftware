import { CCol, CContainer, CRow } from '@coreui/react';
import React from 'react';
import serviceOne from '/src/assets/Images/1-2.png';
import serviceTwo from '/src/assets/Images/2-2.png';
import serviceThree from '/src/assets/Images/3-2.png';
import iconOne  from '/src/assets/Images/1.svg';
import  iconTwo from '/src/assets/Images/2.svg';
import iconThree from '/src/assets/Images/3.svg'
import CButon from './CButon';

const HomeServices = () => {
    const serviceInfo = [
         {
            image: serviceOne,
            icon: iconOne,
            heading: "App Development",
            para: "Sed quis sagittis turpis, dignissim ultrices sem. Ut fermentum velit eget justo fringillabibe ndum integer rutrum condi"
         },
         {
            image: serviceTwo,
            icon: iconTwo,
            heading: "Data Analysis",
            para: "Sed quis sagittis turpis, dignissim ultrices sem. Ut fermentum velit eget justo fringillabibe ndum integer rutrum condi"
         },
         {
            image: serviceThree,
            icon: iconThree,
            heading: "Software Development",
            para: "Sed quis sagittis turpis, dignissim ultrices sem. Ut fermentum velit eget justo fringillabibe ndum integer rutrum condi"
         },

    ]
  return (
     <section style={{padding: "40px 0"}} className='services'>
          <CContainer>
               <div className='text-center' style={{marginBottom: "30px"}}>
                   <h2>We Provide Exclusive Service
                   </h2>
                   <p>
                   On the other hand denounce righteous indignation dislike mens who beguiled and demoralized charmso pleasure
                   </p>
               </div>
               <CRow>
                {serviceInfo.map((item, index)=> {
                    const {image, icon, heading, para} =  item;
                    return (
                        <CCol lg={4} key={index}>
                        <div style={{background: "#fff"}} className='service-box shadow-2xl rounded-[10px]'>
                            <img src={image} alt="" className='rounded-tl-[10px] rounded-tr-[10px]'/>
                              <div className='service-img shadow-2xl'>
                                   <img src={icon} alt="" />
                              </div>
                              <div className='py-[20px] px-[20px]' style={{padding: "25px 20px"}}>
                              <h3>{heading}</h3>
                              <p>
                                {para}
                              </p>
                              <CButon className="button" text="Read More"/>
                              </div>
                         </div> 
                    </CCol>
                    )
                })}
               </CRow>
          </CContainer>
     </section>
  )
}

export default HomeServices