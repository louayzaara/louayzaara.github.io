import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/ME2.png'
import AVTR2 from '../../assets/ME2.png'
import AVTR3 from '../../assets/ME2.png'
import AVTR4 from '../../assets/ME2.png'

// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/modules/pagination/pagination.min.css';


/* An array of objects. */
const data = [
  {
    avatar: AVTR1,
    name: 'William Renald',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan maximus justo, nec tincidunt nibh porttitor vel.'
  },
  {
    avatar: AVTR2,
    name: 'Shane Squilderfeld',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan maximus justo, nec tincidunt nibh porttitor vel.'
  },
  {
    avatar: AVTR3,
    name: 'Anna Sharapove',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan maximus justo, nec tincidunt nibh porttitor vel.'
  },
  {
    avatar: AVTR4,
    name: 'Sellian Duboies',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan maximus justo, nec tincidunt nibh porttitor vel.'
  },
]

const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"// install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review,}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar One"/>
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default testimonials