import { CCol, CContainer, CRow } from '@coreui/react';
import Slider from "react-slick";
import React, { useRef, useState, useEffect } from 'react';
import client from '/src/assets/Images/client.png';
import client2 from '/src/assets/Images/client2.png';

const HomeClientHook = () => {
  const textSliderRef = useRef(null);
  const imageSliderRef = useRef(null);

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  useEffect(() => {
    setNav1(textSliderRef.current);
    setNav2(imageSliderRef.current);
  }, []);

  const clientInfo = [
    {
      para: ' “ I have been a keen observer of how the digital realm has been flourishing in our neighbour countries... ”',
      name: "Andrew Robertson",
      profession: "Marketing",
      icons: new Array(5).fill(<i className='bi bi-star'></i>)
    },
    {
      para: ' “ I had previously made a list of the Digital Marketing agencies... ”',
      name: "Sarah Mitchell",
      profession: "Digital Strategist",
      icons: new Array(5).fill(<i className='bi bi-star'></i>)
    },
    {
      para: ' “ Bangladesh has made some amazing progress in recent years... ”',
      name: "John Doe",
      profession: "Consultant",
      icons: new Array(5).fill(<i className='bi bi-star'></i>)
    }
  ];

  const clientImg = [
    { image: client },
    { image: client2 },
    { image: client }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section style={{ marginTop: "100px" }} className='client2'>
      <CContainer>
        <div className='text-center mb-8'>
          <h3>Our Feedbacks</h3>
          <h2>What Our Clients Say<br /> About Us</h2>
        </div>
        <CRow className="items-center">
          <CCol lg={7}>
            <Slider {...sliderSettings} asNavFor={nav2} ref={textSliderRef}>
              {clientInfo.map((item, i) => (
                <div key={i}>
                  <hr />
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
            <Slider {...sliderSettings} asNavFor={nav1} ref={imageSliderRef}>
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
}

export default HomeClientHook;
