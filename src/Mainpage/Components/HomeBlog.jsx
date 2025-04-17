import { CCol, CContainer, CRow } from '@coreui/react'
import React from 'react';
import blog from '/src/assets/Images/blog.png';
import blogSmall from '/src/assets/Images/p1.png';
import blog2 from '/src/assets/Images/blog2.png';
import blogSmall2 from '/src/assets/Images/p2.png';
import blog3 from '/src/assets/Images/blog3.png';
import blogSmall3 from '/src/assets/Images/p3.png';


const HomeBlog = () => {
    const bloginfo = [
        {
            image:blog,
            imgSmall: blogSmall,
            date: "February 15, 2025",
            heading: " Data Security With Multiple",
            para: " There or are many the variations of passages of Lorem Ipsum or available, but the majority have but the majority",
            name: "Mr. Onsequat",
            profession: "Vesoz Admin"
        },
        {
            image:blog2,
            imgSmall: blogSmall2,
            date: "February 15, 2025",
            heading: " Data Security With Multiple",
            para: " There or are many the variations of passages of Lorem Ipsum or available, but the majority have but the majority",
            name: "Mr. Onsequat",
            profession: "Vesoz Admin"
        },
        {
            image:blog3,
            imgSmall: blogSmall3,
            date: "February 15, 2025",
            heading: " Data Security With Multiple",
            para: " There or are many the variations of passages of Lorem Ipsum or available, but the majority have but the majority",
            name: "Mr. Onsequat",
            profession: "Vesoz Admin"
        }
    ]
  return (
     <section className='blog'>
         <CContainer>
              <div className='text-center'>
                  <h2>Latest News & Articles
                  </h2>
                  <p>
                  On the other hand denounce righteous indignation dislike mens who beguiled and demoralized charmso pleasure
                  </p>
              </div>
              <CRow>
                {bloginfo.map((item, index)=> {
                    const {image,date, imgSmall, heading, para, name, profession} = item;
                    return (
                        <CCol lg={4} key={index}>
                        <div className='mainBx shadow-2xl'>
                            <div className='overflow-hidden blogImg'>
                            <img src={image} alt="" className='w-full'/>
                            </div>
                            <div className='blogbox bg-white'>
                               <h6>{date}</h6>
                               <h2>
                               {heading}
                               </h2>
                               <p>
                               {para}
                               </p>
                               <div className='flex'>
                                    <div className='shrink-0'>
                                         <img src={imgSmall} alt="" />
                                    </div>
                                    <div className='grow-0' style={{marginLeft: "10px"}}>
                                        <h4>{name}</h4>
                                        <h6>{profession}</h6>
                                    </div>
                               </div>
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

export default HomeBlog;