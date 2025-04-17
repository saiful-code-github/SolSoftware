import React from 'react'
import { CCarousel, CCarouselCaption, CCarouselItem, CImage } from '@coreui/react';
import bannerOne from '/src/assets/Images/s1.png';
import bannerTwo from '/src/assets/Images/s2.png';
import bannerThree from '/src/assets/Images/s3.png';
import 'animate.css';
import CButon from './CButon';

export const Homebanner = () => {
    const bannerInfo = [
        {
            image: bannerOne,
            heading: "Next Level Automation System",
            headingTwo: "For Tech",
            headingSub: "IT Solutions",
            para: "We provide Website Design, Website Development, Cheap Domain & Hosting, Reliable Hosting Server, Software Development"
        },
        {
            image: bannerTwo,
            heading: "Next Level Automation System",
            headingTwo: "For Tech",
            headingSub: "IT Solutions",
            para: "We provide Website Design, Website Development, Cheap Domain & Hosting, Reliable Hosting Server, Software Development"
        },
        {
            image: bannerThree,
            heading: "Next Level Automation System",
            headingTwo: "For Tech",
            headingSub: "IT Solutions",
            para: "We provide Website Design, Website Development, Cheap Domain & Hosting, Reliable Hosting Server, Software Development"
        }
    ]
  return (
    <section>
   <CCarousel controls indicators>
    {bannerInfo.map((item,index)=> {
        const {image, heading, headingTwo, headingSub, para} = item;
        return (
            <CCarouselItem key={index}>
            <CImage className="d-block w-100 h-[650px] object-cover" src={image} alt="slide 1" />
            <CCarouselCaption className="d-none d-md-block mb-[100px]">
                <h3 className='animate__animated animate__backInLeft animate__delay-1s'>{heading}</h3>
                <h1 className='animate__animated animate__lightSpeedInLeft animate__delay-2s'>{headingTwo}
                    <span className='animate__animated animate__lightSpeedInRight animate__delay-3s block'>{headingSub}</span> </h1>
              <p className='animate__animated animate__zoomInRight animate__delay-4s block'>{para}</p>
              <CButon className="button animate__animated animate__zoomInUp animate__delay-5s block" text="Read More" />
            </CCarouselCaption>
          </CCarouselItem>
        )
    })}
    </CCarousel>
    </section>
  )
}
