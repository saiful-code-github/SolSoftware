import { CCol, CContainer, CRow } from '@coreui/react'
import React, { useState } from 'react';
import contact from '/src/assets/Images/1-3.png'
import CButon from './CButon';

const HomeContact = () => {
    const [input, setInput] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    })
    // handleInput
    const handleInput = (e) => {
        const {name,value} = e.target;
        setInput((prev)=>({
            ...prev,
            [name] : value
        }))
    }
    // handleSubmit
    const handleSubmit = (e) => {
        e.preventDefault();
        setInput({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: ""
        })
        console.log("all input are filed");
        console.log(input)
    }
  return (
     <section id='contactSection' style={{marginTop: "60px"}} className='contactSec'>
          <div className='contactBg'></div>
          <div className='contact-form'>
            <CContainer>
            <CRow>
                  <CCol lg={5}>
                     <img src={contact} alt="" />
                  </CCol>
                  <CCol lg={7}>
                       <h3>Our Tecnology Experts</h3>
                       <p>Your email address will not be published. Required fields are marked
                       </p>
                     <form onSubmit={handleSubmit}>
                        <CRow>
                            <CCol lg={6} style={{marginBottom: "25px"}}>
                                  <input type="text" placeholder='Your Name' name="name" className='outline-0 py-[10px] bg-white pl-[10px]' style={{outline: "none", padding: "10px 0px 10px 10px", background: "#fff",width: "100%" }} value={input.name} onChange={handleInput}/>
                            </CCol>
                            <CCol lg={6} style={{marginBottom: "25px"}}>
                                  <input type="email" placeholder='Email Address' name="email" className='outline-0 py-[10px] bg-white pl-[10px]' style={{outline: "none", padding: "10px 0px 10px 10px", background: "#fff",width: "100%" }} value={input.email} onChange={handleInput}/>
                            </CCol>
                            <CCol lg={6} style={{marginBottom: "25px"}}>
                                  <input type="tel" placeholder='Your phone' name="phone" className='outline-0 py-[10px] bg-white pl-[10px]' style={{outline: "none", padding: "10px 0px 10px 10px", background: "#fff",width: "100%" }} value={input.phone} onChange={handleInput}/>
                            </CCol>
                            <CCol lg={6} style={{marginBottom: "25px"}}>
                                  <input type="text" placeholder='Your Subject' name="subject" className='outline-0 py-[10px] bg-white pl-[10px]' style={{outline: "none", padding: "10px 0px 10px 10px", background: "#fff",width: "100%" }} value={input.subject} onChange={handleInput}/>
                            </CCol>
                            <CCol lg={12} style={{marginBottom: "25px"}} >
                                  <textarea  rows={5} placeholder='Your Comment' name="message" className='outline-0 py-[10px] bg-white pl-[10px]' style={{outline: "none", padding: "10px 0px 10px 10px", background: "#fff",width: "100%" }} value={input.message} onChange={handleInput}/>
                            </CCol>
                            <CButon className="button" text="Send Message"/>
                        </CRow>
                     </form>
                  </CCol>
              </CRow>
            </CContainer>
          </div>
     </section>
  )
}

export default HomeContact