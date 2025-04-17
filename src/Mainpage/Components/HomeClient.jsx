import { CCol, CContainer, CRow } from '@coreui/react';
import Slider from "react-slick";
import React from 'react';
import client from '/src/assets/Images/client.png';
import client2 from '/src/assets/Images/client2.png';

let slider1, slider2;

const HomeClient = () => {
  const clientInfo = [
    {
      para: '  “ I have been a keen observer of how the digital realm has been flourishing in our neighbour countries and BD has s some amazing progress over the years. I had previously made a list of the Digital Marketing agencies. ”',
      name: "Andrew Robertson",
      profession: "Marketing",
      icons: new Array(5).fill(<i className='bi bi-star-fill'></i>)
    },
    {
      para: ' “ I have been a keen observer of how the digital realm has been flourishing in our neighbour countries and BD has s some amazing progress over the years. I had previously made a list of the Digital Marketing agencies. ”',
      name: "Sarah Mitchell",
      profession: "Digital Strategist",
      icons: new Array(5).fill(<i className='bi bi-star-fill'></i>)
    },
    {
      para: ' “ I have been a keen observer of how the digital realm has been flourishing in our neighbour countries and BD has s some amazing progress over the years. I had previously made a list of the Digital Marketing agencies. ”',
      name: "John Doe",
      profession: "Consultant",
      icons: new Array(5).fill(<i className='bi bi-star-fill'></i>)
    }
  ];

  const clientImg = [
    { image: client },
    { image: client2 },
    { image: client }
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    initialSlide: 0,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => {
      // When slider1 changes, update slider2
      if (slider2) {
        slider2.slickGoTo(newIndex);
      }
    }
  };

  const settings2 = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    initialSlide: 0,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => {
      // When slider2 changes, update slider1
      if (slider1) {
        slider1.slickGoTo(newIndex);
      }
    }
  };

  return (
    <section className='client'>
      <CContainer>
        <div className='text-start mb-4 clientHead'>
          <h3>Our Feedbacks</h3>
          <h2>What Our Clients Say About Us</h2>
        </div>
        <CRow className="items-center" style={{marginTop: "25px"}}>
          <CCol lg={7}>
            <Slider {...settings} ref={slider => (slider1 = slider)}>
              {clientInfo.map((item, i) => (
                <div key={i}>
                  <hr style={{marginTop: "60px"}}/>
                  <p className='text-lg mb-4'>{item.para}</p>
                  <div className='flex justify-between items-center'>
                    <div>
                      <h4 className='font-semibold'>{item.name}</h4>
                      <p className='text-sm text-gray-500'>{item.profession}</p>
                    </div>
                    <ul className='flex space-x-1'>
                      {item.icons.map((icon, idx) => (
                        <li key={idx}>{icon}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </Slider>
          </CCol>
          <CCol lg={5}>
            <Slider {...settings2} ref={slider => (slider2 = slider)}>
              {clientImg.map((img, i) => (
                <div key={i} className='p-4'>
                  <img src={img.image} alt={`Client ${i}`} className='w-full h-auto rounded' />
                </div>
              ))}
            </Slider>
          </CCol>
        </CRow>
      </CContainer>
    </section>
  );
};

export default HomeClient;
