import { CCol, CContainer, CRow,CAccordion, CAccordionBody, CAccordionHeader, CAccordionItem } from '@coreui/react'
import React from 'react';
import faqImg from '/src/assets/Images/faq.gif';

const Faq = () => {
    const faqInfo = [
        {
            heading: 'Can I create ads for different platforms using ABQ only?',
            para: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti."
        },
        {
            heading: 'How does creating ads with ABQ help me in my advertising processes?',
            para: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti."
        },
        {
            heading: 'Is it any limit on the number of publishing ads in ABQ?',
            para: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti."
        },
        {
            heading: 'Can I use my own images in my designs?',
            para: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti."
        },
        {
            heading: 'How can I cancel my subscription?',
            para: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti."
        },
        {
            heading: 'How can I manage my inefficient ads that I have identified with A/B testing?',
            para: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti."
        }
    ]
  return (
    <section className='FaqSec'>
         <CContainer>
               <div className='text-center'>
                   <h3>Frequently Asked Questions
                   </h3>
                   <p>
                   On the other hand denounce righteous indignation dislike mens who beguiled and demoralized charmso pleasure
                   </p>
               </div>
               <CRow>
                  <CCol lg={7}>
                  <CAccordion activeItemKey={1}>
                    {faqInfo.map((item,index)=>{
                        const {heading, para} = item;
                        return (
                           <CAccordionItem itemKey={index + 1} key={index}>
                        <CAccordionHeader>{heading}</CAccordionHeader>
                        <CAccordionBody>
                             {para}
                        </CAccordionBody>
                    </CAccordionItem>
                        )
                    })}
                    </CAccordion>
                  </CCol>
                  <CCol lg={5}>
                        <img src={faqImg} alt="" className='w-full'/>
                  </CCol>
               </CRow>
         </CContainer>
    </section>
  )
}

export default Faq