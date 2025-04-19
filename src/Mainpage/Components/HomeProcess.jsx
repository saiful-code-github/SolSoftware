import { CCol,CProgress , CRow } from '@coreui/react'
import React from 'react';
import processImg from '/src/assets/Images/4.png';

const HomeProcess = () => {
    const proInfo = [
        {
            value: 75,
            heading : "Productivity",
            number: 75,
        },
        {
            value: 85,
            heading : "Digital Marketing",
            number: 85
        },
        {
            value: 65,
            heading : "Technology",
            number: 65
        },
    ]
  return (
    <section className='overflow-hidden progressSec'>
        <CRow>
            <CCol lg="6">
              <img src={processImg} alt="" />
            </CCol>
            <CCol lg={6}>
                <div className='progessBox' style={{marginRight: "100px",marginTop: "70px"}}>
                <h3>Buisness Process
                    </h3>
                    <h2>Easy Way Build Success your Buisness Plan
                    </h2>
                    <p style={{marginBottom: "30px",marginTop: "30px"}}>
                    On the other hand denounce righteous indignation dislike mens who beguiled and demoralized charmso pleasure
                    </p>
                      <div>
                        {proInfo.map((item,index)=>{
                            const {value, heading,number} = item;
                            return (
                                <div key={index} style={{marginBottom: "25px"}}>
                                  <div className='flex justify-between'>
                                <h4>{heading}</h4>
                                <span>{number}%
                                </span>
                                </div>
                              <CProgress value={value}>
                              </CProgress> 
                                </div>
                            )
                        })}
                      </div>
                </div>
                </CCol>
        </CRow>
    </section>
  )
}

export default HomeProcess