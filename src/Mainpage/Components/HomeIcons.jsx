import { CCol, CContainer, CRow } from '@coreui/react'
import React from 'react';
import icon1 from '/src/assets/Images/1.png';
import icon2 from '/src/assets/Images/2.png';
import icon3 from '/src/assets/Images/3.png';
import CButon from './CButon';

const HomeIcons = () => {
    const homeIconinfo = [
        {
            image: icon1,
            heading: 'Discoery & Assesment',
            para: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
        },
        {
            image: icon2,
            heading: 'Discoery & Assesment',
            para: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
        },
        {
            image: icon3,
            heading: 'Discoery & Assesment',
            para: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
        }
    ]
  return (
    <section className='bg-[#eff4fa] homeicons'>
        <CContainer>
              <CRow>
                {homeIconinfo.map((item,index)=>{
                    const {image, heading, para} = item;
                    return (
                      <CCol lg={4} key={index}>
                    <div className='box shadow-2xl'>
                       <img src={image} alt="" />
                       <h3>{heading}</h3>
                       <p>
                         {para}
                       </p>
                       <CButon className="button" text="Read More"/>
                    </div>
                 </CCol>
                    )
                })}
              </CRow>
        </CContainer>
    </section>
  )
}

export default HomeIcons